export interface FicheManuscrite {
  slug: string;
  level: string;
  chapterTitle: string;
  /** Chemin vers l'image dans /public, ex. "/fiches/1ac/puissance.jpg" */
  imageSrc: string;
  /** PDF téléchargeable optionnel */
  pdfSrc?: string;
}

/**
 * Vide pour l'instant : la section "Fiches manuscrites" s'affiche en état
 * "Bientôt disponible" tant qu'aucune entrée n'est ajoutée ici.
 * Pour publier une fiche : déposer l'image dans public/fiches/<niveau>/... puis
 * ajouter une entrée ci-dessous.
 */
export const FICHES: FicheManuscrite[] = [];
