import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "À propos",
  description: "Prof. Lahbib Elkeantaoui, professeur de mathématiques pour le Collège et le Lycée au Maroc.",
};

export default function AProposPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="font-mono text-xs font-medium uppercase tracking-wider text-foreground-muted">👨‍🏫 Votre professeur</p>
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Prof. Lahbib Elkeantaoui
      </h1>

      <div className="mt-8">
        <Logo size="lg" />
      </div>

      <div className="mt-6 space-y-4 text-foreground-muted">
        <p>
          Professeur de mathématiques, j&apos;accompagne les élèves du Collège et du Lycée au Maroc à travers des
          cours clairs, des exemples résolus pas à pas et des exercices corrigés en détail.
        </p>
        <p>
          Profdemath.com rassemble mes résumés de cours, mes fiches de révision et mes séries d&apos;exercices,
          pensés pour que chaque élève puisse progresser à son rythme, du Collège jusqu&apos;au Baccalauréat.
        </p>
        <p className="font-mono text-sm text-foreground">
          Prof : ELK.H — <a href="https://www.profdemath.com" className="hover:underline">www.profdemath.com</a>
        </p>
      </div>

      <div className="mt-8">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-navy-400 dark:hover:border-navy-500"
        >
          <Mail className="h-4 w-4" />
          Me contacter
        </Link>
      </div>
    </section>
  );
}
