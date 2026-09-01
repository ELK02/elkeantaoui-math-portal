import fs from "node:fs";
import path from "node:path";

export interface LessonDoc {
  title: string;
  description: string;
  /** Raw <head> content, minus <title>/<meta description>/<meta charset>/<meta viewport> (handled by Next's metadata). */
  headExtra: string;
  /** class attribute of the original <body> tag. */
  bodyClassName: string;
  /** Inner HTML of <body> (header/main/footer/scripts), rendered as-is. */
  bodyHtml: string;
}

function lessonFilePath(niveau: string, semestre: string, slug: string) {
  return path.join(process.cwd(), "public", "lecons", niveau, semestre, slug, "index.html");
}

export function lessonFileExists(niveau: string, semestre: string, slug: string) {
  return fs.existsSync(lessonFilePath(niveau, semestre, slug));
}

function sliceBetween(src: string, start: string, end: string): string {
  const s = src.indexOf(start);
  if (s === -1) return "";
  const from = s + start.length;
  const e = src.indexOf(end, from);
  if (e === -1) return "";
  return src.slice(from, e);
}

export function getLessonDoc(niveau: string, semestre: string, slug: string): LessonDoc {
  const raw = fs.readFileSync(lessonFilePath(niveau, semestre, slug), "utf-8");

  const title = /<title>([\s\S]*?)<\/title>/.exec(raw)?.[1]?.trim() ?? "";
  const description =
    /<meta\s+name="description"\s+content="([\s\S]*?)"\s*\/?>/.exec(raw)?.[1]?.trim() ?? "";

  let headExtra = sliceBetween(raw, "<head>", "</head>");
  headExtra = headExtra
    .replace(/<meta\s+charset="[^"]*"\s*\/?>/i, "")
    .replace(/<meta\s+name="viewport"[^>]*\/?>/i, "")
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\s+name="description"[^>]*\/?>/i, "")
    .trim();

  const bodyOpenMatch = /<body([^>]*)>/i.exec(raw);
  const bodyClassMatch = bodyOpenMatch ? /class="([^"]*)"/.exec(bodyOpenMatch[1]) : null;
  const bodyClassName = bodyClassMatch?.[1] ?? "";
  const bodyOpenFull = bodyOpenMatch?.[0] ?? "<body>";
  const bodyHtml = sliceBetween(raw, bodyOpenFull, "</body>").trim();

  return { title, description, headExtra, bodyClassName, bodyHtml };
}
