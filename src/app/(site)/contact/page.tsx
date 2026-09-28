import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

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
    </section>
  );
}
