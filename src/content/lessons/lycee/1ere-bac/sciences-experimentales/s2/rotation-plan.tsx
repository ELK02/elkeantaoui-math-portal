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
  title: "Rotation dans le plan · Cours et exercices | 1ère Bac Sciences",
  description:
    "Cours complet sur la rotation dans le plan pour la 1ère année Baccalauréat (Sciences Expérimentales, Sciences et Technologies Électriques et Mécaniques) : définition, rotation réciproque, caractérisation par l'image de deux points, propriétés de conservation (longueurs, angles, alignement), image d'une droite et d'un cercle, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences · Semestre 2",
  heroTitle: "Rotation dans le plan",
  heroSubtitle:
    "Une transformation qui conserve tout — longueurs, angles et alignements — et le premier outil du programme pour prouver des perpendicularités et des égalités de longueur sans aucun calcul de coordonnées.",
  footerNote: "Rotation dans le plan · Mathématiques, 1ère année Baccalauréat, semestre 2.",
  sections: [
    { id: "cours-definition", label: "Définition" },
    { id: "cours-proprietes", label: "Propriétés" },
    { id: "exercices", label: "Exercices" },
  ],
};

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function CourseBlock({ numeral, title, children }: { numeral: ReactNode; title: string; children: ReactNode }) {
  return (
    <article className="mb-8 overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-950 text-sm font-bold text-white dark:bg-white dark:text-neutral-950">
          {numeral}
        </span>
        <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">{title}</h3>
      </div>
      <div className="space-y-4">{children}</div>
    </article>
  );
}

