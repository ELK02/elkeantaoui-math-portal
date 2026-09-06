import Link from "next/link";
import { LEVELS } from "@/data/chapters";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2 md:col-span-1">
          <Logo size="md" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground-muted">
            Cours de mathématiques clairs, illustrés et corrigés pour le Collège
            et le Lycée, par le Prof. Lahbib Elkeantaoui.
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
            Lycée
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                href="/lycee/tronc-commun/sciences"
                className="text-foreground-muted transition-colors hover:text-foreground"
              >
                Tronc Commun · Sciences
              </Link>
            </li>
            <li className="text-foreground-muted/60">
              1ère Bac <span className="font-mono text-[10px] uppercase tracking-wide">(en cours)</span>
            </li>
            <li className="text-foreground-muted/60">
              2ème Bac <span className="font-mono text-[10px] uppercase tracking-wide">(en cours)</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground-muted">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-foreground-muted">
            <li>Prof. Lahbib Elkeantaoui</li>
            <li>Professeur de Mathématiques</li>
            <li>
              <a href="mailto:lahbibelk05@gmail.com" className="text-foreground-muted transition-colors hover:text-foreground">
                lahbibelk05@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 font-mono text-xs text-foreground-muted sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} Prof. Lahbib Elkeantaoui. Tous droits réservés.</p>
          <p>Site pédagogique</p>
        </div>
      </div>
    </footer>
  );
}
