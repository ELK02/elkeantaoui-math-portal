import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/page-metadata";

const TITLE = "Politique de confidentialité";
const DESCRIPTION = "Politique de confidentialité de Profdemath.com : données collectées, cookies et stockage local.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/confidentialite" },
  openGraph: pageOpenGraph(TITLE, DESCRIPTION, "/confidentialite"),
};

export default function ConfidentialitePage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
        Politique de confidentialité
      </h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground-muted">
        <div>
          <h2 className="font-display text-base font-semibold text-foreground">Données collectées</h2>
          <p className="mt-2">
            Profdemath.com ne demande pas de compte utilisateur et ne collecte aucune information personnelle
            (nom, email, etc.) pour la navigation ou la lecture des cours.
          </p>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold text-foreground">Statistiques de fréquentation</h2>
          <p className="mt-2">
            Le site utilise Vercel Analytics pour mesurer une fréquentation globale et anonyme (pages vues,
            performance), sans cookie de suivi publicitaire ni identifiant individuel.
          </p>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold text-foreground">Stockage local (navigateur)</h2>
          <p className="mt-2">
            Le suivi de progression (« Ma progression ») et le thème clair/sombre choisi sont enregistrés
            uniquement dans le navigateur de l&apos;élève (stockage local), jamais transmis à un serveur.
          </p>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold text-foreground">Contact</h2>
          <p className="mt-2">
            Pour toute question sur cette politique, utilisez le bouton « Me contacter » présent sur le site.
          </p>
        </div>
      </div>
    </section>
  );
}
