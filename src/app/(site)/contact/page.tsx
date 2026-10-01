import type { Metadata } from "next";
import { AtSign } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SOCIAL_LINKS } from "@/data/social";

export const metadata: Metadata = {
  title: "Contact",
  description: "Une question sur un cours ou un exercice ? Contactez le Prof. Lahbib Elkeantaoui.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="font-mono text-xs font-medium uppercase tracking-wider text-foreground-muted">✉️ Contact</p>
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Me contacter
      </h1>
      <p className="mt-3 text-foreground-muted">
        Une question sur un cours, une erreur à signaler, une suggestion ? Écrivez-moi via ce formulaire.
      </p>

      <div className="mt-8">
        <ContactForm />
      </div>

      {SOCIAL_LINKS.instagram && (
        <div className="mt-6 border-t border-border pt-6">
          <p className="text-sm text-foreground-muted">Vous pouvez aussi me suivre sur Instagram :</p>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-navy-600 dark:hover:text-orange-400"
          >
            <AtSign className="h-4 w-4" />
            profdemathcom
          </a>
        </div>
      )}
    </section>
  );
}
