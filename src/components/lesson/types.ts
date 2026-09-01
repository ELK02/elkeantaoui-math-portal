export interface LessonSection {
  id: string;
  label: string;
}

export interface LessonStat {
  value: string;
  label: string;
}

export interface LessonMeta {
  title: string;
  description: string;
  kicker: string;
  heroTitle: string;
  heroSubtitle: string;
  sections: LessonSection[];
  stats?: LessonStat[];
  /** Short credit line shown in the lesson footer bar, e.g. "Les puissances · Mathématiques, 1AC, semestre 1." */
  footerNote: string;
}
