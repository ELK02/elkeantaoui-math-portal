import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllLessonParams, getChapter } from "@/data/chapters";
import { getLessonDoc, lessonFileExists } from "@/lib/lessonHtml";
import type { LessonMeta } from "@/components/lesson";
import { PageShell } from "@/components/PageShell";

function hasLessonModule(niveau: string, semestre: string, slug: string) {
  return fs.existsSync(
    path.join(process.cwd(), "src", "content", "lessons", niveau, semestre, `${slug}.tsx`)
  );
}

export function generateStaticParams() {
  return getAllLessonParams();
}

export async function generateMetadata(
  props: PageProps<"/college/[niveau]/[semestre]/[slug]">
): Promise<Metadata> {
  const { niveau, semestre, slug } = await props.params;
  if (!getChapter(niveau, semestre, slug)) return {};
  const url = `/college/${niveau}/${semestre}/${slug}`;

  if (hasLessonModule(niveau, semestre, slug)) {
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

  if (!lessonFileExists(niveau, semestre, slug)) return {};
  const doc = getLessonDoc(niveau, semestre, slug);
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
  if (!getChapter(niveau, semestre, slug)) notFound();

  if (hasLessonModule(niveau, semestre, slug)) {
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

  // Legacy fallback for lessons not yet converted to TSX — removed once all 57 are migrated.
  if (!lessonFileExists(niveau, semestre, slug)) notFound();
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
