const STORAGE_KEY = "profdemath:contact-submissions";
const WINDOW_MS = 60 * 60 * 1000; // 1 heure
export const MAX_SUBMISSIONS_PER_WINDOW = 4;

function readTimestamps(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as number[];
    const cutoff = Date.now() - WINDOW_MS;
    return parsed.filter((ts) => ts > cutoff);
  } catch {
    return [];
  }
}

/** Nombre d'envois encore autorisés dans la fenêtre d'une heure glissante. */
export function getRemainingSubmissions(): number {
  return Math.max(0, MAX_SUBMISSIONS_PER_WINDOW - readTimestamps().length);
}

export function canSubmit(): boolean {
  return readTimestamps().length < MAX_SUBMISSIONS_PER_WINDOW;
}

export function recordSubmission(): void {
  if (typeof window === "undefined") return;
  try {
    const timestamps = readTimestamps();
    timestamps.push(Date.now());
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(timestamps));
  } catch {
    // stockage indisponible : la limite redevient simplement inactive pour cette session
  }
}
