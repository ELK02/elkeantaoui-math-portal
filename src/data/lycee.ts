/** Chapters not yet written (no content module) are simply listed without an href. */
export interface LyceeChapter {
  slug: string;
  title: string;
  order: number;
}

export interface LyceeSemester {
  id: string;
  label: string;
  chapters: LyceeChapter[];
}

export interface LyceeFiliere {
  slug: string;
  label: string;
  semesters: LyceeSemester[];
}

/**
 * Tronc Commun, filière Science et Technologies : programme national marocain,
 * 16 chapitres (évaluation diagnostique + 9 chapitres au semestre 1, 6 au semestre 2).
 */
export const TRONC_COMMUN_SCIENCES: { semesters: LyceeSemester[] } = {
  semesters: [
    {
      id: "s1",
      label: "Semestre 1",
      chapters: [
        { slug: "evaluations-diagnostiques", title: "Évaluation diagnostique", order: 1 },
        { slug: "ensembles-de-nombres", title: "Les ensembles de nombres", order: 2 },
        { slug: "arithmetique-dans-in", title: "Arithmétique dans IN", order: 3 },
        { slug: "calcul-vectoriel-plan", title: "Calcul vectoriel dans le plan", order: 4 },
        { slug: "projection-dans-le-plan", title: "La projection dans le plan", order: 5 },
        { slug: "ordre-dans-ir", title: "L'ordre dans IR", order: 6 },
        { slug: "droite-dans-le-plan", title: "La droite dans le plan", order: 7 },
        { slug: "polynomes", title: "Les polynômes", order: 8 },
        { slug: "equations-inequations-systemes", title: "Équations, inéquations et systèmes", order: 9 },
        { slug: "trigonometrie-1", title: "Trigonométrie 1 — Calcul trigonométrique", order: 10 },
      ],
    },
    {
      id: "s2",
      label: "Semestre 2",
      chapters: [
        { slug: "trigonometrie-2", title: "Trigonométrie 2 — Équations et inéquations trigonométriques", order: 1 },
        { slug: "generalites-fonctions", title: "Généralités sur les fonctions", order: 2 },
        { slug: "transformations-du-plan", title: "Transformations du plan", order: 3 },
        { slug: "produit-scalaire", title: "Le produit scalaire", order: 4 },
        { slug: "geometrie-espace", title: "Géométrie dans l'espace", order: 5 },
        { slug: "statistiques", title: "Statistiques", order: 6 },
      ],
    },
  ],
};

/**
 * Sciences Expérimentales, Sciences et Technologies Électriques et Sciences et
 * Technologies Mécaniques partagent le même programme de mathématiques en 1ère Bac.
 */
const SCIENCES_EXPERIMENTALES_SEMESTERS: LyceeSemester[] = [
  {
    id: "s1",
    label: "Semestre 1",
    chapters: [
      { slug: "evaluations-diagnostiques", title: "Évaluation diagnostique", order: 1 },
      { slug: "logique-mathematique", title: "Logique mathématique", order: 2 },
      { slug: "generalites-fonctions", title: "Généralités sur les fonctions", order: 3 },
      { slug: "suites-numeriques", title: "Les suites numériques", order: 4 },
      { slug: "barycentre-plan", title: "Barycentre dans le plan", order: 5 },
      { slug: "produit-scalaire-applications", title: "Le produit scalaire et ses applications", order: 6 },
      { slug: "calcul-trigonometrique", title: "Calcul trigonométrique", order: 7 },
    ],
  },
  {
    id: "s2",
    label: "Semestre 2",
    chapters: [
      { slug: "rotation-plan", title: "Rotation dans le plan", order: 1 },
      { slug: "limites-fonction", title: "Les limites d'une fonction", order: 2 },
      { slug: "derivation", title: "La dérivation", order: 3 },
      { slug: "etude-fonctions", title: "Étude des fonctions numériques", order: 4 },
      { slug: "vecteurs-espace", title: "Vecteurs de l'espace", order: 5 },
      { slug: "geometrie-analytique-espace", title: "Géométrie analytique de l'espace", order: 6 },
    ],
  },
];

