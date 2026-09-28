/**
 * Point central pour les liens réseaux sociaux / WhatsApp du site.
 * Tant qu'une valeur reste `null`, le bouton ou la section correspondante
 * s'affiche en état "Bientôt disponible" au lieu d'un lien mort.
 * Remplir ici dès que les comptes existent : aucun autre fichier à modifier.
 */
export const SOCIAL_LINKS: {
  whatsapp: string | null;
  instagram: string | null;
  youtube: string | null;
} = {
  whatsapp: null,
  instagram: null,
  youtube: null,
};
