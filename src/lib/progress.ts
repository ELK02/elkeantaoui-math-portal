import { LEVELS } from "@/data/chapters";
import { TRONC_COMMUN_SCIENCES, PREMIERE_BAC, DEUXIEME_BAC } from "@/data/lycee";

const STORAGE_KEY = "profdemath:progress";
export const PROGRESS_EVENT = "profdemath:progress-updated";

export type ProgressState = Record<string, string[]>;

function filiereTotal(semesters: { chapters: unknown[] }[]) {
  return semesters.reduce((n, s) => n + s.chapters.length, 0);
}

export const PROGRESS_LEVELS: { id: string; label: string; total: number }[] = [
  ...LEVELS.map((level) => ({
    id: level.id,
    label: level.short,
    total: level.semesters.reduce((n, s) => n + s.chapters.length, 0),
  })),
  {
    id: "tc",
    label: "TC",
    total: TRONC_COMMUN_SCIENCES.semesters.reduce((n, s) => n + s.chapters.length, 0),
  },
  ...PREMIERE_BAC.filieres.map((f) => ({
    id: `1bac-${f.slug}`,
    label: `1BAC · ${f.label}`,
    total: filiereTotal(f.semesters),
  })),
  ...DEUXIEME_BAC.filieres.map((f) => ({
    id: `2bac-${f.slug}`,
    label: `2BAC · ${f.label}`,
    total: filiereTotal(f.semesters),
  })),
];

export function getProgress(): ProgressState {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ProgressState) : {};
  } catch {
    return {};
  }
}

export function markVisited(levelId: string, slug: string) {
  if (typeof window === "undefined") return;
  try {
    const state = getProgress();
    const visited = new Set(state[levelId] ?? []);
    if (visited.has(slug)) return;
    visited.add(slug);
    state[levelId] = Array.from(visited);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new Event(PROGRESS_EVENT));
  } catch {
    // stockage indisponible (navigation privée, quota) : on ignore silencieusement
  }
}