/**
 * 1ère Année Baccalauréat : Sciences Mathématiques (18 chapitres), puis Sciences
 * Expérimentales, Sciences et Technologies Électriques et Sciences et Technologies
 * Mécaniques (13 chapitres chacune, même programme), toutes avec l'évaluation
 * diagnostique comme premier chapitre du semestre 1.
 */
export const PREMIERE_BAC: { filieres: LyceeFiliere[] } = {
  filieres: [
    {
      slug: "sciences-math",
      label: "Sciences Mathématiques",
      semesters: [
        {
          id: "s1",
          label: "Semestre 1",
          chapters: [
            { slug: "evaluations-diagnostiques", title: "Évaluation diagnostique", order: 1 },
            { slug: "logique-mathematique", title: "Logique mathématique", order: 2 },
            { slug: "ensembles-applications", title: "Ensembles et applications", order: 3 },
            { slug: "generalites-fonctions", title: "Généralités sur les fonctions", order: 4 },
            { slug: "barycentre-plan", title: "Barycentre dans le plan", order: 5 },
            { slug: "produit-scalaire-applications", title: "Le produit scalaire et ses applications", order: 6 },
            { slug: "calcul-trigonometrique", title: "Calcul trigonométrique", order: 7 },
            { slug: "suites-numeriques", title: "Les suites numériques", order: 8 },
            { slug: "limites-fonction", title: "Limites d'une fonction", order: 9 },
            { slug: "rotation-plan", title: "La rotation dans le plan", order: 10 },
          ],
        },
        {
          id: "s2",
          label: "Semestre 2",
          chapters: [
            { slug: "derivation", title: "La dérivation", order: 1 },
            { slug: "etude-fonctions", title: "Étude des fonctions", order: 2 },
            { slug: "vecteurs-espace", title: "Vecteurs de l'espace", order: 3 },
            { slug: "geometrie-espace", title: "Géométrie dans l'espace", order: 4 },
            { slug: "denombrement", title: "Dénombrement", order: 5 },
            { slug: "produit-scalaire-espace", title: "Le produit scalaire dans l'espace", order: 6 },
            { slug: "arithmetique-dans-z", title: "Arithmétique dans Z", order: 7 },
            { slug: "produit-vectoriel", title: "Le produit vectoriel", order: 8 },
          ],
        },
      ],
    },
    {
      slug: "sciences-experimentales",
      label: "Sciences Expérimentales",
      semesters: SCIENCES_EXPERIMENTALES_SEMESTERS,
    },
    {
      slug: "sciences-tech-electriques",
      label: "Sciences et Technologies Électriques",
      semesters: SCIENCES_EXPERIMENTALES_SEMESTERS,
    },
    {
      slug: "sciences-tech-mecaniques",
      label: "Sciences et Technologies Mécaniques",
      semesters: SCIENCES_EXPERIMENTALES_SEMESTERS,
    },
  ],
};

/**
 * Sciences Physiques, SVT, Sciences et Technologies Électriques et Sciences et
 * Technologies Mécaniques partagent le même programme de mathématiques en 2ème Bac.
 */
const DEUXIEME_BAC_SCIENCES_SEMESTERS: LyceeSemester[] = [
  {
    id: "s1",
    label: "Semestre 1",
    chapters: [
      { slug: "evaluations-diagnostiques", title: "Évaluation diagnostique", order: 1 },
      { slug: "limites-continuite", title: "Limites et Continuité", order: 2 },
      { slug: "derivabilite-etude-fonctions", title: "Dérivabilité et Étude des fonctions", order: 3 },
      { slug: "suites-numeriques", title: "Suites numériques", order: 4 },
      { slug: "fonctions-primitives", title: "Fonctions primitives", order: 5 },
      { slug: "fonction-logarithme", title: "La fonction logarithme", order: 6 },
      { slug: "nombres-complexes-1", title: "Les nombres complexes (Partie 1)", order: 7 },
    ],
  },
  {
    id: "s2",
    label: "Semestre 2",
    chapters: [
      { slug: "fonction-exponentielle", title: "La fonction Exponentielle", order: 1 },
      { slug: "nombres-complexes-2", title: "Les nombres complexes (Partie 2)", order: 2 },
      { slug: "calcul-integral", title: "Calcul intégral", order: 3 },
      { slug: "equations-differentielles", title: "Équations différentielles", order: 4 },
      { slug: "geometrie-espace", title: "Géométrie dans l'espace", order: 5 },
      { slug: "denombrement-probabilites", title: "Dénombrement et probabilités", order: 6 },
    ],
  },
];

