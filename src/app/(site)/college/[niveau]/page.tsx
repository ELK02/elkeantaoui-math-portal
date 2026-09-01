import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FileDown } from "lucide-react";
import { LEVELS, getLevel } from "@/data/chapters";
import { ChapterCard } from "@/components/ChapterCard";

export function generateStaticParams() {
  return LEVELS.map((level) => ({ niveau: level.id }));
}

export async function generateMetadata(
  props: PageProps<"/college/[niveau]">
): Promise<Metadata> {
  const { niveau } = await props.params;
  const level = getLevel(niveau);
  return { title: level ? level.full : "Niveau" };
}

export default async function NiveauPage(props: PageProps<"/college/[niveau]">) {
  const { niveau } = await props.params;
  const level = getLevel(niveau);
  if (!level) notFound();

  return (
    <>
      <section className="border-b border-border bg-navy-900">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-orange-400">Collège</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">
            {level.full}
          </h1>
          <p className="mt-3 max-w-2xl text-navy-100">{level.description}</p>
          {level.id === "3ac" && (
            <Link
              href="/college/3ac/examens"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <FileDown className="h-4 w-4" />
              Examens locaux &amp; régionaux
            </Link>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-6 px-4 py-12 sm:px-6 lg:px-8">
        {level.semesters.map((semester) => (
          <details key={semester.id} open className="group rounded-3xl border border-border bg-surface p-5 sm:p-7">
            <summary className="flex cursor-pointer list-none items-center justify-between font-display text-lg font-bold text-foreground marker:content-none">
              {semester.label}
              <span className="text-sm font-medium text-foreground-muted">
                {semester.chapters.length} chapitres
              </span>
            </summary>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {semester.chapters.map((chapter) => (
                <ChapterCard key={chapter.slug} chapter={chapter} index={chapter.order} />
              ))}
            </div>
          </details>
        ))}
      </section>
    </>
  );
}
