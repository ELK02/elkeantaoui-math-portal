import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { LEVELS, getAllLessonParams } from "@/data/chapters";
import { TRONC_COMMUN_SCIENCES, PREMIERE_BAC, DEUXIEME_BAC } from "@/data/lycee";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

const LESSON_CONTENT_ROOT = path.join(process.cwd(), "src/content/lessons/lycee");

function hasContent(...segments: string[]) {
  return fs.existsSync(path.join(LESSON_CONTENT_ROOT, ...segments) + ".tsx");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/lycee`, changeFrequency: "monthly", priority: 0.3 },
    ...LEVELS.map((level) => ({
      url: `${SITE_URL}/college/${level.id}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];

  const lessonRoutes: MetadataRoute.Sitemap = getAllLessonParams().map(
    ({ niveau, semestre, slug }) => ({
      url: `${SITE_URL}/college/${niveau}/${semestre}/${slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  const troncCommunRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/lycee/tronc-commun/sciences`, changeFrequency: "weekly", priority: 0.8 },
    ...TRONC_COMMUN_SCIENCES.semesters.flatMap((semester) =>
      semester.chapters
        .filter((chapter) => hasContent("tc-sciences", semester.id, chapter.slug))
        .map((chapter) => ({
          url: `${SITE_URL}/lycee/tronc-commun/sciences/${semester.id}/${chapter.slug}`,
          changeFrequency: "monthly" as const,
          priority: 0.7,
        }))
    ),
  ];

  const premiereBacRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/lycee/1ere-bac`, changeFrequency: "monthly", priority: 0.3 },
    ...PREMIERE_BAC.filieres.flatMap((filiere) => [
      { url: `${SITE_URL}/lycee/1ere-bac/${filiere.slug}`, changeFrequency: "weekly" as const, priority: 0.7 },
      ...filiere.semesters.flatMap((semester) =>
        semester.chapters
          .filter((chapter) => hasContent("1ere-bac", filiere.slug, semester.id, chapter.slug))
          .map((chapter) => ({
            url: `${SITE_URL}/lycee/1ere-bac/${filiere.slug}/${semester.id}/${chapter.slug}`,
            changeFrequency: "monthly" as const,
            priority: 0.6,
          }))
      ),
    ]),
  ];

  const deuxiemeBacRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/lycee/2eme-bac`, changeFrequency: "monthly", priority: 0.3 },
    ...DEUXIEME_BAC.filieres.flatMap((filiere) => [
      { url: `${SITE_URL}/lycee/2eme-bac/${filiere.slug}`, changeFrequency: "weekly" as const, priority: 0.7 },
      ...filiere.semesters.flatMap((semester) =>
        semester.chapters
          .filter((chapter) => hasContent("2eme-bac", filiere.slug, semester.id, chapter.slug))
          .map((chapter) => ({
            url: `${SITE_URL}/lycee/2eme-bac/${filiere.slug}/${semester.id}/${chapter.slug}`,
            changeFrequency: "monthly" as const,
            priority: 0.6,
          }))
      ),
    ]),
  ];

  return [
    ...staticRoutes,
    ...lessonRoutes,
    ...troncCommunRoutes,
    ...premiereBacRoutes,
    ...deuxiemeBacRoutes,
  ];
}
