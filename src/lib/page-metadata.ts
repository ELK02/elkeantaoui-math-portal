import type { Metadata } from "next";

/** Open Graph cohérent pour une page : réutilise la bannière générée à la racine
 * (src/app/opengraph-image.tsx) tout en gardant le titre/description propres à la page. */
export function pageOpenGraph(
  title: string,
  description: string,
  url: string
): Metadata["openGraph"] {
  return {
    title,
    description,
    url,
    type: "website",
    images: ["/opengraph-image"],
  };
}
