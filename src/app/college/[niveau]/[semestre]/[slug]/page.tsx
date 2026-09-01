import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllLessonParams, getChapter } from "@/data/chapters";
import { getLessonDoc, lessonFileExists } from "@/lib/lessonHtml";

export function generateStaticParams() {
  return getAllLessonParams();
}

export async function generateMetadata(
  props: PageProps<"/college/[niveau]/[semestre]/[slug]">
): Promise<Metadata> {
  const { niveau, semestre, slug } = await props.params;
  if (!lessonFileExists(niveau, semestre, slug)) return {};

  const doc = getLessonDoc(niveau, semestre, slug);
  const url = `/college/${niveau}/${semestre}/${slug}`;

  return {
    title: doc.title || undefined,
    description: doc.description || undefined,
    alternates: { canonical: url },
    openGraph: {
      title: doc.title || undefined,
      description: doc.description || undefined,
      url,
      type: "article",
    },
  };
}

export default async function LessonPage(
  props: PageProps<"/college/[niveau]/[semestre]/[slug]">
) {
  const { niveau, semestre, slug } = await props.params;
  const found = getChapter(niveau, semestre, slug);
  if (!found || !lessonFileExists(niveau, semestre, slug)) notFound();

  const doc = getLessonDoc(niveau, semestre, slug);

  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: doc.headExtra }} />
      {/* eslint-disable-next-line react/no-danger */}
      <div
        suppressHydrationWarning
        className={doc.bodyClassName}
        dangerouslySetInnerHTML={{ __html: doc.bodyHtml }}
      />
    </>
  );
}
