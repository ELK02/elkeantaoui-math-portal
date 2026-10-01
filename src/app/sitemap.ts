import type { MetadataRoute } from "next";
import { LEVELS, getAllLessonParams } from "@/data/chapters";
import { TRONC_COMMUN_SCIENCES, PREMIERE_BAC, DEUXIEME_BAC } from "@/data/lycee";

const BASE_URL = "https://profdemath.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/examens",
    "/fiches",
    "/a-propos",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
    "/lycee",
    "/lycee/1ere-bac",
    "/lycee/2eme-bac",
    "/lycee/tronc-commun/sciences",
    "/college/3ac/examens",
    ...LEVELS.map((level) => `/college/${level.id}`),
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const lessonRoutes = getAllLessonParams().map(({ niveau, semestre, slug }) => ({
    url: `${BASE_URL}/college/${niveau}/${semestre}/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const tcRoutes = TRONC_COMMUN_SCIENCES.semesters.flatMap((semester) =>
    semester.chapters.map((chapter) => ({
      url: `${BASE_URL}/lycee/tronc-commun/sciences/${semester.id}/${chapter.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  const premiereBacRoutes = PREMIERE_BAC.filieres.flatMap((filiere) => [
    { url: `${BASE_URL}/lycee/1ere-bac/${filiere.slug}`, changeFrequency: "weekly" as const, priority: 0.65 },
    ...filiere.semesters.flatMap((semester) =>
      semester.chapters.map((chapter) => ({
        url: `${BASE_URL}/lycee/1ere-bac/${filiere.slug}/${semester.id}/${chapter.slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }))
    ),
  ]);

  const deuxiemeBacRoutes = DEUXIEME_BAC.filieres.flatMap((filiere) => [
    { url: `${BASE_URL}/lycee/2eme-bac/${filiere.slug}`, changeFrequency: "weekly" as const, priority: 0.65 },
    ...filiere.semesters.flatMap((semester) =>
      semester.chapters.map((chapter) => ({
        url: `${BASE_URL}/lycee/2eme-bac/${filiere.slug}/${semester.id}/${chapter.slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }))
    ),
  ]);

  return [...staticRoutes, ...lessonRoutes, ...tcRoutes, ...premiereBacRoutes, ...deuxiemeBacRoutes];
}