/** Sciences Mathématiques A et B partagent le même programme de mathématiques en 2ème Bac. */
const DEUXIEME_BAC_SM_SEMESTERS: LyceeSemester[] = [
  {
    id: "s1",
    label: "Semestre 1",
    chapters: [
      { slug: "evaluations-diagnostiques", title: "Évaluation diagnostique", order: 1 },
      { slug: "limites-continuite", title: "Limites et Continuité", order: 2 },
      { slug: "derivabilite-etude-fonctions", title: "Dérivabilité et Etude des fonctions", order: 3 },
      { slug: "theoreme-accroissements-finis", title: "Théorème des Accroissements Finis (TAF)", order: 4 },
      { slug: "suites-numeriques", title: "Suites numériques", order: 5 },
      { slug: "fonction-logarithme", title: "La fonction logarithme", order: 6 },
      { slug: "fonction-exponentielle", title: "La fonction Exponentielle", order: 7 },
      { slug: "equations-differentielles", title: "Équations différentielles", order: 8 },
      { slug: "nombres-complexes-1", title: "Nombres complexes (Partie 1)", order: 9 },
    ],
  },
  {
    id: "s2",
    label: "Semestre 2",
    chapters: [
      { slug: "nombres-complexes-2", title: "Nombres complexes (Partie 2)", order: 1 },
      { slug: "fonctions-primitives-calcul-integral", title: "Fonctions primitives et calcul intégral", order: 2 },
      { slug: "arithmetique", title: "Arithmétique", order: 3 },
      { slug: "structures-algebriques", title: "Structures algébriques", order: 4 },
      { slug: "probabilites", title: "Probabilités", order: 5 },
      { slug: "espaces-vectoriels", title: "Espaces vectoriels", order: 6 },
    ],
  },
];

/**
 * 2ème Année Baccalauréat : Sciences Physiques, SVT, Sciences et Technologies
 * Électriques et Sciences et Technologies Mécaniques (13 chapitres chacune), puis
 * Sciences Mathématiques A et B (15 chapitres chacune), toutes avec l'évaluation
 * diagnostique comme premier chapitre du semestre 1.
 */
export const DEUXIEME_BAC: { filieres: LyceeFiliere[] } = {
  filieres: [
    { slug: "sciences-physiques", label: "Sciences Physiques", semesters: DEUXIEME_BAC_SCIENCES_SEMESTERS },
    {
      slug: "svt",
      label: "Sciences de la Vie et de la Terre",
      semesters: DEUXIEME_BAC_SCIENCES_SEMESTERS,
    },
    {
      slug: "sciences-tech-electriques",
      label: "Sciences et Technologies Électriques",
      semesters: DEUXIEME_BAC_SCIENCES_SEMESTERS,
    },
    {
      slug: "sciences-tech-mecaniques",
      label: "Sciences et Technologies Mécaniques",
      semesters: DEUXIEME_BAC_SCIENCES_SEMESTERS,
    },
    { slug: "sciences-math-a", label: "Sciences Mathématiques A", semesters: DEUXIEME_BAC_SM_SEMESTERS },
    { slug: "sciences-math-b", label: "Sciences Mathématiques B", semesters: DEUXIEME_BAC_SM_SEMESTERS },
  ],
};
