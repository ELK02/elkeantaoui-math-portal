export type LevelId = "1ac" | "2ac" | "3ac";
export type SemesterId = "s1" | "s2";

export interface Chapter {
  slug: string;
  title: string;
  order: number;
  /** Path to the copied, reskinned static lesson, relative to /public */
  href: string;
}

export interface Semester {
  id: SemesterId;
  label: string;
  chapters: Chapter[];
}

export interface Level {
  id: LevelId;
  short: string;
  full: string;
  description: string;
  available: boolean;
  semesters: Semester[];
}
