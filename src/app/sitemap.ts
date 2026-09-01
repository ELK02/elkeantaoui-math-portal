import type { MetadataRoute } from "next";
import { LEVELS, getAllLessonParams } from "@/data/chapters";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

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

  return [...staticRoutes, ...lessonRoutes];
}
