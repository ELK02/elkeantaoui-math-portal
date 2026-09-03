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
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Les Droites Remarquables du Triangle · Cours et exercices corrigés | 2AC",
  description:
    "Cours complet sur les droites remarquables d'un triangle (médiatrice, bissectrice, hauteur, médiane) et 10 exercices corrigés, 2ᵉ année collège, semestre 1.",
  kicker: "2ᵉ Année Collège · Chapitre 6",
  heroTitle: "Les droites remarquables dans un triangle",
  heroSubtitle:
    "Médiatrice, bissectrice, hauteur et médiane : quatre familles de droites, leurs points de concours, puis 10 exercices corrigés un par un.",
  footerNote: "Droites remarquables du triangle · Mathématiques, 2ᵉ année collège, semestre 1.",
  sections: [
    { id: "cours", label: "Cours" },
    { id: "rappel", label: "Rappel express" },
    { id: "serie", label: "Exercices" },
  ],
};

/** Two-column layout: statement / correction text on the left, a diagram on the right. */
function Figure({ text, svg }: { text: ReactNode; svg: ReactNode }) {
  return (
    <div className="grid items-center gap-6 sm:grid-cols-5">
      <div className="space-y-2 text-sm text-foreground sm:col-span-3">{text}</div>
      <div className="flex justify-center sm:col-span-2">{svg}</div>
    </div>
  );
}

/** A numbered definition card used in the "Cours" section (I, II, III, IV). */
function CourseCard({
  numeral,
  title,
  visual,
  children,
  footer,
}: {
  numeral: ReactNode;
  title: string;
  visual: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <article className="mb-6 overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="grid items-center gap-6 p-6 sm:p-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-950 text-sm font-bold text-white dark:bg-white dark:text-neutral-950">
              {numeral}
            </span>
            <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">{title}</h3>
          </div>
          <div className="space-y-3">{children}</div>
        </div>
        <div className="flex justify-center lg:col-span-2">{visual}</div>
      </div>
      {footer ? <div className="border-t border-border bg-surface-muted p-6 sm:p-8">{footer}</div> : null}
    </article>
  );
}

