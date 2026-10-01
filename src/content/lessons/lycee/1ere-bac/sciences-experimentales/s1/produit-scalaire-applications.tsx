import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  Math,
  MathBlock,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Le produit scalaire et ses applications · Cours et exercices | 1ère Bac Sciences",
  description:
    "Cours complet sur le produit scalaire et ses applications analytiques pour la 1ère année Baccalauréat (Sciences Expérimentales, Sciences et Technologies Électriques et Mécaniques) : expression analytique, norme, distance, orthogonalité, cosinus et sinus d'un couple de vecteurs, droite définie par un point et un vecteur normal, distance d'un point à une droite, équation cartésienne du cercle, tangente à un cercle, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences · Semestre 1",
  heroTitle: "Le produit scalaire et ses applications",
  heroSubtitle:
    "L'outil analytique qui transforme la géométrie plane en calcul : orthogonalité, angles, droites définies par un vecteur normal, et l'étude complète du cercle.",
  footerNote: "Le produit scalaire et ses applications · Mathématiques, 1ère année Baccalauréat, semestre 1.",
  sections: [
    { id: "cours-analytique", label: "Expression analytique" },
    { id: "cours-droite", label: "Droite et vecteur normal" },
    { id: "cours-cercle", label: "Étude du cercle" },
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
          { value: "3", label: "objets étudiés" },
          { value: "6", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-analytique"
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
          <svg role="img" aria-label="Figure 1 — Le produit scalaire et ses applications" viewBox="0 0 220 160" className="h-40 w-56 text-white">
            <circle cx="120" cy="90" r="55" fill="none" stroke="white" strokeWidth="2" opacity="0.6" />
            <line x1="175" y1="30" x2="175" y2="150" stroke="white" strokeWidth="2" />
            <circle cx="175" cy="90" r="4" fill="white" />
            <circle cx="120" cy="90" r="3" fill="white" />
            <line x1="120" y1="90" x2="175" y2="90" stroke="white" strokeWidth="1.4" strokeDasharray="3 3" />
          </svg>
        }
      />

      {/* ===================== I. EXPRESSION ANALYTIQUE ===================== */}
      <LessonSection
        id="cours-analytique"
        kicker="01 · Calculer avec des coordonnées"
        title="Expression analytique du produit scalaire"
        tone="light"
        description="Le plan est toujours muni d'un repère orthonormé (O, i, j) dans tout ce chapitre."
      >
        <CourseBlock numeral="I" title="Produit scalaire, norme, distance">
          <div className="grid gap-3 sm:grid-cols-2">
            <Box title="Produit scalaire" tone="def">
              Si <Math tex="\vec u(x,y)" /> et <Math tex="\vec v(x',y')" /> alors{" "}
              <Math tex="\vec u\cdot\vec v=xx'+yy'" />.
            </Box>
            <Box title="Norme" tone="def">
              <Math tex="\|\vec u\|=\sqrt{x^2+y^2}" />.
            </Box>
          </div>
          <Box title="Distance entre deux points" tone="def">
            <Math tex="AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}" />.
          </Box>
        </CourseBlock>

        <CourseBlock numeral="II" title="Orthogonalité, cosinus et sinus">
          <Box title="Orthogonalité" tone="prop">
            <Math tex="\vec u(x,y)" /> et <Math tex="\vec v(x',y')" /> sont orthogonaux ssi{" "}
            <Math tex="\vec u\cdot\vec v=0" />, c&apos;est-à-dire <Math tex="xx'+yy'=0" />.
          </Box>
          <Callout variant="success" title="Cosinus et sinus d'un couple de vecteurs">
            Pour <Math tex="\vec u,\vec v" /> non nuls :
            <MathBlock tex="\cos(\vec u,\vec v)=\dfrac{\vec u\cdot\vec v}{\|\vec u\|\|\vec v\|}=\dfrac{xx'+yy'}{\sqrt{x^2+y^2}\sqrt{x'^2+y'^2}}" />
            <MathBlock tex="\sin(\vec u,\vec v)=\dfrac{\det(\vec u,\vec v)}{\|\vec u\|\|\vec v\|}=\dfrac{xy'-x'y}{\sqrt{x^2+y^2}\sqrt{x'^2+y'^2}}" />
          </Callout>
          <Box title="Application" tone="prop">
            <p>
              Soient <Math tex="A(-3,-1)" />, <Math tex="B(1,1)" />, <Math tex="C(-5,3)" />. Montrer que{" "}
              <Math tex="ABC" /> est rectangle et isocèle en <Math tex="A" /> :
            </p>
            <MathBlock tex="\overrightarrow{AB}(4,2),\quad \overrightarrow{AC}(-2,4) \Rightarrow \overrightarrow{AB}\cdot\overrightarrow{AC}=4\times(-2)+2\times4=0" />
            <p>
              donc <Math tex="\overrightarrow{AB}\perp\overrightarrow{AC}" />, et{" "}
              <Math tex="AB=\sqrt{20}=AC" /> : le triangle est bien rectangle et isocèle en <Math tex="A" />.
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. DROITE ET VECTEUR NORMAL ===================== */}
      <LessonSection
        id="cours-droite"
        kicker="02 · Une nouvelle façon de définir une droite"
        title="Droite définie par un point et un vecteur normal"
        tone="muted"
        description="Jusqu'ici une droite était définie par un vecteur directeur ; le produit scalaire en offre une seconde définition, tout aussi puissante."
      >
        <CourseBlock numeral="III" title="Vecteur normal">
          <Figure
            text={
              <Box title="Définition" tone="def">
                <Math tex="\vec n" /> est un <strong className="text-foreground">vecteur normal</strong> à{" "}
                <Math tex="(D)" /> ssi <Math tex="\vec n\neq\vec0" /> et <Math tex="\vec n\perp\vec u" /> (
                <Math tex="\vec u" /> vecteur directeur de <Math tex="(D)" />), c&apos;est-à-dire{" "}
                <Math tex="\vec n\cdot\vec u=0" />.
              </Box>
            }
            svg={
              <FigureBox>
                <svg role="img" aria-label="Figure 2 — Le produit scalaire et ses applications : (D), n&amp;#8407;" viewBox="0 0 200 200" className="w-full max-w-[220px]">
                  <line x1="16" y1="106" x2="144" y2="74" stroke="#334155" strokeWidth="2" />
                  <line x1="40" y1="100" x2="58" y2="172" stroke="#f97316" strokeWidth="2.2" markerEnd="url(#arrN)" />
                  <defs>
                    <marker id="arrN" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                      <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
                    </marker>
                  </defs>
                  <circle cx="40" cy="100" r="3" fill="#334155" />
                  <text x="150" y="72" fontSize="13" fontWeight="700">(D)</text>
                  <text x="62" y="172" fontSize="13" fontWeight="700" fill="#f97316">n&#8407;</text>
                </svg>
              </FigureBox>
            }
          />
          <Callout variant="warning" title="Remarques utiles">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="\vec n" /> est normal à <Math tex="(D)" />, alors tout <Math tex="k\vec n" /> (
                <Math tex="k\neq0" />) l&apos;est aussi.
              </li>
              <li>
                Si <Math tex="(D):ax+by+c=0" />, alors <Math tex="\vec u(-b,a)" /> est un vecteur{" "}
                <strong>directeur</strong> et <Math tex="\vec n(a,b)" /> un vecteur{" "}
                <strong>normal</strong> de <Math tex="(D)" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Équation cartésienne, distance d'un point à une droite">
          <Box title="Équation cartésienne" tone="prop">
            La droite passant par <Math tex="A(x_A,y_A)" /> et de vecteur normal{" "}
            <Math tex="\vec n(\alpha,\beta)" /> a pour équation :
            <MathBlock tex="\alpha(x-x_A)+\beta(y-y_A)=0" />
          </Box>
          <Callout variant="success" title="Distance d'un point à une droite">
            Pour <Math tex="(D):ax+by+c=0" /> et <Math tex="A(x_A,y_A)" /> :
            <MathBlock tex="d(A,(D))=\dfrac{|ax_A+by_A+c|}{\sqrt{a^2+b^2}}" />
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. ÉTUDE DU CERCLE ===================== */}
      <LessonSection
        id="cours-cercle"
        kicker="03 · La courbe des points équidistants"
        title="Étude analytique du cercle"
        tone="light"
        description="Trois écritures pour un cercle, une position relative à connaître, et une formule de tangente à retenir."
      >
        <CourseBlock numeral="V" title="Équation cartésienne du cercle">
          <Box title="Forme canonique" tone="def">
            Le cercle de centre <Math tex="\Omega(a,b)" /> et de rayon <Math tex="r>0" /> a pour équation :{" "}
            <Math tex="(x-a)^2+(y-b)^2=r^2" />.
          </Box>
          <Callout variant="success" title="Cercle de diamètre [AB]">
            L&apos;ensemble des points <Math tex="M" /> tels que{" "}
            <Math tex="\overrightarrow{MA}\cdot\overrightarrow{MB}=0" /> est le cercle de diamètre{" "}
            <Math tex="[AB]" />, d&apos;équation :
            <MathBlock tex="(x-x_A)(x-x_B)+(y-y_A)(y-y_B)=0" />
          </Callout>
          <Box title="Forme développée" tone="prop">
            <p>
              L&apos;ensemble des points vérifiant <Math tex="x^2+y^2+ax+by+c=0" /> (avec{" "}
              <Math tex="a^2+b^2-4c>0" />) est le cercle de centre{" "}
              <Math tex="\Omega\left(-\dfrac a2,-\dfrac b2\right)" /> et de rayon{" "}
              <Math tex="r=\dfrac{\sqrt{a^2+b^2-4c}}{2}" />.
            </p>
            <p className="mt-2">
              Si <Math tex="a^2+b^2-4c=0" />, l&apos;ensemble est réduit à un{" "}
              <strong>point</strong> ; si <Math tex="a^2+b^2-4c<0" />, c&apos;est l&apos;{" "}
              <strong>ensemble vide</strong>.
            </p>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Position relative droite / cercle, tangente">
          <Figure
            text={
              <Box title="Position relative" tone="prop">
                Pour <Math tex="(D)" /> et un cercle de centre <Math tex="\Omega" /> et de rayon{" "}
                <Math tex="r" /> :
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>
                    <Math tex="d(\Omega,(D))<r" /> : <Math tex="(D)" /> coupe le cercle en{" "}
                    <strong>deux points</strong>.
                  </li>
                  <li>
                    <Math tex="d(\Omega,(D))=r" /> : <Math tex="(D)" /> est{" "}
                    <strong>tangente</strong> au cercle (un seul point).
                  </li>
                  <li>
                    <Math tex="d(\Omega,(D))>r" /> : <Math tex="(D)" /> ne coupe pas le cercle.
                  </li>
                </ul>
              </Box>
            }
            svg={
              <FigureBox>
                <svg role="img" aria-label="Figure 3 — Le produit scalaire et ses applications : point T ; &amp;#937;, r" viewBox="0 0 240 160" className="w-full max-w-[240px]">
                  <circle cx="120" cy="90" r="60" fill="none" stroke="#334155" strokeWidth="2" />
                  <line x1="180" y1="20" x2="180" y2="160" stroke="#e11d48" strokeWidth="2.2" />
                  <line x1="120" y1="90" x2="180" y2="90" stroke="#0ea5e9" strokeWidth="1.4" strokeDasharray="3 3" />
                  <circle cx="120" cy="90" r="3" fill="#1e293b" />
                  <circle cx="180" cy="90" r="3.5" fill="#e11d48" />
                  <text x="126" y="86" fontSize="12" fontWeight="700">&#937;</text>
                  <text x="150" y="82" fontSize="11" fill="#0ea5e9">r</text>
                  <text x="184" y="76" fontSize="12" fontWeight="700" fill="#e11d48">T</text>
                </svg>
              </FigureBox>
            }
          />
          <Callout variant="warning" title="Équation de la tangente en un point du cercle">
            Pour le cercle <Math tex="x^2+y^2+ax+by+c=0" /> et un point{" "}
            <Math tex="A(x_A,y_A)" /> du cercle, la tangente en <Math tex="A" /> a pour équation :
            <MathBlock tex="xx_A+yy_A+\dfrac12a(x+x_A)+\dfrac12b(y+y_A)+c=0" />
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="04 · À toi de jouer"
        title="Exercices · Le produit scalaire et ses applications"
        tone="muted"
        description="6 exercices corrigés : angles remarquables, droites et distances, et l'étude complète du cercle."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre produit scalaire et ses applications est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Un triangle rectangle et l'angle π/12"
            itemsLabel="1 étude complète"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <Math tex="A(1,1)" />, <Math tex="B(1,3)" />, <Math tex="C(-1,1)" />,{" "}
                  <Math tex="D(0,1+\sqrt3)" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Montrer que <Math tex="ABC" /> est rectangle en <Math tex="A" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Calculer <Math tex="\cos(\overrightarrow{CB},\overrightarrow{CD})" /> et{" "}
                  <Math tex="\sin(\overrightarrow{CB},\overrightarrow{CD})" />, en déduire{" "}
                  <Math tex="(\overrightarrow{CB},\overrightarrow{CD})" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>c.</strong> En déduire les valeurs exactes de <Math tex="\cos\dfrac{\pi}{12}" /> et{" "}
                  <Math tex="\sin\dfrac{\pi}{12}" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">a.</strong> <Math tex="\overrightarrow{AB}(0,2)" />,{" "}
                  <Math tex="\overrightarrow{AC}(-2,0)" /> : <Math tex="\overrightarrow{AB}\cdot\overrightarrow{AC}=0" />, donc rectangle en{" "}
                  <Math tex="A" />.
                </p>
                <p>
                  <strong className="text-green-700">b.</strong>{" "}
                  <Math tex="\overrightarrow{CA}(2,0)" />, <Math tex="\overrightarrow{CB}(2,2)" />,{" "}
                  <Math tex="\overrightarrow{CD}(1,\sqrt3)" /> — d&apos;abord{" "}
                  <Math tex="(\overrightarrow{CA},\overrightarrow{CB})" /> :{" "}
                  <Math tex="\cos=\dfrac{4}{2\times2\sqrt2}=\dfrac{\sqrt2}{2}" />, donc{" "}
                  <Math tex="(\overrightarrow{CA},\overrightarrow{CB})=\dfrac{\pi}{4}" />. Puis{" "}
                  <Math tex="(\overrightarrow{CA},\overrightarrow{CD})" /> :{" "}
                  <Math tex="\cos=\dfrac{2}{2\times2}=\dfrac12" />, donc{" "}
                  <Math tex="(\overrightarrow{CA},\overrightarrow{CD})=\dfrac{\pi}{3}" />.
                </p>
                <MathBlock tex="(\overrightarrow{CB},\overrightarrow{CD})=(\overrightarrow{CA},\overrightarrow{CD})-(\overrightarrow{CA},\overrightarrow{CB})=\dfrac{\pi}{3}-\dfrac{\pi}{4}=\dfrac{\pi}{12}" />
                <p>
                  <strong className="text-green-700">c.</strong> Or{" "}
                  <Math tex="\cos(\overrightarrow{CB},\overrightarrow{CD})=\dfrac{\overrightarrow{CB}\cdot\overrightarrow{CD}}{\|\overrightarrow{CB}\|\|\overrightarrow{CD}\|}=\dfrac{2+2\sqrt3}{2\sqrt2\times2}=\dfrac{\sqrt6+\sqrt2}{4}" />
                </p>
                <p>
                  et de même <Math tex="\sin(\overrightarrow{CB},\overrightarrow{CD})=\dfrac{2\sqrt3-2}{4\sqrt2}=\dfrac{\sqrt6-\sqrt2}{4}" />.
                </p>
                <p className="font-semibold text-green-700">
                  D&apos;où <Math tex="\cos\dfrac{\pi}{12}=\dfrac{\sqrt6+\sqrt2}{4}" /> et{" "}
                  <Math tex="\sin\dfrac{\pi}{12}=\dfrac{\sqrt6-\sqrt2}{4}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Perpendiculaire, médiatrice et distance"
            itemsLabel="1 étude complète"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <Math tex="A(1,1)" />, <Math tex="B(1,3)" />, <Math tex="C(-1,1)" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Déterminer l&apos;équation de la droite <Math tex="(\Delta)" /> passant par{" "}
                  <Math tex="B" /> et perpendiculaire à <Math tex="(AC)" />, puis celle de{" "}
                  <Math tex="(AC)" />, puis les coordonnées de <Math tex="H=(\Delta)\cap(AC)" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Déterminer l&apos;équation de <Math tex="(L)" />, médiatrice de{" "}
                  <Math tex="[AB]" />, puis calculer <Math tex="d(B,(L))" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">a.</strong>{" "}
                  <Math tex="\overrightarrow{AC}(-2,0)" /> est normal à <Math tex="(\Delta)" />, qui passe par{" "}
                  <Math tex="B(1,3)" /> :
                </p>
                <MathBlock tex="(\Delta):-2(x-1)+0(y-3)=0 \iff x=1" />
                <p>
                  <Math tex="(AC)" /> passe par <Math tex="A(1,1)" /> et <Math tex="C(-1,1)" /> — droite
                  horizontale : <Math tex="(AC):y=1" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="H" /> vérifie <Math tex="x=1" /> et <Math tex="y=1" /> : <Math tex="H(1,1)=A" />.
                </p>
                <p>
                  <strong className="text-green-700">b.</strong> Milieu de <Math tex="[AB]" /> :{" "}
                  <Math tex="(1,2)" />, <Math tex="\overrightarrow{AB}(0,2)" /> normal à <Math tex="(L)" /> :
                </p>
                <MathBlock tex="(L):0(x-1)+2(y-2)=0 \iff y=2" />
                <p className="font-semibold text-green-700">
                  <Math tex="d(B,(L))=\dfrac{|0\times1+1\times3-2|}{\sqrt{0^2+1^2}}=1" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Trois équations, trois natures différentes"
            itemsLabel="3 équations"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  Pour chacune des équations suivantes, écrire sous la forme{" "}
                  <Math tex="(x-a)^2+(y-b)^2=c" /> et en déduire la nature de l&apos;ensemble de points
                  associé :
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> <Math tex="x^2+y^2+6x-4y+9=0" />
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> <Math tex="x^2+y^2-2x+6y+10=0" />
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>c.</strong> <Math tex="x^2+y^2+4x-4y+9=0" />
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">a.</strong>{" "}
                  <Math tex="(x+3)^2+(y-2)^2=4" /> : cercle de centre <Math tex="(-3,2)" />, rayon{" "}
                  <Math tex="2" />.
                </p>
                <p>
                  <strong className="text-green-700">b.</strong>{" "}
                  <Math tex="(x-1)^2+(y+3)^2=0" /> : la somme de deux carrés est nulle, donc l&apos;ensemble est
                  réduit au <strong>point unique</strong> <Math tex="(1,-3)" />.
                </p>
                <p>
                  <strong className="text-green-700">c.</strong>{" "}
                  <Math tex="(x+2)^2+(y-2)^2=-1" /> : une somme de carrés ne peut jamais être négative, donc
                  l&apos;ensemble est <strong>vide</strong>.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Construire un cercle à partir des données"
            itemsLabel="2 constructions"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Donner l&apos;équation du cercle de centre <Math tex="I(1,2)" /> et de
                  rayon <Math tex="3" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Donner l&apos;équation du cercle de diamètre <Math tex="[AB]" /> avec{" "}
                  <Math tex="A(-2,0)" /> et <Math tex="B(4,0)" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">a.</strong>{" "}
                  <Math tex="(x-1)^2+(y-2)^2=9" />, soit <Math tex="x^2+y^2-2x-4y-4=0" />.
                </p>
                <p>
                  <strong className="text-green-700">b.</strong>{" "}
                  <Math tex="(x+2)(x-4)+(y-0)(y-0)=0" />, soit <Math tex="x^2+y^2-2x-8=0" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Un cercle et ses deux tangentes"
            itemsLabel="1 étude complète"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <Math tex="(E):\ x^2+y^2-4x+6y+3=0" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Montrer que <Math tex="(E)" /> est un cercle <Math tex="\mathcal C" /> dont
                  on précisera le centre et le rayon.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Vérifier que <Math tex="A(3,0)" /> et <Math tex="B(-1,-2)" /> appartiennent
                  à <Math tex="\mathcal C" />, et donner l&apos;équation des tangentes <Math tex="(d)" /> en{" "}
                  <Math tex="A" /> et <Math tex="(d')" /> en <Math tex="B" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>c.</strong> Déterminer les coordonnées de <Math tex="M=(d)\cap(d')" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">a.</strong>{" "}
                  <Math tex="(x-2)^2+(y+3)^2=10" /> : cercle de centre <Math tex="\Omega(2,-3)" />, rayon{" "}
                  <Math tex="\sqrt{10}" />.
                </p>
                <p>
                  <strong className="text-green-700">b.</strong>{" "}
                  <Math tex="(3-2)^2+(0+3)^2=1+9=10" /> ✓, <Math tex="(-1-2)^2+(-2+3)^2=9+1=10" /> ✓.
                </p>
                <MathBlock tex="(d):\ 3x+0y+\tfrac12(-4)(x+3)+\tfrac12(6)(y+0)+3=0 \iff x+3y-3=0" />
                <MathBlock tex="(d'):\ -x-2y+\tfrac12(-4)(x-1)+\tfrac12(6)(y-2)+3=0 \iff -3x+y-1=0" />
                <p>
                  <strong className="text-green-700">c.</strong> En résolvant{" "}
                  <Math tex="x+3y-3=0" /> et <Math tex="-3x+y-1=0" /> :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="M(0,1)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Intersection d'une droite et d'un cercle"
            itemsLabel="1 étude complète"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <Math tex="(d)" /> a pour vecteur directeur <Math tex="(1,2)" /> et passe par{" "}
                  <Math tex="A(0,-1)" />. <Math tex="\mathcal C" /> est le cercle de centre <Math tex="I(1,1)" />
                  {" "}et de rayon <Math tex="3" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Donner l&apos;équation cartésienne de <Math tex="(d)" /> et de{" "}
                  <Math tex="\mathcal C" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Déterminer les coordonnées des points d&apos;intersection de{" "}
                  <Math tex="(d)" /> et <Math tex="\mathcal C" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">a.</strong> Vecteur normal à <Math tex="(d)" /> :{" "}
                  <Math tex="(2,-1)" /> (perpendiculaire à <Math tex="(1,2)" />) :
                </p>
                <MathBlock tex="(d):\ 2(x-0)-1(y+1)=0 \iff 2x-y-1=0" />
                <MathBlock tex="\mathcal C:\ (x-1)^2+(y-1)^2=9 \iff x^2+y^2-2x-2y-7=0" />
                <p>
                  <strong className="text-green-700">b.</strong> De <Math tex="(d)" /> : <Math tex="y=2x-1" />.
                  En substituant dans <Math tex="\mathcal C" /> :
                </p>
                <MathBlock tex="x^2+(2x-1)^2-2x-2(2x-1)-7=0 \iff 5x^2-10x-4=0" />
                <p>
                  <Math tex="\Delta=100+80=180" />, <Math tex="\sqrt\Delta=6\sqrt5" />, d&apos;où{" "}
                  <Math tex="x=1\pm\dfrac{3\sqrt5}{5}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Les points d&apos;intersection sont{" "}
                  <Math tex="\left(1-\dfrac{3\sqrt5}{5},\,1-\dfrac{6\sqrt5}{5}\right)" /> et{" "}
                  <Math tex="\left(1+\dfrac{3\sqrt5}{5},\,1+\dfrac{6\sqrt5}{5}\right)" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