const BOX_STYLES = {
  def: { wrap: "border-l-4 border-orange-400 bg-orange-100/50", title: "text-orange-700" },
  prop: { wrap: "border-l-4 border-brand-500 bg-brand-50/60 dark:bg-white/5", title: "text-brand-700" },
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

function Figure({ text, svg, reverse = false }: { text: ReactNode; svg: ReactNode; reverse?: boolean }) {
  return (
    <div className="grid items-center gap-6 sm:grid-cols-5">
      <div className={`space-y-2 text-sm text-foreground ${reverse ? "sm:order-2 sm:col-span-3" : "sm:col-span-3"}`}>
        {text}
      </div>
      <div className={`flex justify-center ${reverse ? "sm:order-1" : ""} sm:col-span-2`}>{svg}</div>
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
          { value: "4", label: "propriétés de conservation" },
          { value: "6", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-definition"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Commencer le cours
            </a>
            <a
              href="#exercices"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Aller aux exercices
            </a>
          </>
        }
        visual={
          <svg role="img" aria-label="Figure 1 — Rotation dans le plan : point O" viewBox="0 0 200 160" className="h-40 w-56 text-white">
            <path d="M40,130 A70,70 0 0 1 150,60" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 3" />
            <line x1="60" y1="130" x2="40" y2="130" stroke="white" strokeWidth="2" markerEnd="url(#arrRot)" />
            <line x1="60" y1="130" x2="150" y2="60" stroke="white" strokeWidth="2" markerEnd="url(#arrRot)" />
            <defs>
              <marker id="arrRot" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="white" />
              </marker>
            </defs>
            <circle cx="60" cy="130" r="3" fill="#fb923c" />
            <text x="64" y="126" fontSize="13" fontStyle="italic" fill="#fb923c">O</text>
          </svg>
        }
      />

      {/* ===================== I. DÉFINITION ===================== */}
      <LessonSection
        id="cours-definition"
        kicker="01 · La transformation qui tourne autour d'un point"
        title="Définition, rotation réciproque, caractérisation"
        tone="light"
        description="Une rotation est entièrement déterminée par un centre et un angle — et, comme on le verra, aussi par l'image de deux points."
      >
        <CourseBlock numeral="I" title="Définition">
          <Figure
            text={
              <Box title="Définition" tone="def">
                La <strong className="text-foreground">rotation</strong> de centre <Math tex="O" /> et
                d&apos;angle <Math tex="\alpha" /> transforme <Math tex="M" /> en <Math tex="M'" /> tel que :
                <div className="mt-1">
                  <Math tex="OM'=OM" /> et <Math tex="(\overrightarrow{OM},\overrightarrow{OM'})=\alpha\ [2\pi]" />
                </div>
                On la note <Math tex="r_{(O,\alpha)}" />.
              </Box>
            }
            svg={
              <FigureBox>
                <svg role="img" aria-label="Figure 2 — Rotation dans le plan : points O, M, M'" viewBox="0 0 200 140" className="w-full max-w-[220px]">
                  <path d="M150,120 A80,80 0 0 1 70,42" fill="none" stroke="#0ea5e9" strokeWidth="1.4" strokeDasharray="3 3" />
                  <line x1="30" y1="120" x2="150" y2="120" stroke="#334155" strokeWidth="2" markerEnd="url(#arrR1a)" />
                  <line x1="30" y1="120" x2="70" y2="42" stroke="#e11d48" strokeWidth="2" markerEnd="url(#arrR1b)" />
                  <defs>
                    <marker id="arrR1a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                      <path d="M0,0 L6,3 L0,6 Z" fill="#334155" />
                    </marker>
                    <marker id="arrR1b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                      <path d="M0,0 L6,3 L0,6 Z" fill="#e11d48" />
                    </marker>
                  </defs>
                  <circle cx="30" cy="120" r="3" fill="#1e293b" />
                  <text x="20" y="134" fontSize="13" fontWeight="700">O</text>
                  <text x="154" y="118" fontSize="13" fontWeight="700" fill="#334155">M</text>
                  <text x="72" y="38" fontSize="13" fontWeight="700" fill="#e11d48">M&apos;</text>
                </svg>
              </FigureBox>
            }
          />
          <Callout variant="warning" title="Remarques essentielles">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Le centre <Math tex="O" /> est <strong>invariant</strong> : <Math tex="r(O)=O" />.
              </li>
              <li>
                Une rotation d&apos;angle <Math tex="\alpha=\dfrac\pi2" /> est un{" "}
                <strong>quart de tour direct</strong> ; d&apos;angle <Math tex="-\dfrac\pi2" />, un{" "}
                <strong>quart de tour indirect</strong>.
              </li>
              <li>
                La rotation de centre <Math tex="O" /> et d&apos;angle <Math tex="\pi" /> est exactement la{" "}
                <strong>symétrie centrale</strong> par rapport à <Math tex="O" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Rotation réciproque, caractérisation par deux points">
          <Box title="Rotation réciproque" tone="def">
            La rotation de centre <Math tex="O" /> et d&apos;angle <Math tex="-\alpha" /> est appelée{" "}
            <strong className="text-foreground">rotation réciproque</strong> de <Math tex="r_{(O,\alpha)}" />,
            notée <Math tex="r^{-1}" /> : si <Math tex="r(M)=M'" /> alors <Math tex="r^{-1}(M')=M" />.
          </Box>
          <Callout variant="success" title="Une rotation est déterminée par l'image de deux points">
            Soient <Math tex="A,B" /> distincts et <Math tex="A',B'" /> tels que{" "}
            <Math tex="AB=A'B'" /> et <Math tex="\overrightarrow{AB}\neq\overrightarrow{A'B'}" />. Il existe
            une <strong>unique</strong> rotation qui transforme <Math tex="A" /> en <Math tex="A'" /> et{" "}
            <Math tex="B" /> en <Math tex="B'" />, d&apos;angle{" "}
            <Math tex="\theta=(\overrightarrow{AB},\overrightarrow{A'B'})" />.
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. PROPRIÉTÉS ===================== */}
      <LessonSection
        id="cours-proprietes"
        kicker="02 · Ce qu'une rotation conserve"
        title="Propriétés de la rotation"
        tone="muted"
        description="Ces quatre propriétés sont l'outil principal pour prouver des égalités de longueur, des perpendicularités et des alignements sans aucune coordonnée."
      >
        <CourseBlock numeral="III" title="Conservation des longueurs, des angles, du parallélisme">
          <Callout variant="success" title="Propriété 1 — la rotation conserve">
            <ul className="list-disc space-y-1 pl-5">
              <li>les longueurs ;</li>
              <li>les angles (l&apos;image d&apos;un angle a la même amplitude) ;</li>
              <li>le parallélisme (deux droites parallèles ont des images parallèles) ;</li>
              <li>les aires.</li>
            </ul>
          </Callout>
          <Box title="Propriété 2 — la propriété la plus utile de tout le chapitre" tone="prop">
            <p>
              Si <Math tex="M'" /> et <Math tex="N'" /> sont les images de <Math tex="M" /> et <Math tex="N" />{" "}
              par la rotation de centre <Math tex="C" /> et d&apos;angle <Math tex="\theta" />, alors :
            </p>
            <div className="mt-1">
              <Math tex="M'N'=MN" /> et <Math tex="(\overrightarrow{MN},\overrightarrow{M'N'})=\theta\ [2\pi]" />
            </div>
            <p className="mt-2 text-xs">
              Autrement dit : si l&apos;on trouve <strong>une seule</strong> rotation qui envoie deux points
              donnés sur deux autres, le segment qui les relie et son image sont automatiquement de{" "}
              <strong>même longueur</strong> et font un angle <strong>égal à l&apos;angle de la rotation</strong>.
            </p>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Alignement, angles de vecteurs, images de droites et de cercles">
          <Callout variant="warning" title="Propriétés 3 et 4">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <strong>Propriété 3 :</strong> une rotation transforme trois points alignés (dans un ordre) en
                trois points alignés dans le même ordre.
              </li>
              <li>
                <strong>Propriété 4 :</strong> si <Math tex="A',B',C'" /> sont les images de{" "}
                <Math tex="A,B,C" />, alors <Math tex="(\overrightarrow{AB},\overrightarrow{AC})=(\overrightarrow{A'B'},\overrightarrow{A'C'})" />.
              </li>
            </ul>
          </Callout>
          <Box title="Images de figures usuelles" tone="prop">
            <p>Pour une rotation <Math tex="r" /> et deux points <Math tex="A\neq B" /> :</p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                l&apos;image de la droite <Math tex="(AB)" /> est la droite <Math tex="(A'B')" /> ;
              </li>
              <li>
                l&apos;image du segment <Math tex="[AB]" /> est le segment <Math tex="[A'B']" /> ;
              </li>
              <li>
                l&apos;image du cercle <Math tex="\mathcal C(O,R)" /> est le cercle{" "}
                <Math tex="\mathcal C(O',R)" /> (<strong>même rayon</strong>), où <Math tex="O'=r(O)" />.
              </li>
            </ul>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="03 · À toi de jouer"
        title="Exercices · Rotation dans le plan"
        tone="light"
        description="6 exercices corrigés : tous se résolvent en trouvant la bonne rotation, puis en appliquant directement les propriétés du cours."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre rotation dans le plan est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Images directes sur un carré"
            itemsLabel="1 étude"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <Math tex="ABCD" /> est un carré de centre <Math tex="O" />, tel que{" "}
                  <Math tex="(\overrightarrow{AB},\overrightarrow{AD})" /> est positif. Soit <Math tex="r_A" />{" "}
                  la rotation de centre <Math tex="A" /> et d&apos;angle <Math tex="\dfrac\pi2" />, et{" "}
                  <Math tex="r_O" /> une rotation de centre <Math tex="O" /> et d&apos;angle <Math tex="\alpha" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Déterminer <Math tex="r_A(A)" />, <Math tex="r_A(B)" /> et{" "}
                  <Math tex="r_A(D)" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Comment choisir <Math tex="\alpha" /> pour avoir <Math tex="r_O(A)=B" /> ?
                  Pour avoir <Math tex="r_O(A)=C" /> ?
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">a.</strong> <Math tex="r_A(A)=A" /> (le centre est
                  invariant). Comme <Math tex="AB=AD" /> et <Math tex="(\overrightarrow{AB},\overrightarrow{AD})=\dfrac\pi2" />
                  {" "}: <Math tex="r_A(B)=D" />. Et <Math tex="r_A(D)" /> est le point tel que{" "}
                  <Math tex="A" /> est le milieu de <Math tex="[B,r_A(D)]" /> (le symétrique de{" "}
                  <Math tex="B" /> par rapport à <Math tex="A" />).
                </p>
                <p>
                  <strong className="text-green-700">b.</strong> On a{" "}
                  <Math tex="(\overrightarrow{OA},\overrightarrow{OB})=\dfrac\pi2" /> : donc{" "}
                  <Math tex="\alpha=\dfrac\pi2" /> pour <Math tex="r_O(A)=B" />.
                </p>
                <p>
                  Et <Math tex="C" /> est le symétrique de <Math tex="A" /> par rapport à <Math tex="O" /> (
                  <Math tex="O" /> est le centre du carré) : donc <Math tex="\alpha=\pi" /> pour{" "}
                  <Math tex="r_O(A)=C" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Deux triangles isocèles rectangles"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                <Math tex="ABC" /> est un triangle. On construit à l&apos;extérieur deux triangles{" "}
                <Math tex="ABD" /> et <Math tex="ACE" />, isocèles et rectangles en <Math tex="A" />. Montrer que{" "}
                <Math tex="BE=CD" /> et <Math tex="(BE)\perp(CD)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Soit <Math tex="r" /> la rotation de centre <Math tex="A" /> et d&apos;angle{" "}
                  <Math tex="\dfrac\pi2" /> qui envoie <Math tex="B" /> sur <Math tex="D" /> (possible car{" "}
                  <Math tex="AD=AB" /> et <Math tex="(\overrightarrow{AB},\overrightarrow{AD})=\dfrac\pi2" />
                  ).
                </p>
                <p>
                  Comme <Math tex="ACE" /> est construit de l&apos;autre côté avec le même angle droit en{" "}
                  <Math tex="A" />, la <strong>même</strong> rotation <Math tex="r" /> envoie <Math tex="E" />{" "}
                  sur <Math tex="C" /> (car <Math tex="AC=AE" /> et{" "}
                  <Math tex="(\overrightarrow{AE},\overrightarrow{AC})=\dfrac\pi2" />).
                </p>
                <p>
                  Donc <Math tex="r" /> envoie le segment <Math tex="[BE]" /> sur le segment{" "}
                  <Math tex="[DC]" /> (<Math tex="r(B)=D" /> et <Math tex="r(E)=C" />). D&apos;après la
                  Propriété 2 :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="DC=BE" /> et <Math tex="(\overrightarrow{BE},\overrightarrow{DC})=\dfrac\pi2" />,
                  donc <Math tex="(BE)\perp(CD)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Deux points en position symétrique sur un carré"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                <Math tex="ABCD" /> est un carré de centre <Math tex="O" />, tel que{" "}
                <Math tex="(\overrightarrow{AB},\overrightarrow{AD})" /> est positif. <Math tex="I" /> et{" "}
                <Math tex="J" /> sont tels que <Math tex="\overrightarrow{AI}=\dfrac14\overrightarrow{AB}" /> et{" "}
                <Math tex="\overrightarrow{BJ}=\dfrac14\overrightarrow{BC}" />. Montrer que{" "}
                <Math tex="OI=OJ" /> et <Math tex="(OI)\perp(OJ)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Soit <Math tex="r" /> la rotation de centre <Math tex="O" /> et d&apos;angle{" "}
                  <Math tex="\dfrac\pi2" /> associée au carré : elle vérifie <Math tex="r(A)=B" /> et{" "}
                  <Math tex="r(B)=C" /> (rotation qui envoie chaque sommet sur le suivant).
                </p>
                <p>
                  Comme <Math tex="I" /> occupe sur <Math tex="[AB]" /> exactement la même position
                  relative (au quart, à partir de <Math tex="A" />) que <Math tex="J" /> sur <Math tex="[BC]" />{" "}
                  (au quart, à partir de <Math tex="B" />), et que <Math tex="r" /> envoie{" "}
                  <Math tex="[AB]" /> sur <Math tex="[BC]" /> : <Math tex="r(I)=J" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc, d&apos;après la définition de la rotation : <Math tex="OJ=OI" /> et{" "}
                  <Math tex="(\overrightarrow{OI},\overrightarrow{OJ})=\dfrac\pi2" />, donc{" "}
                  <Math tex="(OI)\perp(OJ)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Perpendicularité immédiate par la propriété 2"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="r" /> une rotation de centre <Math tex="O" /> et d&apos;angle{" "}
                <Math tex="\dfrac\pi2" />, et <Math tex="M,N" /> deux points distincts du plan. On note{" "}
                <Math tex="E=r(M)" /> et <Math tex="F=r(N)" />. Montrer que <Math tex="(EF)\perp(MN)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  D&apos;après la Propriété 2 appliquée à <Math tex="M" /> et <Math tex="N" /> (d&apos;images{" "}
                  <Math tex="E" /> et <Math tex="F" />) :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="(\overrightarrow{MN},\overrightarrow{EF})=\dfrac\pi2" />, donc{" "}
                  <Math tex="(EF)\perp(MN)" /> — quels que soient les points <Math tex="M" /> et{" "}
                  <Math tex="N" /> choisis.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Un triangle isocèle rectangle et son milieu"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                <Math tex="ABC" /> est isocèle et rectangle en <Math tex="A" />, avec{" "}
                <Math tex="(\overrightarrow{AB},\overrightarrow{AC})" /> positif, et <Math tex="O" /> le
                milieu de <Math tex="[BC]" />. <Math tex="D,E" /> sont tels que{" "}
                <Math tex="\overrightarrow{AD}=\dfrac23\overrightarrow{AB}" /> et{" "}
                <Math tex="\overrightarrow{CE}=\dfrac23\overrightarrow{CA}" />. Montrer que <Math tex="ODE" />{" "}
                est isocèle et rectangle en <Math tex="O" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Comme <Math tex="ABC" /> est isocèle rectangle en <Math tex="A" /> et <Math tex="O" /> le
                  milieu de l&apos;hypoténuse, <Math tex="O" /> est le centre du cercle circonscrit :{" "}
                  <Math tex="OA=OB=OC" />. La rotation <Math tex="r" /> de centre <Math tex="O" /> et
                  d&apos;angle <Math tex="-\dfrac\pi2" /> vérifie <Math tex="r(A)=C" /> et{" "}
                  <Math tex="r(B)=A" /> (propriété classique du centre du cercle circonscrit à un triangle
                  isocèle rectangle).
                </p>
                <p>
                  Puisque <Math tex="D" /> occupe sur <Math tex="[AB]" /> (aux 2/3 à partir de{" "}
                  <Math tex="A" />) la même position relative que <Math tex="E" /> sur <Math tex="[CA]" />{" "}
                  (aux 2/3 à partir de <Math tex="C" />), et que <Math tex="r" /> envoie <Math tex="[AB]" />{" "}
                  sur <Math tex="[CA]" /> (car <Math tex="r(A)=C" />, <Math tex="r(B)=A" />) : <Math tex="r(D)=E" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="OE=OD" /> et <Math tex="(\overrightarrow{OD},\overrightarrow{OE})=-\dfrac\pi2" />
                  : le triangle <Math tex="ODE" /> est isocèle et rectangle en <Math tex="O" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Quatre points en rotation cyclique sur un carré"
            itemsLabel="1 étude complète"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <Math tex="ABCD" /> est un carré de centre <Math tex="O" />. <Math tex="M,N,P,Q" /> sont
                  les points tels que <Math tex="\overrightarrow{AM}=\dfrac13\overrightarrow{AB}" />,{" "}
                  <Math tex="\overrightarrow{BN}=\dfrac13\overrightarrow{BC}" />,{" "}
                  <Math tex="\overrightarrow{CP}=\dfrac13\overrightarrow{CD}" />,{" "}
                  <Math tex="\overrightarrow{DQ}=\dfrac13\overrightarrow{DA}" />. La droite{" "}
                  <Math tex="(AN)" /> coupe <Math tex="(DM)" /> en <Math tex="E" /> et <Math tex="(BP)" /> en{" "}
                  <Math tex="F" /> ; la droite <Math tex="(CQ)" /> coupe <Math tex="(DM)" /> en{" "}
                  <Math tex="H" /> et <Math tex="(BP)" /> en <Math tex="G" />. Soit <Math tex="r" /> la
                  rotation de centre <Math tex="O" /> associée au carré (celle qui envoie chaque sommet sur le
                  suivant).
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Montrer que <Math tex="r(M)=N" />, <Math tex="r(N)=P" />,{" "}
                  <Math tex="r(P)=Q" /> et <Math tex="r(Q)=M" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Montrer que <Math tex="r(F)=G" />, puis que <Math tex="FOG" /> est
                  isocèle et rectangle en <Math tex="O" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">a.</strong> <Math tex="r" /> envoie <Math tex="A\to B" />,{" "}
                  <Math tex="B\to C" />, <Math tex="C\to D" />, <Math tex="D\to A" />. Comme{" "}
                  <Math tex="M" />, <Math tex="N" />, <Math tex="P" />, <Math tex="Q" /> occupent tous la{" "}
                  <strong>même position relative</strong> (au tiers) sur des côtés qui se correspondent par{" "}
                  <Math tex="r" /> (<Math tex="[AB]\to[BC]\to[CD]\to[DA]" />) :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="r(M)=N" />, <Math tex="r(N)=P" />, <Math tex="r(P)=Q" />, <Math tex="r(Q)=M" />.
                </p>
                <p>
                  <strong className="text-green-700">b.</strong> Comme <Math tex="r(A)=B" /> et{" "}
                  <Math tex="r(N)=P" />, <Math tex="r" /> envoie la droite <Math tex="(AN)" /> sur{" "}
                  <Math tex="(BP)" />. Comme <Math tex="r(B)=C" /> et <Math tex="r(P)=Q" />, <Math tex="r" />{" "}
                  envoie <Math tex="(BP)" /> sur <Math tex="(CQ)" />.
                </p>
                <p>
                  Or <Math tex="F=(AN)\cap(BP)" />. Son image par <Math tex="r" /> appartient donc à{" "}
                  <Math tex="r((AN))\cap r((BP))=(BP)\cap(CQ)=\{G\}" /> :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="r(F)=G" />. Donc <Math tex="OG=OF" /> et{" "}
                  <Math tex="(\overrightarrow{OF},\overrightarrow{OG})" /> égale l&apos;angle de{" "}
                  <Math tex="r" /> (<Math tex="\dfrac\pi2" /> ou <Math tex="-\dfrac\pi2" /> selon
                  l&apos;orientation du carré) : <Math tex="FOG" /> est isocèle et rectangle en{" "}
                  <Math tex="O" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