function DefBox({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
      <p className="mb-1 text-xs font-semibold uppercase text-foreground-muted">{label}</p>
      <p className="text-foreground">{children}</p>
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
          { value: "10", label: "exercices" },
          { value: "4", label: "droites remarquables" },
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
              href="#serie"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Aller aux exercices
            </a>
          </>
        }
        visual={
          <svg viewBox="0 0 220 200" className="h-56 w-56 text-white sm:h-72 sm:w-72">
            <polygon points="110,20 20,170 200,150" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.85" />
            <line x1="110" y1="20" x2="110" y2="160" stroke="#fb923c" strokeWidth="2.5" />
            <line x1="20" y1="170" x2="155" y2="85" stroke="#fb923c" strokeWidth="2.5" opacity="0.55" />
            <circle cx="110" cy="20" r="4" fill="currentColor" />
            <circle cx="20" cy="170" r="4" fill="currentColor" />
            <circle cx="200" cy="150" r="4" fill="currentColor" />
            <circle cx="113" cy="107" r="4.5" fill="#fb923c" />
          </svg>
        }
      />

      {/* ===================== COURS ===================== */}
      <LessonSection
        id="cours"
        kicker="01 · Les quatre familles"
        title="Les quatre droites remarquables"
        tone="light"
        description="Chaque triangle a trois médiatrices, trois bissectrices, trois hauteurs et trois médianes. Dans chaque famille, les trois droites se coupent au même point."
      >
        <CourseCard
          numeral="I"
          title="Médiatrice d'un triangle"
          visual={
            <svg viewBox="0 0 250 230" className="h-auto w-full max-w-[280px]">
              <circle cx="122.2" cy="120.1" r="88" fill="none" stroke="#4f46e5" strokeWidth="1.4" strokeDasharray="4 3" opacity="0.55" />
              <polygon points="120,32 40,152 208,140" fill="none" stroke="#334155" strokeWidth="2" />
              <line x1="21.8" y1="53.2" x2="138.2" y2="130.9" stroke="#e11d48" strokeWidth="1.8" />
              <line x1="118.3" y1="66.2" x2="129.7" y2="225.8" stroke="#059669" strokeWidth="1.8" />
              <rect x="76" y="86" width="7" height="7" fill="none" stroke="#334155" strokeWidth="1" />
              <rect x="119" y="141" width="7" height="7" fill="none" stroke="#334155" strokeWidth="1" />
              <circle cx="122.2" cy="120.1" r="3.5" fill="#0f172a" />
              <text x="129" y="118" fontSize="12" fontWeight="700" fill="#0f172a">O</text>
              <circle cx="120" cy="32" r="2.8" fill="#0f172a" /><text x="110" y="24" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
              <circle cx="40" cy="152" r="2.8" fill="#0f172a" /><text x="20" y="166" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
              <circle cx="208" cy="140" r="2.8" fill="#0f172a" /><text x="213" y="150" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
            </svg>
          }
        >
          <DefBox label="Définition">
            La médiatrice d&apos;un triangle, c&apos;est <strong>la médiatrice de l&apos;un de ses côtés</strong>.
          </DefBox>
          <Callout variant="warning" title="Remarque">Chaque triangle a trois médiatrices.</Callout>
          <div className="rounded-xl border border-border p-4 text-sm">
            <p className="mb-1 font-semibold text-foreground-muted">Propriété · centre du cercle circonscrit</p>
            <p>
              Le centre du cercle circonscrit à un triangle est <strong>le point de rencontre de ses trois
              médiatrices</strong>. Il suffit d&apos;en tracer deux pour le déterminer.
            </p>
          </div>
          <Callout variant="danger" title="Cas particulier">
            Si le triangle a un angle obtus, le centre du cercle circonscrit se trouve <strong>à l&apos;extérieur</strong> du
            triangle.
          </Callout>
        </CourseCard>

        <CourseCard
          numeral="II"
          title="Bissectrice d'un triangle"
          visual={
            <svg viewBox="0 0 250 230" className="h-auto w-full max-w-[280px]">
              <circle cx="123.4" cy="103.4" r="42.5" fill="none" stroke="#4f46e5" strokeWidth="1.4" strokeDasharray="4 3" opacity="0.55" />
              <polygon points="120,32 40,152 208,140" fill="none" stroke="#334155" strokeWidth="2" />
              <line x1="120" y1="32" x2="125.4" y2="145.9" stroke="#e11d48" strokeWidth="1.8" />
              <line x1="40" y1="152" x2="160.6" y2="81.8" stroke="#059669" strokeWidth="1.8" />
              <circle cx="123.4" cy="103.4" r="3.5" fill="#0f172a" />
              <text x="130" y="101" fontSize="12" fontWeight="700" fill="#0f172a">I</text>
              <circle cx="120" cy="32" r="2.8" fill="#0f172a" /><text x="110" y="24" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
              <circle cx="40" cy="152" r="2.8" fill="#0f172a" /><text x="20" y="166" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
              <circle cx="208" cy="140" r="2.8" fill="#0f172a" /><text x="213" y="150" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
              <text x="122" y="152" fontSize="11" fill="#e11d48">E</text>
              <text x="164" y="84" fontSize="11" fill="#059669">F</text>
            </svg>
          }
        >
          <DefBox label="Définition">
            La bissectrice d&apos;un triangle, c&apos;est <strong>la bissectrice de l&apos;un de ses angles</strong>.
          </DefBox>
          <Callout variant="warning" title="Remarque">Chaque triangle a trois bissectrices.</Callout>
          <div className="rounded-xl border border-border p-4 text-sm">
            <p className="mb-1 font-semibold text-foreground-muted">Propriété · centre du cercle inscrit</p>
            <p>
              Le centre du cercle inscrit à un triangle est <strong>le point de rencontre de ses trois
              bissectrices</strong>. Il suffit d&apos;en tracer deux pour le déterminer.
            </p>
          </div>
        </CourseCard>

        <CourseCard
          numeral="III"
          title="Hauteur d'un triangle"
          visual={
            <svg viewBox="0 0 250 230" className="h-auto w-full max-w-[280px]">
              <polygon points="120,32 40,152 208,140" fill="none" stroke="#334155" strokeWidth="2" />
              <line x1="120" y1="32" x2="131" y2="163" stroke="#e11d48" strokeWidth="1.8" />
              <line x1="40" y1="152" x2="155" y2="58" stroke="#059669" strokeWidth="1.8" />
              <rect x="123" y="140" width="7" height="7" fill="none" stroke="#334155" strokeWidth="1" />
              <rect x="140" y="60" width="7" height="7" fill="none" stroke="#334155" strokeWidth="1" />
              <circle cx="123.7" cy="83.8" r="3.5" fill="#0f172a" />
              <text x="130" y="82" fontSize="12" fontWeight="700" fill="#0f172a">H</text>
              <circle cx="120" cy="32" r="2.8" fill="#0f172a" /><text x="110" y="24" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
              <circle cx="40" cy="152" r="2.8" fill="#0f172a" /><text x="20" y="166" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
              <circle cx="208" cy="140" r="2.8" fill="#0f172a" /><text x="213" y="150" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
            </svg>
          }
        >
          <DefBox label="Définition">
            La hauteur d&apos;un triangle est <strong>la droite passant par un sommet</strong> et{" "}
            <strong>perpendiculaire au côté opposé</strong> à ce sommet. Le point où elle coupe ce côté s&apos;appelle
            le <em>pied</em> de la hauteur.
          </DefBox>
          <Callout variant="warning" title="Remarque">Chaque triangle a trois hauteurs.</Callout>
          <div className="rounded-xl border border-border p-4 text-sm">
            <p className="mb-1 font-semibold text-foreground-muted">Propriété · orthocentre</p>
            <p>
              L&apos;orthocentre d&apos;un triangle est <strong>le point de rencontre de ses trois hauteurs</strong>.
              Il suffit d&apos;en tracer deux pour le déterminer.
            </p>
          </div>
          <Callout variant="danger" title="Cas particulier">
            Si le triangle a un angle obtus, l&apos;orthocentre se trouve <strong>à l&apos;extérieur</strong> du triangle.
          </Callout>
        </CourseCard>

        <CourseCard
          numeral="IV"
          title="Médiane d'un triangle"
          visual={
            <svg viewBox="0 0 250 230" className="h-auto w-full max-w-[280px]">
              <polygon points="120,32 40,152 208,140" fill="none" stroke="#334155" strokeWidth="2" />
              <line x1="120" y1="32" x2="124" y2="146" stroke="#e11d48" strokeWidth="1.8" />
              <line x1="40" y1="152" x2="164" y2="86" stroke="#059669" strokeWidth="1.8" />
              <line x1="124" y1="146" x2="118" y2="140" stroke="#334155" strokeWidth="1.4" />
              <line x1="124" y1="146" x2="130" y2="140" stroke="#334155" strokeWidth="1.4" />
              <circle cx="122.7" cy="108" r="3.5" fill="#0f172a" />
              <text x="129" y="106" fontSize="12" fontWeight="700" fill="#0f172a">G</text>
              <circle cx="120" cy="32" r="2.8" fill="#0f172a" /><text x="110" y="24" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
              <circle cx="40" cy="152" r="2.8" fill="#0f172a" /><text x="20" y="166" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
              <circle cx="208" cy="140" r="2.8" fill="#0f172a" /><text x="213" y="150" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
              <text x="126" y="158" fontSize="11" fill="#e11d48">M</text>
            </svg>
          }
          footer={
            <>
              <p className="mb-3 font-display font-bold text-foreground">📘 Exemple d&apos;application (issu du cours)</p>
              <Figure
                text={
                  <>
                    <p>
                      Soit ABM un triangle tel que <Math tex="AM = 6\text{ cm}" />. C est le symétrique de B par
                      rapport à M et M&apos; le milieu du segment [AC]. (AM) et (BM&apos;) se coupent en G.
                    </p>
                    <p className="font-semibold">1) Montrer que G est le centre de gravité du triangle ABC. 2) Calculer AG.</p>
                  </>
                }
                svg={
                  <Accordion>
                    <AccordionItem title="Voir la solution">
                      <div className="space-y-2">
                        <p>M&apos; est le milieu de [AC], donc (BM&apos;) est une médiane du triangle ABC.</p>
                        <p>C est le symétrique de B par rapport à M, donc M est le milieu de [BC] : (AM) est donc aussi une médiane du triangle ABC.</p>
                        <p>
                          (AM) et (BM&apos;) se coupent en G, donc <strong>G est le centre de gravité du triangle ABC</strong>.
                        </p>
                        <p>
                          Donc <Math tex="AG = \tfrac{2}{3}AM = \tfrac{2}{3}\times 6 = \tfrac{12}{3}" />, d&apos;où{" "}
                          <strong className="text-green-700"><Math tex="AG = \mathbf{4\text{ cm}}" /></strong>.
                        </p>
                      </div>
                    </AccordionItem>
                  </Accordion>
                }
              />
            </>
          }
        >
          <DefBox label="Définition">
            La médiane d&apos;un triangle est <strong>la droite passant par un sommet</strong> et{" "}
            <strong>le milieu du côté opposé</strong> à ce sommet.
          </DefBox>
          <Callout variant="warning" title="Remarque">Chaque triangle a trois médianes.</Callout>
          <div className="rounded-xl border border-border p-4 text-sm">
            <p className="mb-1 font-semibold text-foreground-muted">Propriété · centre de gravité</p>
            <p>
              Le centre de gravité d&apos;un triangle est <strong>le point de rencontre de ses trois médianes</strong>.
              Il suffit d&apos;en tracer deux pour le déterminer.
            </p>
          </div>
          <Callout variant="success" title="Propriété caractéristique">
            <p>Si G est le centre de gravité du triangle ABC et M le milieu de [BC], alors :</p>
            <p className="mt-1 text-center font-display text-lg font-bold text-green-700">
              <Math tex="AG = \tfrac{2}{3}AM" />
            </p>
          </Callout>
        </CourseCard>
      </LessonSection>

      {/* ===================== RAPPEL EXPRESS ===================== */}
      <LessonSection
        id="rappel"
        kicker="02 · Teste-toi"
        title="Teste tes définitions"
        tone="muted"
        description="Essaie de compléter chaque définition dans ta tête, puis clique pour vérifier."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <Accordion>
            <AccordionItem title="🔴 La médiatrice d'un triangle, c'est… ?">
              …la médiatrice de l&apos;un de ses côtés. Les trois médiatrices se coupent au{" "}
              <strong>centre du cercle circonscrit</strong>.
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem title="🟢 La bissectrice d'un triangle, c'est… ?">
              …la bissectrice de l&apos;un de ses angles. Les trois bissectrices se coupent au{" "}
              <strong>centre du cercle inscrit</strong>.
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem title="🔵 La hauteur d'un triangle, c'est… ?">
              …la droite passant par un sommet et perpendiculaire au côté opposé. Les trois hauteurs se coupent en{" "}
              <strong>l&apos;orthocentre</strong>.
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem title="🟡 La médiane d'un triangle, c'est… ?">
              …la droite passant par un sommet et le milieu du côté opposé. Les trois médianes se coupent au{" "}
              <strong>centre de gravité</strong> (<Math tex="AG = \tfrac{2}{3}AM" />).
            </AccordionItem>
          </Accordion>
        </div>
      </LessonSection>

      {/* ===================== SERIE D'EXERCICES ===================== */}
      <LessonSection
        id="serie"
        kicker="À toi de jouer"
        title="Exercices · Droites remarquables"
        tone="light"
        description="10 exercices corrigés. Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={10} celebrationTitle="Bravo, les 10 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les droites remarquables du triangle.">
          <ExerciseCard
            id="1"
            index={1}
            title={
              <>
                Orthocentre et hauteur issue de C
                <span className="block text-xs font-semibold uppercase tracking-wide text-foreground-muted">Construction &amp; justification</span>
              </>
            }
            items={
              <Figure
                text={
                  <>
                    <p>
                      Construis un triangle ABC avec <Math tex="BC = 6\text{ cm}" />, <Math tex="AB = 5{,}5\text{ cm}" />{" "}
                      et <Math tex="AC = 6{,}5\text{ cm}" />.
                    </p>
                    <ol className="list-decimal space-y-1 pl-5">
                      <li>Trace les hauteurs issues de A et de B. Elles se coupent en H. La droite (CH) coupe [AB] en M.</li>
                      <li>En justifiant, que représente le point H pour le triangle ABC ?</li>
                      <li>En justifiant, que représente [CM] pour le triangle ABC ?</li>
                    </ol>
                  </>
                }
                svg={
                  <svg viewBox="0 0 250 230" className="h-auto w-full max-w-[260px]">
                    <polygon points="120,32 40,152 208,140" fill="none" stroke="#334155" strokeWidth="2" />
                    <circle cx="120" cy="32" r="2.8" fill="#0f172a" /><text x="110" y="24" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                    <circle cx="40" cy="152" r="2.8" fill="#0f172a" /><text x="20" y="166" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
                    <circle cx="208" cy="140" r="2.8" fill="#0f172a" /><text x="213" y="150" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
                  </svg>
                }
              />
            }
            correction={
              <Figure
                text={
                  <>
                    <p>
                      <strong>2)</strong> Les hauteurs issues de A et de B se coupent en H. Or l&apos;orthocentre est le
                      point de rencontre des trois hauteurs, et il suffit d&apos;en tracer deux pour le déterminer.
                      Donc <strong className="text-green-700">H est l&apos;orthocentre du triangle ABC</strong>.
                    </p>
                    <p>
                      <strong>3)</strong> Puisque H est l&apos;orthocentre, les trois hauteurs sont concourantes en H :
                      la droite passant par C et par H est donc la troisième hauteur, celle{" "}
                      <strong>issue de C</strong>. Comme M ∈ [AB] ∩ (CH), M est le pied de cette hauteur. Donc{" "}
                      <strong className="text-green-700">[CM] est la hauteur issue de C</strong> (et{" "}
                      <Math tex="(CM) \perp (AB)" />).
                    </p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 250 230" className="h-auto w-full max-w-[260px]">
                    <polygon points="120,32 40,152 208,140" fill="none" stroke="#334155" strokeWidth="2" />
                    <line x1="120" y1="32" x2="131" y2="163" stroke="#e11d48" strokeWidth="1.8" />
                    <line x1="40" y1="152" x2="155" y2="58" stroke="#059669" strokeWidth="1.8" />
                    <line x1="208" y1="140" x2="97.3" y2="66.1" stroke="#4f46e5" strokeWidth="1.8" />
                    <rect x="123" y="140" width="7" height="7" fill="none" stroke="#334155" strokeWidth="1" />
                    <rect x="140" y="60" width="7" height="7" fill="none" stroke="#334155" strokeWidth="1" />
                    <circle cx="123.7" cy="83.8" r="3.5" fill="#0f172a" />
                    <text x="130" y="82" fontSize="12" fontWeight="700" fill="#0f172a">H</text>
                    <circle cx="97.3" cy="66.1" r="3" fill="#4f46e5" />
                    <text x="70" y="62" fontSize="12" fontWeight="700" fill="#4f46e5">M</text>
                    <circle cx="120" cy="32" r="2.8" fill="#0f172a" /><text x="110" y="24" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                    <circle cx="40" cy="152" r="2.8" fill="#0f172a" /><text x="20" y="166" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
                    <circle cx="208" cy="140" r="2.8" fill="#0f172a" /><text x="213" y="150" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
                  </svg>
                }
              />
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title={
              <>
                Cercle circonscrit à un triangle
                <span className="block text-xs font-semibold uppercase tracking-wide text-foreground-muted">Construction</span>
              </>
            }
            items={
              <Figure
                text={
                  <>
                    <p>
                      <strong>a)</strong> Construis le cercle circonscrit du triangle ABC si{" "}
                      <Math tex="AB = 6\text{ cm}" />, <Math tex="AC = 4\text{ cm}" /> et <Math tex="BC = 5\text{ cm}" />.
                    </p>
                    <p>
                      <strong>b)</strong> Trace le triangle ABC tel que <Math tex="AB = 10\text{ cm}" />,{" "}
                      <Math tex="AC = 8\text{ cm}" /> et <Math tex="\widehat{A} = 120^{\circ}" />. Construis le cercle
                      circonscrit du triangle ABC, puis place son orthocentre.
                    </p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 250 230" className="h-auto w-full max-w-[260px]">
                    <polygon points="120,32 40,152 208,140" fill="none" stroke="#334155" strokeWidth="2" />
                    <circle cx="120" cy="32" r="2.8" fill="#0f172a" /><text x="110" y="24" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                    <circle cx="40" cy="152" r="2.8" fill="#0f172a" /><text x="20" y="166" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
                    <circle cx="208" cy="140" r="2.8" fill="#0f172a" /><text x="213" y="150" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
                  </svg>
                }
              />
            }
            correction={
              <Figure
                text={
                  <>
                    <p>
                      <strong>a)</strong> On trace le triangle ABC avec les longueurs données, puis on trace les
                      médiatrices de deux de ses côtés (par exemple [AB] et [AC]) ; elles se coupent en O, le centre
                      du cercle circonscrit. Le cercle de centre O et de rayon OA (= OB = OC) est le cercle circonscrit.
                    </p>
                    <p>
                      <strong>b)</strong> L&apos;angle en A étant obtus (120°), le centre O du cercle circonscrit se
                      trouve <strong>à l&apos;extérieur</strong> du triangle. De même, en traçant deux hauteurs, on
                      obtient l&apos;orthocentre, qui est lui aussi à l&apos;extérieur du triangle dans ce cas.
                    </p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 250 230" className="h-auto w-full max-w-[260px]">
                    <circle cx="122.2" cy="120.1" r="88" fill="none" stroke="#4f46e5" strokeWidth="1.4" strokeDasharray="4 3" opacity="0.55" />
                    <polygon points="120,32 40,152 208,140" fill="none" stroke="#334155" strokeWidth="2" />
                    <line x1="21.8" y1="53.2" x2="138.2" y2="130.9" stroke="#e11d48" strokeWidth="1.8" />
                    <line x1="118.3" y1="66.2" x2="129.7" y2="225.8" stroke="#059669" strokeWidth="1.8" />
                    <circle cx="122.2" cy="120.1" r="3.5" fill="#0f172a" />
                    <text x="129" y="118" fontSize="12" fontWeight="700" fill="#0f172a">O</text>
                    <circle cx="120" cy="32" r="2.8" fill="#0f172a" /><text x="110" y="24" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                    <circle cx="40" cy="152" r="2.8" fill="#0f172a" /><text x="20" y="166" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
                    <circle cx="208" cy="140" r="2.8" fill="#0f172a" /><text x="213" y="150" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
                  </svg>
                }
              />
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title={
              <>
                Hauteur et médiatrice parallèles
                <span className="block text-xs font-semibold uppercase tracking-wide text-foreground-muted">Démonstration</span>
              </>
            }
            items={
              <Figure
                text={
                  <>
                    <p>
                      Construis un triangle ABC tel que <Math tex="BC = 6\text{ cm}" />, <Math tex="AB = 4\text{ cm}" />{" "}
                      et <Math tex="AC = 7\text{ cm}" />.
                    </p>
                    <ol className="list-decimal space-y-1 pl-5">
                      <li>Soit (d₁) la droite passant par A et perpendiculaire à [BC]. Comment s&apos;appelle cette droite ?</li>
                      <li>Place A&apos;, milieu de [BC]. Trace (d₂) passant par A&apos; et perpendiculaire à [BC]. Comment s&apos;appelle cette droite ?</li>
                      <li>Que peux-tu dire de (d₁) et (d₂) ? Justifie.</li>
                      <li>Trace la droite passant par A et A&apos;. Comment s&apos;appelle-t-elle ?</li>
                    </ol>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 260" className="h-auto w-full max-w-[280px]">
                    <polygon points="150,30 40,190 260,170" fill="none" stroke="#334155" strokeWidth="2" />
                    <circle cx="150" cy="30" r="2.8" fill="#0f172a" /><text x="140" y="22" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                    <circle cx="40" cy="190" r="2.8" fill="#0f172a" /><text x="20" y="204" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
                    <circle cx="260" cy="170" r="2.8" fill="#0f172a" /><text x="266" y="180" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
                    <circle cx="150" cy="180" r="2.8" fill="#059669" /><text x="128" y="196" fontSize="12" fontWeight="700" fill="#059669">A&apos;</text>
                  </svg>
                }
              />
            }
            correction={
              <Figure
                text={
                  <>
                    <p><strong>1)</strong> (d₁) passe par le sommet A et est perpendiculaire au côté opposé [BC] : c&apos;est <strong className="text-green-700">la hauteur issue de A</strong>.</p>
                    <p><strong>2)</strong> (d₂) passe par le milieu A&apos; de [BC] et est perpendiculaire à [BC] : c&apos;est <strong className="text-green-700">la médiatrice de [BC]</strong>.</p>
                    <p>
                      <strong>3)</strong> <Math tex="(d_1) \perp (BC)" /> et <Math tex="(d_2) \perp (BC)" /> : deux
                      droites perpendiculaires à une même troisième droite sont parallèles entre elles. Donc{" "}
                      <strong className="text-green-700"><Math tex="(d_1) \parallel (d_2)" /></strong>.
                    </p>
                    <p><strong>4)</strong> La droite passant par A et A&apos; (milieu de [BC]) est <strong className="text-green-700">la médiane issue de A</strong>.</p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 260" className="h-auto w-full max-w-[280px]">
                    <polygon points="150,30 40,190 260,170" fill="none" stroke="#334155" strokeWidth="2" />
                    <line x1="150" y1="30" x2="163.5" y2="178.8" stroke="#e11d48" strokeWidth="1.8" />
                    <line x1="143.7" y1="120.3" x2="156.3" y2="239.8" stroke="#059669" strokeWidth="1.8" />
                    <line x1="150" y1="15" x2="150" y2="195" stroke="#4f46e5" strokeWidth="1.8" strokeDasharray="5 3" />
                    <rect x="155" y="170" width="7" height="7" fill="none" stroke="#334155" strokeWidth="1" />
                    <rect x="146" y="172" width="7" height="7" fill="none" stroke="#334155" strokeWidth="1" />
                    <circle cx="150" cy="30" r="2.8" fill="#0f172a" /><text x="140" y="22" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                    <circle cx="40" cy="190" r="2.8" fill="#0f172a" /><text x="20" y="204" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
                    <circle cx="260" cy="170" r="2.8" fill="#0f172a" /><text x="266" y="180" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
                    <circle cx="150" cy="180" r="2.8" fill="#059669" /><text x="128" y="196" fontSize="12" fontWeight="700" fill="#059669">A&apos;</text>
                    <text x="164" y="60" fontSize="11" fill="#e11d48">(d₁)</text>
                    <text x="115" y="60" fontSize="11" fill="#4f46e5">(AA&apos;)</text>
                    <text x="160" y="230" fontSize="11" fill="#059669">(d₂)</text>
                  </svg>
                }
              />
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title={
              <>
                Les quatre points remarquables
                <span className="block text-xs font-semibold uppercase tracking-wide text-foreground-muted">Construction complète</span>
              </>
            }
            items={
              <Figure
                text={
                  <>
                    <p>
                      Construis un triangle ABC tel que <Math tex="AB = 14\text{ cm}" />, <Math tex="AC = 10\text{ cm}" />{" "}
                      et <Math tex="BC = 12\text{ cm}" />.
                    </p>
                    <ol className="list-decimal space-y-1 pl-5">
                      <li>Construis ses médiatrices en rouge, ses médianes en vert, ses hauteurs en bleu et ses bissectrices en noir.</li>
                      <li>Place G (centre de gravité), O (centre du cercle circonscrit), I (centre du cercle inscrit) et H (orthocentre).</li>
                      <li>Construis son cercle circonscrit et son cercle inscrit.</li>
                      <li>Trace la droite passant par O et G. Que remarque-t-on ?</li>
                    </ol>
                  </>
                }
                svg={
                  <svg viewBox="0 0 250 230" className="h-auto w-full max-w-[260px]">
                    <polygon points="120,32 40,152 208,140" fill="none" stroke="#334155" strokeWidth="2" />
                    <circle cx="120" cy="32" r="2.8" fill="#0f172a" /><text x="110" y="24" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                    <circle cx="40" cy="152" r="2.8" fill="#0f172a" /><text x="20" y="166" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
                    <circle cx="208" cy="140" r="2.8" fill="#0f172a" /><text x="213" y="150" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
                  </svg>
                }
              />
            }
            correction={
              <Figure
                text={
                  <>
                    <p>
                      Après construction des quatre familles de droites, on obtient quatre points distincts : O
                      (médiatrices), I (bissectrices), H (hauteurs) et G (médianes), chacun étant le centre du cercle
                      circonscrit, du cercle inscrit, l&apos;orthocentre et le centre de gravité respectivement.
                    </p>
                    <p className="font-semibold">4) Remarque :</p>
                    <p>
                      En traçant la droite (OG), on constate qu&apos;elle passe aussi par H :{" "}
                      <strong className="text-green-700">les points O, G et H sont alignés</strong>. Cette droite
                      remarquable s&apos;appelle la <strong className="text-green-700">droite d&apos;Euler</strong> du
                      triangle.
                    </p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 250 230" className="h-auto w-full max-w-[260px]">
                    <circle cx="122.2" cy="120.1" r="88" fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.5" />
                    <circle cx="123.4" cy="103.4" r="42.5" fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.5" />
                    <polygon points="120,32 40,152 208,140" fill="none" stroke="#334155" strokeWidth="2" />
                    <line x1="119" y1="60" x2="126" y2="150" stroke="#4f46e5" strokeWidth="1.6" strokeDasharray="6 4" />
                    <circle cx="122.2" cy="120.1" r="3.2" fill="#e11d48" /><text x="128" y="118" fontSize="11" fontWeight="700" fill="#e11d48">O</text>
                    <circle cx="122.7" cy="108" r="3.2" fill="#059669" /><text x="112" y="106" fontSize="11" fontWeight="700" fill="#059669">G</text>
                    <circle cx="123.7" cy="83.8" r="3.2" fill="#4f46e5" /><text x="129" y="82" fontSize="11" fontWeight="700" fill="#4f46e5">H</text>
                    <circle cx="123.4" cy="103.4" r="3.2" fill="#0f172a" /><text x="105" y="120" fontSize="11" fontWeight="700" fill="#0f172a">I</text>
                    <circle cx="120" cy="32" r="2.8" fill="#0f172a" /><text x="110" y="24" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                    <circle cx="40" cy="152" r="2.8" fill="#0f172a" /><text x="20" y="166" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
                    <circle cx="208" cy="140" r="2.8" fill="#0f172a" /><text x="213" y="150" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
                  </svg>
                }
              />
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title={
              <>
                Triangle isocèle : médianes et perpendicularité
                <span className="block text-xs font-semibold uppercase tracking-wide text-foreground-muted">Démonstration</span>
              </>
            }
            items={
              <Figure
                text={
                  <>
                    <p>
                      Soit LAC un triangle isocèle en L. A&apos; est le milieu de [LC] et C&apos; est le milieu de
                      [LA]. U est le point d&apos;intersection de [AA&apos;] et [CC&apos;].
                    </p>
                    <p className="font-semibold">Démontrer que (LU) est perpendiculaire à (AC).</p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 220" className="h-auto w-full max-w-[280px]">
                    <polygon points="150,30 70,190 230,190" fill="none" stroke="#334155" strokeWidth="2" />
                    <circle cx="150" cy="30" r="2.8" fill="#0f172a" /><text x="140" y="22" fontSize="13" fontWeight="700" fill="#0f172a">L</text>
                    <circle cx="70" cy="190" r="2.8" fill="#0f172a" /><text x="52" y="205" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                    <circle cx="230" cy="190" r="2.8" fill="#0f172a" /><text x="236" y="205" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
                  </svg>
                }
              />
            }
            correction={
              <Figure
                text={
                  <>
                    <p>A&apos; est le milieu de [LC], donc (AA&apos;) est une médiane du triangle LAC. C&apos; est le milieu de [LA], donc (CC&apos;) est aussi une médiane du triangle LAC.</p>
                    <p>
                      (AA&apos;) et (CC&apos;) se coupent en U, donc <strong>U est le centre de gravité du triangle
                      LAC</strong>. La troisième médiane, issue de L, passe donc aussi par U : (LU) est la médiane issue de L.
                    </p>
                    <p>
                      Or le triangle LAC est isocèle en L : dans un triangle isocèle, la médiane issue du sommet
                      principal est aussi la <strong>hauteur</strong> issue de ce sommet.
                    </p>
                    <p className="font-semibold text-green-700">
                      Conclusion : (LU) est la hauteur issue de L, donc <Math tex="(LU) \perp (AC)" />.
                    </p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 220" className="h-auto w-full max-w-[280px]">
                    <polygon points="150,30 70,190 230,190" fill="none" stroke="#334155" strokeWidth="2" />
                    <line x1="150" y1="30" x2="150" y2="190" stroke="#e11d48" strokeWidth="2" />
                    <line x1="70" y1="190" x2="190" y2="110" stroke="#4f46e5" strokeWidth="1.4" />
                    <line x1="230" y1="190" x2="110" y2="110" stroke="#059669" strokeWidth="1.4" />
                    <rect x="145" y="178" width="7" height="7" fill="none" stroke="#334155" strokeWidth="1" />
                    <circle cx="150" cy="137" r="3.2" fill="#0f172a" /><text x="156" y="135" fontSize="12" fontWeight="700" fill="#0f172a">U</text>
                    <circle cx="190" cy="110" r="2.5" fill="#4f46e5" /><text x="196" y="108" fontSize="11" fontWeight="700" fill="#4f46e5">A&apos;</text>
                    <circle cx="110" cy="110" r="2.5" fill="#059669" /><text x="86" y="108" fontSize="11" fontWeight="700" fill="#059669">C&apos;</text>
                    <circle cx="150" cy="30" r="2.8" fill="#0f172a" /><text x="140" y="22" fontSize="13" fontWeight="700" fill="#0f172a">L</text>
                    <circle cx="70" cy="190" r="2.8" fill="#0f172a" /><text x="52" y="205" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                    <circle cx="230" cy="190" r="2.8" fill="#0f172a" /><text x="236" y="205" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
                  </svg>
                }
              />
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title={
              <>
                Rectangle : perpendicularité via l&apos;orthocentre
                <span className="block text-xs font-semibold uppercase tracking-wide text-foreground-muted">Démonstration</span>
              </>
            }
            items={
              <Figure
                text={
                  <>
                    <p>ABCD est un rectangle. La médiatrice de [AC] coupe (AB) en E et (BC) en F.</p>
                    <p className="font-semibold">Démontre que (CE) et (AF) sont perpendiculaires.</p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 260 210" className="h-auto w-full max-w-[260px]">
                    <polygon points="60,190 230,190 230,60 60,60" fill="none" stroke="#334155" strokeWidth="2" />
                    <line x1="60" y1="190" x2="230" y2="60" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="3 3" />
                    <circle cx="60" cy="190" r="2.8" fill="#0f172a" /><text x="46" y="204" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                    <circle cx="230" cy="190" r="2.8" fill="#0f172a" /><text x="236" y="204" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
                    <circle cx="230" cy="60" r="2.8" fill="#0f172a" /><text x="236" y="56" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
                    <circle cx="60" cy="60" r="2.8" fill="#0f172a" /><text x="42" y="56" fontSize="13" fontWeight="700" fill="#0f172a">D</text>
                  </svg>
                }
              />
            }
            correction={
              <Figure
                text={
                  <>
                    <p>Considérons le triangle ACF.</p>
                    <p>
                      ABCD est un rectangle, donc <Math tex="(AB) \perp (BC)" />. Or F ∈ (BC), donc la droite (AB) est
                      perpendiculaire à (CF) et passe par le sommet A : <strong>(AB), c&apos;est-à-dire (AE), est la
                      hauteur issue de A</strong> dans le triangle ACF.
                    </p>
                    <p>
                      E et F appartiennent tous deux à la médiatrice de [AC] : la droite (EF) est donc perpendiculaire
                      à (AC) et passe par F : <strong>(EF) est la hauteur issue de F</strong> dans le triangle ACF.
                    </p>
                    <p>
                      Ces deux hauteurs se coupent en E, donc <strong>E est l&apos;orthocentre du triangle ACF</strong>.
                      La troisième hauteur, issue de C, passe donc elle aussi par E : c&apos;est la droite (CE), et elle
                      est perpendiculaire au côté opposé (AF).
                    </p>
                    <p className="font-semibold text-green-700">
                      Conclusion : <Math tex="(CE) \perp (AF)" />.
                    </p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 260 260" className="h-auto w-full max-w-[260px]">
                    <polygon points="60,190 230,190 230,60 60,60" fill="none" stroke="#cbd5e1" strokeWidth="1.6" strokeDasharray="4 3" />
                    <line x1="60" y1="190" x2="230" y2="60" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" />
                    <line x1="60" y1="190" x2="230" y2="236" stroke="#4f46e5" strokeWidth="1.8" />
                    <line x1="230" y1="60" x2="194.7" y2="190" stroke="#e11d48" strokeWidth="1.8" />
                    <rect x="223" y="183" width="7" height="7" fill="none" stroke="#334155" strokeWidth="1" />
                    <circle cx="60" cy="190" r="2.8" fill="#0f172a" /><text x="46" y="204" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                    <circle cx="230" cy="190" r="2.8" fill="#0f172a" /><text x="236" y="204" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
                    <circle cx="230" cy="60" r="2.8" fill="#0f172a" /><text x="236" y="56" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
                    <circle cx="60" cy="60" r="2.8" fill="#0f172a" /><text x="42" y="56" fontSize="13" fontWeight="700" fill="#0f172a">D</text>
                    <circle cx="194.7" cy="190" r="2.8" fill="#0f172a" /><text x="196" y="207" fontSize="12" fontWeight="700" fill="#0f172a">E</text>
                    <circle cx="230" cy="236" r="2.8" fill="#0f172a" /><text x="236" y="240" fontSize="12" fontWeight="700" fill="#0f172a">F</text>
                  </svg>
                }
              />
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title={
              <>
                Médiatrices et perpendicularité
                <span className="block text-xs font-semibold uppercase tracking-wide text-foreground-muted">Démonstration</span>
              </>
            }
            items={
              <Figure
                text={
                  <>
                    <p>EFG est un triangle quelconque. I est le milieu de [FG]. Les médiatrices de [EF] et [EG] se coupent en O.</p>
                    <p className="font-semibold">Démontre que la droite (OI) est perpendiculaire à la droite (GF).</p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 250 230" className="h-auto w-full max-w-[260px]">
                    <polygon points="120,32 40,152 208,140" fill="none" stroke="#334155" strokeWidth="2" />
                    <circle cx="120" cy="32" r="2.8" fill="#0f172a" /><text x="110" y="24" fontSize="13" fontWeight="700" fill="#0f172a">E</text>
                    <circle cx="40" cy="152" r="2.8" fill="#0f172a" /><text x="20" y="166" fontSize="13" fontWeight="700" fill="#0f172a">F</text>
                    <circle cx="208" cy="140" r="2.8" fill="#0f172a" /><text x="213" y="150" fontSize="13" fontWeight="700" fill="#0f172a">G</text>
                  </svg>
                }
              />
            }
            correction={
              <Figure
                text={
                  <>
                    <p>
                      O appartient à la médiatrice de [EF], donc <Math tex="OE = OF" />. O appartient à la médiatrice
                      de [EG], donc <Math tex="OE = OG" />.
                    </p>
                    <p>
                      On en déduit que <strong><Math tex="OF = OG" /></strong>, donc O appartient à la médiatrice de
                      [FG].
                    </p>
                    <p>Or I est le milieu de [FG], donc I appartient lui aussi à la médiatrice de [FG].</p>
                    <p>
                      Les points O et I appartiennent tous deux à la médiatrice de [FG] : la droite (OI) est donc{" "}
                      <strong>exactement la médiatrice de [FG]</strong>, qui est par définition perpendiculaire à (FG).
                    </p>
                    <p className="font-semibold text-green-700">
                      Conclusion : <Math tex="(OI) \perp (GF)" />.
                    </p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 250 230" className="h-auto w-full max-w-[260px]">
                    <polygon points="120,32 40,152 208,140" fill="none" stroke="#334155" strokeWidth="2" />
                    <line x1="21.8" y1="53.2" x2="138.2" y2="130.9" stroke="#e11d48" strokeWidth="1.6" />
                    <line x1="109.7" y1="130.2" x2="218.3" y2="41.8" stroke="#4f46e5" strokeWidth="1.6" />
                    <line x1="120.9" y1="98" x2="125.5" y2="168" stroke="#059669" strokeWidth="1.8" />
                    <rect x="119" y="141" width="7" height="7" fill="none" stroke="#334155" strokeWidth="1" />
                    <circle cx="122.2" cy="120.1" r="3.2" fill="#0f172a" /><text x="128" y="118" fontSize="11" fontWeight="700" fill="#0f172a">O</text>
                    <circle cx="124" cy="146" r="3.2" fill="#059669" /><text x="105" y="150" fontSize="11" fontWeight="700" fill="#059669">I</text>
                    <circle cx="120" cy="32" r="2.8" fill="#0f172a" /><text x="110" y="24" fontSize="13" fontWeight="700" fill="#0f172a">E</text>
                    <circle cx="40" cy="152" r="2.8" fill="#0f172a" /><text x="20" y="166" fontSize="13" fontWeight="700" fill="#0f172a">F</text>
                    <circle cx="208" cy="140" r="2.8" fill="#0f172a" /><text x="213" y="150" fontSize="13" fontWeight="700" fill="#0f172a">G</text>
                  </svg>
                }
              />
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title={
              <>
                Hauteur ∥ médiatrice (angle obtus)
                <span className="block text-xs font-semibold uppercase tracking-wide text-foreground-muted">Construction &amp; démonstration</span>
              </>
            }
            items={
              <Figure
                text={
                  <>
                    <p>
                      Construire un triangle ABC tel que <Math tex="AB = 3{,}5\text{ cm}" />,{" "}
                      <Math tex="ABC = 120^{\circ}" /> et <Math tex="BC = 5\text{ cm}" />.
                    </p>
                    <ol className="list-decimal space-y-1 pl-5">
                      <li>Tracer en bleu la hauteur issue de A et en vert la médiatrice du segment [BC].</li>
                      <li>Démontrer que ces deux droites sont parallèles.</li>
                    </ol>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 260" className="h-auto w-full max-w-[280px]">
                    <polygon points="37.5,59 90,150 240,150" fill="none" stroke="#334155" strokeWidth="2" />
                    <circle cx="37.5" cy="59" r="2.8" fill="#0f172a" /><text x="18" y="52" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                    <circle cx="90" cy="150" r="2.8" fill="#0f172a" /><text x="70" y="168" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
                    <circle cx="240" cy="150" r="2.8" fill="#0f172a" /><text x="246" y="160" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
                  </svg>
                }
              />
            }
            correction={
              <Figure
                text={
                  <>
                    <p>La hauteur issue de A est, par définition, <strong>perpendiculaire à (BC)</strong> et passe par A.</p>
                    <p>La médiatrice de [BC] est, par définition, <strong>perpendiculaire à (BC)</strong> (en son milieu).</p>
                    <p>Ces deux droites sont donc toutes les deux perpendiculaires à la même droite (BC). Or deux droites perpendiculaires à une même troisième droite sont parallèles entre elles.</p>
                    <p className="font-semibold text-green-700">
                      Conclusion : la hauteur issue de A et la médiatrice de [BC] sont parallèles, quelle que soit la
                      mesure de l&apos;angle en B.
                    </p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 260" className="h-auto w-full max-w-[280px]">
                    <polygon points="37.5,59 90,150 240,150" fill="none" stroke="#334155" strokeWidth="2" />
                    <line x1="37.5" y1="44" x2="37.5" y2="160" stroke="#4f46e5" strokeWidth="1.8" />
                    <line x1="165" y1="55" x2="165" y2="245" stroke="#059669" strokeWidth="1.8" />
                    <rect x="37.5" y="145" width="7" height="7" fill="none" stroke="#334155" strokeWidth="1" />
                    <rect x="158" y="145" width="7" height="7" fill="none" stroke="#334155" strokeWidth="1" />
                    <circle cx="37.5" cy="59" r="2.8" fill="#0f172a" /><text x="18" y="52" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                    <circle cx="90" cy="150" r="2.8" fill="#0f172a" /><text x="70" y="168" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
                    <circle cx="240" cy="150" r="2.8" fill="#0f172a" /><text x="246" y="160" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
                    <text x="15" y="42" fontSize="10" fill="#4f46e5">hauteur</text>
                    <text x="145" y="45" fontSize="10" fill="#059669">médiatrice</text>
                  </svg>
                }
              />
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title={
              <>
                Parallélogramme et centre de gravité
                <span className="block text-xs font-semibold uppercase tracking-wide text-foreground-muted">Démonstration</span>
              </>
            }
            items={
              <Figure
                text={
                  <>
                    <p>ABCD est un parallélogramme de centre O. E est le milieu de [AB]. Les droites (CE) et (BO) sont sécantes en K.</p>
                    <ol className="list-decimal space-y-1 pl-5">
                      <li>Que représente la droite (BO) pour le triangle ABC ? Justifier.</li>
                      <li>Que représente le point K pour le triangle ABC ? Justifier.</li>
                      <li>Démontrer que la droite (AK) coupe le segment [BC] en son milieu.</li>
                    </ol>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 210" className="h-auto w-full max-w-[280px]">
                    <polygon points="60,60 240,60 270,180 90,180" fill="none" stroke="#334155" strokeWidth="2" />
                    <line x1="60" y1="60" x2="270" y2="180" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" />
                    <line x1="240" y1="60" x2="90" y2="180" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" />
                    <circle cx="165" cy="120" r="2.8" fill="#0f172a" /><text x="171" y="118" fontSize="12" fontWeight="700" fill="#0f172a">O</text>
                    <circle cx="150" cy="60" r="2.8" fill="#0f172a" /><text x="150" y="50" fontSize="12" fontWeight="700" fill="#0f172a">E</text>
                    <circle cx="60" cy="60" r="2.8" fill="#0f172a" /><text x="42" y="53" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                    <circle cx="240" cy="60" r="2.8" fill="#0f172a" /><text x="246" y="53" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
                    <circle cx="270" cy="180" r="2.8" fill="#0f172a" /><text x="276" y="194" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
                    <circle cx="90" cy="180" r="2.8" fill="#0f172a" /><text x="72" y="194" fontSize="13" fontWeight="700" fill="#0f172a">D</text>
                  </svg>
                }
              />
            }
            correction={
              <Figure
                text={
                  <>
                    <p>
                      <strong>1)</strong> O est le centre du parallélogramme ABCD, donc O est le milieu de la
                      diagonale [AC]. Dans le triangle ABC, O est donc le milieu du côté [AC] :{" "}
                      <strong className="text-green-700">(BO) est la médiane issue de B</strong>.
                    </p>
                    <p>
                      <strong>2)</strong> E est le milieu de [AB] (donné), donc{" "}
                      <strong>(CE) est la médiane issue de C</strong> du triangle ABC. (CE) et (BO), deux médianes du
                      triangle ABC, se coupent en K, donc <strong className="text-green-700">K est le centre de
                      gravité du triangle ABC</strong>.
                    </p>
                    <p>
                      <strong>3)</strong> K étant le centre de gravité, la troisième médiane, celle issue de A, passe
                      elle aussi par K (les trois médianes sont concourantes). Cette médiane coupe [BC] en son milieu ;
                      or elle passe par A et K, donc c&apos;est la droite (AK).
                    </p>
                    <p className="font-semibold text-green-700">Conclusion : (AK) coupe [BC] en son milieu.</p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 210" className="h-auto w-full max-w-[280px]">
                    <polygon points="60,60 240,60 270,180 90,180" fill="none" stroke="#cbd5e1" strokeWidth="1.6" strokeDasharray="4 3" />
                    <line x1="270" y1="180" x2="150" y2="60" stroke="#e11d48" strokeWidth="1.6" />
                    <line x1="240" y1="60" x2="165" y2="120" stroke="#4f46e5" strokeWidth="1.6" />
                    <line x1="60" y1="60" x2="255" y2="120" stroke="#059669" strokeWidth="1.6" />
                    <circle cx="190" cy="100" r="3.2" fill="#0f172a" /><text x="195" y="97" fontSize="12" fontWeight="700" fill="#0f172a">K</text>
                    <circle cx="165" cy="120" r="2.5" fill="#0f172a" /><text x="171" y="118" fontSize="11" fontWeight="700" fill="#0f172a">O</text>
                    <circle cx="150" cy="60" r="2.5" fill="#0f172a" /><text x="150" y="50" fontSize="11" fontWeight="700" fill="#0f172a">E</text>
                    <circle cx="60" cy="60" r="2.8" fill="#0f172a" /><text x="42" y="53" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                    <circle cx="240" cy="60" r="2.8" fill="#0f172a" /><text x="246" y="53" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
                    <circle cx="270" cy="180" r="2.8" fill="#0f172a" /><text x="276" y="194" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
                    <circle cx="90" cy="180" r="2.8" fill="#0f172a" /><text x="72" y="194" fontSize="13" fontWeight="700" fill="#0f172a">D</text>
                  </svg>
                }
              />
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title={
              <>
                Bissectrices et calcul d&apos;angles
                <span className="block text-xs font-semibold uppercase tracking-wide text-foreground-muted">Calcul &amp; justification</span>
              </>
            }
            items={
              <Figure
                text={
                  <>
                    <p>
                      Sur la figure suivante, <Math tex="ABC = 64^{\circ}" /> et <Math tex="ACB = 58^{\circ}" />. (BE)
                      est la bissectrice de l&apos;angle ABC et (CD) est la bissectrice de l&apos;angle ACB. Les deux
                      bissectrices se coupent en I.
                    </p>
                    <p className="font-semibold">En justifiant, calculer la mesure des angles ACD, ABE, BAC et BAI.</p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 220" className="h-auto w-full max-w-[280px]">
                    <polygon points="150,40 50,200 270,200" fill="none" stroke="#334155" strokeWidth="2" />
                    <line x1="50" y1="200" x2="216" y2="128" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="3 3" />
                    <line x1="270" y1="200" x2="100" y2="120" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="3 3" />
                    <circle cx="164.5" cy="150.3" r="2.8" fill="#0f172a" /><text x="170" y="148" fontSize="12" fontWeight="700" fill="#0f172a">I</text>
                    <circle cx="216" cy="128" r="2.5" fill="#0f172a" /><text x="222" y="126" fontSize="12" fontWeight="700" fill="#0f172a">E</text>
                    <circle cx="100" cy="120" r="2.5" fill="#0f172a" /><text x="78" y="118" fontSize="12" fontWeight="700" fill="#0f172a">D</text>
                    <circle cx="150" cy="40" r="2.8" fill="#0f172a" /><text x="140" y="32" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                    <circle cx="50" cy="200" r="2.8" fill="#0f172a" /><text x="30" y="214" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
                    <circle cx="270" cy="200" r="2.8" fill="#0f172a" /><text x="276" y="214" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
                  </svg>
                }
              />
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>Angle BAC :</strong> la somme des angles d&apos;un triangle vaut 180°, donc{" "}
                  <Math tex="BAC = 180^{\circ} - ABC - ACB = 180^{\circ} - 64^{\circ} - 58^{\circ} = \mathbf{58^{\circ}}" />.
                </p>
                <p>
                  <strong>Angle ABE :</strong> (BE) est la bissectrice de l&apos;angle ABC, elle le partage donc en
                  deux angles égaux : <Math tex="ABE = ABC \div 2 = 64^{\circ} \div 2 = \mathbf{32^{\circ}}" />.
                </p>
                <p>
                  <strong>Angle ACD :</strong> (CD) est la bissectrice de l&apos;angle ACB, elle le partage donc en
                  deux angles égaux : <Math tex="ACD = ACB \div 2 = 58^{\circ} \div 2 = \mathbf{29^{\circ}}" />.
                </p>
                <p>
                  <strong>Angle BAI :</strong> I est le point d&apos;intersection de deux bissectrices du triangle ABC
                  (issues de B et de C). Or les trois bissectrices d&apos;un triangle sont concourantes : la troisième
                  bissectrice, issue de A, passe donc elle aussi par I. Ainsi (AI) est la bissectrice de l&apos;angle
                  BAC, donc <Math tex="BAI = BAC \div 2 = 58^{\circ} \div 2 = \mathbf{29^{\circ}}" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
