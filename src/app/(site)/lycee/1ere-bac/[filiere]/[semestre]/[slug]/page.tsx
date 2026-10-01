import type { ComponentType } from "react";
import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { PREMIERE_BAC } from "@/data/lycee";
import type { LessonMeta } from "@/components/lesson";
import { MarkVisited } from "@/components/MarkVisited";
import { LessonJsonLd } from "@/components/LessonJsonLd";

const CONTENT_ROOT = path.join(process.cwd(), "src/content/lessons/lycee/1ere-bac");

function chapterExists(filiere: string, semestre: string, slug: string) {
  const f = PREMIERE_BAC.filieres.find((x) => x.slug === filiere);
  const semester = f?.semesters.find((s) => s.id === semestre);
  if (!semester?.chapters.some((c) => c.slug === slug)) return false;
  return fs.existsSync(path.join(CONTENT_ROOT, filiere, semestre, `${slug}.tsx`));
}

export function generateStaticParams() {
  const params: { filiere: string; semestre: string; slug: string }[] = [];
  for (const f of PREMIERE_BAC.filieres) {
    for (const semester of f.semesters) {
      for (const chapter of semester.chapters) {
        if (chapterExists(f.slug, semester.id, chapter.slug)) {
          params.push({ filiere: f.slug, semestre: semester.id, slug: chapter.slug });
        }
      }
    }
  }
  return params;
}

export async function generateMetadata(
  props: PageProps<"/lycee/1ere-bac/[filiere]/[semestre]/[slug]">
): Promise<Metadata> {
  const { filiere, semestre, slug } = await props.params;
  if (!chapterExists(filiere, semestre, slug)) return {};
  const url = `/lycee/1ere-bac/${filiere}/${semestre}/${slug}`;

  const mod = (await import(`@/content/lessons/lycee/1ere-bac/${filiere}/${semestre}/${slug}`)) as {
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
      images: ["/opengraph-image"],
    },
  };
}

export default async function PremiereBacLessonPage(
  props: PageProps<"/lycee/1ere-bac/[filiere]/[semestre]/[slug]">
) {
  const { filiere, semestre, slug } = await props.params;
  if (!chapterExists(filiere, semestre, slug)) notFound();

  const mod = (await import(`@/content/lessons/lycee/1ere-bac/${filiere}/${semestre}/${slug}`)) as {
    default: ComponentType;
    meta: LessonMeta;
  };
  const Lesson = mod.default;
  return (
    <>
      <LessonJsonLd
        title={mod.meta.title}
        description={mod.meta.description}
        url={`/lycee/1ere-bac/${filiere}/${semestre}/${slug}`}
      />
      <MarkVisited levelId={`1bac-${filiere}`} slug={slug} />
      <Lesson />
    </>
  );
}
