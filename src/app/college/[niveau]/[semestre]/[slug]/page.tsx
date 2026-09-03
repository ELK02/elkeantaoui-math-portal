import type { ComponentType } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllLessonParams, getChapter } from "@/data/chapters";
import type { LessonMeta } from "@/components/lesson";
import { PageShell } from "@/components/PageShell";

export function generateStaticParams() {
  return getAllLessonParams();
}

export async function generateMetadata(
  props: PageProps<"/college/[niveau]/[semestre]/[slug]">
): Promise<Metadata> {
  const { niveau, semestre, slug } = await props.params;
  if (!getChapter(niveau, semestre, slug)) return {};
  const url = `/college/${niveau}/${semestre}/${slug}`;

  const mod = (await import(`@/content/lessons/${niveau}/${semestre}/${slug}`)) as {
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

export default async function LessonPage(
  props: PageProps<"/college/[niveau]/[semestre]/[slug]">
) {
  const { niveau, semestre, slug } = await props.params;
  if (!getChapter(niveau, semestre, slug)) notFound();

  const mod = (await import(`@/content/lessons/${niveau}/${semestre}/${slug}`)) as {
    default: ComponentType;
  };
  const Lesson = mod.default;
  return (
    <PageShell>
      <Lesson />
    </PageShell>
  );
}
