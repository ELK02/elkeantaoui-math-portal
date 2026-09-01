import Link from "next/link";
import { LEVELS } from "@/data/chapters";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Logo size="md" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground-muted">
            Cours de mathématiques clairs, illustrés et corrigés pour le Collège,
            par le Prof. Lahbib Elkeantaoui.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground-muted">
            Collège
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {LEVELS.map((level) => (
              <li key={level.id}>
                <Link href={`/college/${level.id}`} className="text-foreground-muted transition-colors hover:text-foreground">
                  {level.full}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground-muted">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-foreground-muted">
            <li>Prof. Lahbib Elkeantaoui</li>
            <li>Professeur de Mathématiques</li>
            <li className="pt-2">
              <Link href="/lycee" className="text-foreground-muted transition-colors hover:text-foreground">
                Cycle Lycée (bientôt disponible)
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 font-mono text-xs text-foreground-muted sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} Prof. Lahbib Elkeantaoui — Tous droits réservés.</p>
          <p>Site pédagogique</p>
        </div>
      </div>
    </footer>
  );
}
