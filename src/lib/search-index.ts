import { LEVELS } from "@/data/chapters";
import { TRONC_COMMUN_SCIENCES, PREMIERE_BAC, DEUXIEME_BAC } from "@/data/lycee";

export interface SearchItem {
  title: string;
  levelLabel: string;
  cycle: "College" | "Lycee";
  href: string;
}

/**
 * Index statique (pas de scan fs : ce module est importé par un composant client).
 * Tous les chapitres listés ici ont un fichier de contenu réel sous
 * src/content/lessons (collège, Tronc Commun, 1ère et 2ème Bac, toutes filières).
 */
export const SEARCH_ITEMS: SearchItem[] = [
  ...LEVELS.flatMap((level) =>
    level.semesters.flatMap((semester) =>
      semester.chapters.map((chapter) => ({
        title: chapter.title,
        levelLabel: level.short,
        cycle: "College" as const,
        href: chapter.href,
      }))
    )
  ),
  ...TRONC_COMMUN_SCIENCES.semesters.flatMap((semester) =>
    semester.chapters.map((chapter) => ({
      title: chapter.title,
      levelLabel: "TC",
      cycle: "Lycee" as const,
      href: `/lycee/tronc-commun/sciences/${semester.id}/${chapter.slug}`,
    }))
  ),
  ...PREMIERE_BAC.filieres.flatMap((filiere) =>
    filiere.semesters.flatMap((semester) =>
      semester.chapters.map((chapter) => ({
        title: chapter.title,
        levelLabel: `1BAC · ${filiere.label}`,
        cycle: "Lycee" as const,
        href: `/lycee/1ere-bac/${filiere.slug}/${semester.id}/${chapter.slug}`,
      }))
    )
  ),
  ...DEUXIEME_BAC.filieres.flatMap((filiere) =>
    filiere.semesters.flatMap((semester) =>
      semester.chapters.map((chapter) => ({
        title: chapter.title,
        levelLabel: `2BAC · ${filiere.label}`,
        cycle: "Lycee" as const,
        href: `/lycee/2eme-bac/${filiere.slug}/${semester.id}/${chapter.slug}`,
      }))
    )
  ),
];

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export function searchChapters(query: string, limit = 8): SearchItem[] {
  const q = normalize(query.trim());
  if (!q) return [];
  return SEARCH_ITEMS.filter((item) => normalize(item.title).includes(q)).slice(0, limit);
}
