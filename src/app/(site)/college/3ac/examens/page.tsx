import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { ExamGallery } from "@/components/ExamGallery";

export const metadata: Metadata = { title: "Examens — 3ème Année Collège" };

function listLocalExams() {
  const dir = path.join(process.cwd(), "public", "examens", "3ac", "locale");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".pdf"))
    .sort()
    .map((file) => ({
      file,
      href: `/examens/3ac/locale/${file}`,
      label: file
        .replace(/\.pdf$/, "")
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
    }));
}

function listRegionalPages() {
  const dir = path.join(process.cwd(), "public", "examens", "3ac", "regional");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".jpg"))
    .sort()
    .map((file) => `/examens/3ac/regional/${file}`);
}

export default function ExamensPage() {
  const localExams = listLocalExams();
  const regionalPages = listRegionalPages();

  return (
    <>
      <section className="border-b border-border bg-navy-900">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-orange-400">3ème Année Collège</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">
            Examens locaux &amp; régionaux
          </h1>
          <p className="mt-3 max-w-2xl text-navy-100">
            Une sélection d&apos;examens blancs et d&apos;annales pour s&apos;entraîner dans
            les conditions du contrôle et de l&apos;examen régional.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-display text-xl font-bold text-foreground">Examens locaux</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {localExams.map((exam) => (
            <a
              key={exam.file}
              href={exam.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-navy-500 hover:shadow-md"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700 dark:text-green-500">
                <FileText className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-foreground">{exam.label}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-xl font-bold text-foreground">
          Annales — Examen régional
        </h2>
        <p className="mt-1.5 text-sm text-foreground-muted">
          {regionalPages.length} pages scannées — cliquez pour agrandir.
        </p>
        <ExamGallery pages={regionalPages} />
      </section>
    </>
  );
}
