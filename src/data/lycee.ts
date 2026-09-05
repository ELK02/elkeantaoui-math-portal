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
