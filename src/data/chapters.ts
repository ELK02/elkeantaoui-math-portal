import type { Level } from "./types";

function lesson(niveau: string, semestre: string, slug: string) {
  return `/college/${niveau}/${semestre}/${slug}`;
}

export const LEVELS: Level[] = [
  {
    id: "1ac",
    short: "1AC",
    full: "1ère Année Collège",
    description:
      "Nombres décimaux, géométrie de base, nombres relatifs, angles et puissances.",
    available: true,
    semesters: [
      {
        id: "s1",
        label: "Semestre 1",
        chapters: [
          { slug: "evaluations-diagnostiques", title: "Évaluation diagnostique", order: 1, href: lesson("1ac", "s1", "evaluations-diagnostiques") },
          { slug: "operations-nombres-decimaux", title: "Les opérations sur les nombres décimaux", order: 2, href: lesson("1ac", "s1", "operations-nombres-decimaux") },
          { slug: "nombres-ecriture-fractionnaire", title: "Nombres en écriture fractionnaire", order: 3, href: lesson("1ac", "s1", "nombres-ecriture-fractionnaire") },
          { slug: "operations-nombres-fractionnaires", title: "Les opérations sur les nombres en écriture fractionnaire", order: 4, href: lesson("1ac", "s1", "operations-nombres-fractionnaires") },
          { slug: "nombres-relatifs-presentation-comparaison", title: "Les nombres relatifs — Présentation et comparaison", order: 5, href: lesson("1ac", "s1", "nombres-relatifs-presentation-comparaison") },
          { slug: "nombres-relatifs-addition-soustraction", title: "Les nombres relatifs — Addition et soustraction", order: 6, href: lesson("1ac", "s1", "nombres-relatifs-addition-soustraction") },
          { slug: "nombres-relatifs-multiplication-division", title: "Les nombres relatifs — Multiplication et division", order: 7, href: lesson("1ac", "s1", "nombres-relatifs-multiplication-division") },
          { slug: "puissance", title: "Puissance", order: 8, href: lesson("1ac", "s1", "puissance") },
          { slug: "notions-geometrie-plan", title: "Les notions de base de la géométrie dans le plan", order: 9, href: lesson("1ac", "s1", "notions-geometrie-plan") },
          { slug: "les-angles", title: "Les angles", order: 10, href: lesson("1ac", "s1", "les-angles") },
          { slug: "inegalite-triangulaire-mediatrice", title: "Inégalité triangulaire et médiatrice d'un segment", order: 11, href: lesson("1ac", "s1", "inegalite-triangulaire-mediatrice") },
          { slug: "mediatrice-bissectrice-hauteur-triangle", title: "Médiatrice, bissectrice et hauteur d'un triangle", order: 12, href: lesson("1ac", "s1", "mediatrice-bissectrice-hauteur-triangle") },
        ],
      },
      {
        id: "s2",
        label: "Semestre 2",
        chapters: [
          { slug: "developpement-factorisation", title: "Développement et factorisation", order: 1, href: lesson("1ac", "s2", "developpement-factorisation") },
          { slug: "equations", title: "Les équations", order: 2, href: lesson("1ac", "s2", "equations") },
          { slug: "symetrie-centrale", title: "Symétrie centrale", order: 3, href: lesson("1ac", "s2", "symetrie-centrale") },
          { slug: "parallelogramme", title: "Le parallélogramme", order: 4, href: lesson("1ac", "s2", "parallelogramme") },
          { slug: "quadrilateres-particuliers", title: "Les quadrilatères particuliers", order: 5, href: lesson("1ac", "s2", "quadrilateres-particuliers") },
          { slug: "angles-alternes-correspondants", title: "Deux parallèles et une sécante — Angles alternes-internes et correspondants", order: 6, href: lesson("1ac", "s2", "angles-alternes-correspondants") },
          { slug: "cercle-et-droite", title: "Le cercle", order: 7, href: lesson("1ac", "s2", "cercle-et-droite") },
          { slug: "prisme-droit-cylindre", title: "Prisme droit — Cylindre", order: 8, href: lesson("1ac", "s2", "prisme-droit-cylindre") },
          { slug: "droite-graduee-repere-plan", title: "Droite graduée, repère dans le plan", order: 9, href: lesson("1ac", "s2", "droite-graduee-repere-plan") },
          { slug: "statistiques", title: "Statistiques", order: 10, href: lesson("1ac", "s2", "statistiques") },
          { slug: "proportionnalite", title: "La proportionnalité", order: 11, href: lesson("1ac", "s2", "proportionnalite") },
        ],
      },
    ],
  },
  {
    id: "2ac",
    short: "2AC",
    full: "2ème Année Collège",
    description:
      "Nombres rationnels, calcul littéral, triangles, symétrie axiale et géométrie dans l'espace.",
    available: true,
    semesters: [
      {
        id: "s1",
        label: "Semestre 1",
        chapters: [
          { slug: "evaluations-diagnostiques", title: "Évaluation diagnostique", order: 1, href: lesson("2ac", "s1", "evaluations-diagnostiques") },
          { slug: "nombres-rationnels-introduction-ordre", title: "Les nombres rationnels — Introduction et ordre", order: 2, href: lesson("2ac", "s1", "nombres-rationnels-introduction-ordre") },
          { slug: "addition-soustraction-nombres-rationnels", title: "Addition et soustraction des nombres rationnels", order: 3, href: lesson("2ac", "s1", "addition-soustraction-nombres-rationnels") },
          { slug: "produit-division-nombres-rationnels", title: "Produit et division des nombres rationnels", order: 4, href: lesson("2ac", "s1", "produit-division-nombres-rationnels") },
          { slug: "puissance", title: "Puissance", order: 5, href: lesson("2ac", "s1", "puissance") },
          { slug: "symetrie-axiale", title: "Symétrie axiale", order: 6, href: lesson("2ac", "s1", "symetrie-axiale") },
          { slug: "droites-remarquables-triangle", title: "Les droites remarquables dans un triangle", order: 7, href: lesson("2ac", "s1", "droites-remarquables-triangle") },
          { slug: "droites-des-milieux-triangle", title: "Droites des milieux dans un triangle", order: 8, href: lesson("2ac", "s1", "droites-des-milieux-triangle") },
        ],
      },
      {
        id: "s2",
        label: "Semestre 2",
        chapters: [
          { slug: "ordre-et-operations", title: "Ordre et opérations", order: 1, href: lesson("2ac", "s2", "ordre-et-operations") },
          { slug: "calcul-litteral", title: "Calcul littéral", order: 2, href: lesson("2ac", "s2", "calcul-litteral") },
          { slug: "equations", title: "Les équations", order: 3, href: lesson("2ac", "s2", "equations") },
          { slug: "proportionnalite", title: "Proportionnalité", order: 4, href: lesson("2ac", "s2", "proportionnalite") },
          { slug: "statistiques", title: "Statistique", order: 5, href: lesson("2ac", "s2", "statistiques") },
          { slug: "triangle-rectangle-cercle", title: "Triangle rectangle et cercle", order: 6, href: lesson("2ac", "s2", "triangle-rectangle-cercle") },
          { slug: "vecteur-translation", title: "Vecteur et translation", order: 7, href: lesson("2ac", "s2", "vecteur-translation") },
          { slug: "geometrie-espace", title: "Géométrie dans l'espace", order: 8, href: lesson("2ac", "s2", "geometrie-espace") },
        ],
      },
    ],
  },
  {
    id: "3ac",
    short: "3AC",
    full: "3ème Année Collège",
    description:
      "Racine carrée, théorème de Pythagore et de Thalès, fonctions, équations et statistiques — niveau examen.",
    available: true,
    semesters: [
      {
        id: "s1",
        label: "Semestre 1",
        chapters: [
          { slug: "evaluations-diagnostiques", title: "Évaluations diagnostiques", order: 1, href: lesson("3ac", "s1", "evaluations-diagnostiques") },
          { slug: "developpement-factorisation-identites-remarquables", title: "Développement, factorisation et identités remarquables", order: 2, href: lesson("3ac", "s1", "developpement-factorisation-identites-remarquables") },
          { slug: "puissance", title: "Puissance", order: 3, href: lesson("3ac", "s1", "puissance") },
          { slug: "racine-carree", title: "Racine carrée", order: 4, href: lesson("3ac", "s1", "racine-carree") },
          { slug: "theoreme-thales", title: "Théorème de Thalès", order: 5, href: lesson("3ac", "s1", "theoreme-thales") },
          { slug: "ordre-et-operations", title: "Ordre et opération", order: 6, href: lesson("3ac", "s1", "ordre-et-operations") },
          { slug: "theoreme-pythagore", title: "Théorème de Pythagore", order: 7, href: lesson("3ac", "s1", "theoreme-pythagore") },
          { slug: "triangle-rectangle-trigonometrie", title: "Triangle rectangle et trigonométrie", order: 8, href: lesson("3ac", "s1", "triangle-rectangle-trigonometrie") },
          { slug: "angle-inscrit-angle-au-centre", title: "Angle inscrit et angle au centre", order: 9, href: lesson("3ac", "s1", "angle-inscrit-angle-au-centre") },
          { slug: "triangle-semblable", title: "Triangle semblable", order: 10, href: lesson("3ac", "s1", "triangle-semblable") },
        ],
      },
      {
        id: "s2",
        label: "Semestre 2",
        chapters: [
          { slug: "equations-inequations", title: "Équations et inéquations", order: 1, href: lesson("3ac", "s2", "equations-inequations") },
          { slug: "vecteur-translation", title: "Vecteur et translation", order: 2, href: lesson("3ac", "s2", "vecteur-translation") },
          { slug: "repere-dans-le-plan", title: "Repère dans le plan", order: 3, href: lesson("3ac", "s2", "repere-dans-le-plan") },
          { slug: "equation-dune-droite", title: "Équation d'une droite", order: 4, href: lesson("3ac", "s2", "equation-dune-droite") },
          { slug: "systeme-deux-equations", title: "Système de deux équations", order: 5, href: lesson("3ac", "s2", "systeme-deux-equations") },
          { slug: "fonction-lineaire-affine", title: "Fonction linéaire et fonction affine", order: 6, href: lesson("3ac", "s2", "fonction-lineaire-affine") },
          { slug: "statistiques", title: "Statistique", order: 7, href: lesson("3ac", "s2", "statistiques") },
          { slug: "geometrie-espace", title: "Géométrie dans l'espace", order: 8, href: lesson("3ac", "s2", "geometrie-espace") },
          { slug: "examens-regionaux", title: "Préparation — Examens régionaux", order: 9, href: lesson("3ac", "s2", "examens-regionaux") },
        ],
      },
    ],
  },
];

export function getLevel(id: string) {
  return LEVELS.find((l) => l.id === id);
}

export interface LessonParams {
  niveau: string;
  semestre: string;
  slug: string;
}

/** Flattened {niveau, semestre, slug} for every chapter — drives generateStaticParams and the sitemap. */
export function getAllLessonParams(): LessonParams[] {
  return LEVELS.flatMap((level) =>
    level.semesters.flatMap((semester) =>
      semester.chapters.map((chapter) => ({
        niveau: level.id,
        semestre: semester.id,
        slug: chapter.slug,
      }))
    )
  );
}

export function getChapter(niveau: string, semestre: string, slug: string) {
  const level = getLevel(niveau);
  const semester = level?.semesters.find((s) => s.id === semestre);
  const chapter = semester?.chapters.find((c) => c.slug === slug);
  if (!level || !semester || !chapter) return null;
  return { level, semester, chapter };
}
