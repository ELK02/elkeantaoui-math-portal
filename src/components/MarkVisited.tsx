"use client";

import { useEffect } from "react";
import { markVisited } from "@/lib/progress";

/** Composant invisible : enregistre la visite d'un chapitre côté client (localStorage). */
export function MarkVisited({ levelId, slug }: { levelId: string; slug: string }) {
  useEffect(() => {
    markVisited(levelId, slug);
  }, [levelId, slug]);
  return null;
}
