import Link from "@/components/AppLink";
import { Mail } from "lucide-react";
import { Logo } from "./Logo";
import { SOCIAL_LINKS } from "@/data/social";

const LINKS = [
  { href: "/#niveaux", label: "Cours" },
  { href: "/#ressources", label: "Exercices" },
  { href: "/fiches", label: "Fiches" },
  { href: "/examens", label: "Examens" },
  { href: "/a-propos", label: "À propos" },
] as const;

const SOCIAL_ROWS = [
  { key: "instagram", label: "Instagram" },
  { key: "youtube", label: "YouTube" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <Logo size="sm" withName={false} />
          <p className="max-w-[14rem] text-xs leading-snug text-foreground-muted">
            Mathématiques • Collège &amp; Lycée
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground-muted">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
          {SOCIAL_ROWS.filter((row) => SOCIAL_LINKS[row.key]).map((row) => (
            <a
              key={row.key}
              href={SOCIAL_LINKS[row.key] as string}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {row.label}
            </a>
          ))}
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-navy-400 dark:hover:border-navy-500"
        >
          <Mail className="h-3.5 w-3.5" />
          Me contacter
        </Link>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-1 px-4 py-3 font-mono text-xs text-foreground-muted sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} Profdemath.com — Prof. Lahbib Elkeantaoui</p>
          <p>Site pédagogique</p>
        </div>
      </div>
    </footer>
  );
}
