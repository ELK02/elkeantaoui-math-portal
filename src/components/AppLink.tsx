import NextLink from "next/link";
import type { ComponentProps } from "react";

/**
 * Lien interne du site, sans préchargement par défaut.
 * Le préchargement automatique de next/link télécharge chaque page liée visible
 * à l'écran, ce qui multiplie les lectures ISR sur Vercel (quota du plan Hobby).
 * Passer prefetch explicitement pour le réactiver sur un lien précis.
 */
export default function Link({ prefetch = false, ...props }: ComponentProps<typeof NextLink>) {
  return <NextLink prefetch={prefetch} {...props} />;
}
