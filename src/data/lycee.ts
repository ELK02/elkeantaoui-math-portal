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
 * 15 chapitres (9 au semestre 1, 6 au semestre 2).
 */
export const TRONC_COMMUN_SCIENCES: { semesters: LyceeSemester[] } = {
  semesters: [
    {
      id: "s1",
      label: "Semestre 1",
      chapters: [
        { slug: "ensembles-de-nombres", title: "Les ensembles de nombres", order: 1 },
        { slug: "arithmetique-dans-in", title: "Arithmétique dans IN", order: 2 },
        { slug: "calcul-vectoriel-plan", title: "Calcul vectoriel dans le plan", order: 3 },
        { slug: "projection-dans-le-plan", title: "La projection dans le plan", order: 4 },
        { slug: "ordre-dans-ir", title: "L'ordre dans IR", order: 5 },
        { slug: "droite-dans-le-plan", title: "La droite dans le plan", order: 6 },
        { slug: "polynomes", title: "Les polynômes", order: 7 },
        { slug: "equations-inequations-systemes", title: "Équations, inéquations et systèmes", order: 8 },
        { slug: "trigonometrie-1", title: "Trigonométrie 1 — Calcul trigonométrique", order: 9 },
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
