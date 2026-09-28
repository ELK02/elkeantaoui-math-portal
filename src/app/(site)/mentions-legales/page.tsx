import type { Metadata } from "next";

export const metadata: Metadata = { title: "Mentions légales" };

export default function MentionsLegalesPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">Mentions légales</h1>

      <div className="prose-sm mt-8 space-y-6 text-sm leading-relaxed text-foreground-muted">
        <div>
          <h2 className="font-display text-base font-semibold text-foreground">Éditeur du site</h2>
          <p className="mt-2">
            Le site Profdemath.com est édité par Lahbib Elkeantaoui, professeur de mathématiques, à titre
            individuel et à but pédagogique.
          </p>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold text-foreground">Hébergement</h2>
          <p className="mt-2">
            Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
            (vercel.com).
          </p>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold text-foreground">Propriété intellectuelle</h2>
          <p className="mt-2">
            L&apos;ensemble des cours, fiches, exercices et corrections publiés sur ce site sont la propriété de
            leur auteur. Toute reproduction ou diffusion sans autorisation préalable est interdite, sauf usage
            personnel et non commercial dans un cadre scolaire.
          </p>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold text-foreground">Contact</h2>
          <p className="mt-2">
            Pour toute question relative au site, une page de contact est disponible (bouton « Me contacter »
            présent sur le site).
          </p>
        </div>
      </div>
    </section>
  );
}
