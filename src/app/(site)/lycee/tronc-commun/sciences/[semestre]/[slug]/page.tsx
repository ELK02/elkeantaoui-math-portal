import type { ComponentType } from "react";
import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { TRONC_COMMUN_SCIENCES } from "@/data/lycee";
import type { LessonMeta } from "@/components/lesson";

const CONTENT_ROOT = path.join(process.cwd(), "src/content/lessons/lycee/tc-sciences");

function chapterExists(semestre: string, slug: string) {
  const semester = TRONC_COMMUN_SCIENCES.semesters.find((s) => s.id === semestre);
  if (!semester?.chapters.some((c) => c.slug === slug)) return false;
  return fs.existsSync(path.join(CONTENT_ROOT, semestre, `${slug}.tsx`));
}

export function generateStaticParams() {
  const params: { semestre: string; slug: string }[] = [];
  for (const semester of TRONC_COMMUN_SCIENCES.semesters) {
    for (const chapter of semester.chapters) {
      if (chapterExists(semester.id, chapter.slug)) {
        params.push({ semestre: semester.id, slug: chapter.slug });
      }
    }
  }
  return params;
}

export async function generateMetadata(
  props: PageProps<"/lycee/tronc-commun/sciences/[semestre]/[slug]">
): Promise<Metadata> {
  const { semestre, slug } = await props.params;
  if (!chapterExists(semestre, slug)) return {};
  const url = `/lycee/tronc-commun/sciences/${semestre}/${slug}`;

  const mod = (await import(`@/content/lessons/lycee/tc-sciences/${semestre}/${slug}`)) as {
    meta: LessonMeta;
  };
  return {
    title: mod.meta.title,
    description: mod.meta.description,
    alternates: { canonical: url },
    openGraph: {
      title: mod.meta.title,
      description: mod.meta.description,
      url,
      type: "article",
    },
  };
}

export default async function LyceeLessonPage(
  props: PageProps<"/lycee/tronc-commun/sciences/[semestre]/[slug]">
) {
  const { semestre, slug } = await props.params;
  if (!chapterExists(semestre, slug)) notFound();

  const mod = (await import(`@/content/lessons/lycee/tc-sciences/${semestre}/${slug}`)) as {
    default: ComponentType;
  };
  const Lesson = mod.default;
  return <Lesson />;
}
