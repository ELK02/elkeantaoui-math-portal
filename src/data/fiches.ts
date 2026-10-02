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

/** Chaînes WhatsApp provisoires où les fiches sont partagées, affichées avec leur QR code sur /fiches. */
export const FICHES_WHATSAPP_CHANNELS: { level: string; url: string }[] = [
  { level: "1AC", url: "https://whatsapp.com/channel/0029Vb91nTw6GcG769CIF52R" },
  { level: "2AC", url: "https://whatsapp.com/channel/0029VbDoVclLNSZuwqW6YE2B" },
];
