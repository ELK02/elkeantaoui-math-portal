/**
 * Point central pour les liens réseaux sociaux du site (hors WhatsApp, géré
 * par niveau dans src/data/whatsapp.ts).
 * Tant qu'une valeur reste `null`, le bouton ou la section correspondante
 * s'affiche en état "Bientôt disponible" au lieu d'un lien mort.
 * Remplir ici dès que les comptes existent : aucun autre fichier à modifier.
 */
export const SOCIAL_LINKS: {
  instagram: string | null;
  youtube: string | null;
} = {
  instagram: "https://www.instagram.com/profdemathcom",
  youtube: null,
};
