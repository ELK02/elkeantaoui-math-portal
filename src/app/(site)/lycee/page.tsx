import type { Metadata } from "next";
import { Clock } from "lucide-react";

export const metadata: Metadata = { title: "Cycle Lycée" };

const MENUS = [
  { label: "Tronc Commun", filieres: ["Science", "Technologie", "Lettres & Sciences Humaines"] },
  {
    label: "1ère Bac",
    filieres: [
      "Sc. Expérimentales",
      "Sc. & Tech Électriques",
      "Sc. & Tech Mécaniques",
      "Sc. Mathématiques",
      "Sc. Économiques & Gestion",
      "Lettres & Sc. Humaines",
    ],
  },
  {
    label: "2ème Bac",
    filieres: [
      "Sc. Physiques",
      "SVT",
      "Sc. & Tech Électriques",
      "Sc. & Tech Mécaniques",
      "Sc. Math A",
      "Sc. Math B",
      "Sc. Économiques & Gestion",
      "Lettres & Sc. Humaines",
    ],
  },
];

export default function LyceePage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <span className="inline-flex items-center gap-2 rounded border border-orange-600/20 bg-orange-100 px-2.5 py-1 font-mono text-xs font-medium uppercase tracking-wide text-orange-700 dark:border-orange-400/20 dark:bg-orange-950/40 dark:text-orange-400">
        <Clock className="h-3.5 w-3.5" />
        Bientôt disponible
      </span>
      <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Cycle Lycée
      </h1>
      <p className="mt-3 max-w-2xl text-foreground-muted">
        La priorité actuelle est de finaliser le Collège. Le contenu du Lycée
        (Tronc Commun, 1ère et 2ème Bac) est en préparation et sera publié
        prochainement pour toutes les filières.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {MENUS.map((menu) => (
          <div key={menu.label} className="rounded-lg border border-border bg-surface p-6 opacity-70">
            <h2 className="font-display text-lg font-semibold text-foreground">{menu.label}</h2>
            <ul className="mt-3 space-y-1.5 text-sm text-foreground-muted">
              {menu.filieres.map((f) => (
                <li key={f}>· {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
