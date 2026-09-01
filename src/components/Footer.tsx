import Link from "next/link";
import { LEVELS } from "@/data/chapters";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-navy-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Logo size="md" className="[&_span]:text-white" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Cours de mathématiques clairs, illustrés et corrigés pour le Collège,
            par le Prof. Lahbib Elkeantaoui.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Collège
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {LEVELS.map((level) => (
              <li key={level.id}>
                <Link href={`/college/${level.id}`} className="text-slate-400 transition-colors hover:text-orange-400">
                  {level.full}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>Prof. Lahbib Elkeantaoui</li>
            <li>Professeur de Mathématiques</li>
            <li className="pt-2">
              <Link href="/lycee" className="text-slate-400 transition-colors hover:text-orange-400">
                Cycle Lycée (bientôt disponible)
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} Prof. Lahbib Elkeantaoui — Tous droits réservés.</p>
          <p>Mentions légales · Site pédagogique</p>
        </div>
      </div>
    </footer>
  );
}
