export type WhatsappLevelId = "1ac" | "2ac" | "3ac" | "tc" | "1bac" | "2bac";

/**
 * Un canal WhatsApp par niveau. Tant qu'une valeur reste `null`, aucun bouton
 * n'est affiché sur la page de ce niveau (pas de lien mort).
 * Remplir ici dès qu'un canal existe pour un niveau donné.
 */
export const WHATSAPP_CHANNELS: Record<WhatsappLevelId, string | null> = {
  "1ac": null,
  "2ac": null,
  "3ac": null,
  tc: null,
  "1bac": null,
  "2bac": null,
};

export const WHATSAPP_LEVEL_LABELS: Record<WhatsappLevelId, string> = {
  "1ac": "1AC",
  "2ac": "2AC",
  "3ac": "3AC",
  tc: "Tronc Commun",
  "1bac": "1ère Bac",
  "2bac": "2ème Bac",
};
