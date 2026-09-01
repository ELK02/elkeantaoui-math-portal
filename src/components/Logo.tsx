import Image from "next/image";
import Link from "next/link";

const SIZES = {
  sm: 40,
  md: 56,
  lg: 84,
} as const;

export function Logo({
  size = "sm",
  withName = true,
  className = "",
}: {
  size?: keyof typeof SIZES;
  withName?: boolean;
  className?: string;
}) {
  const px = SIZES[size];

  return (
    <Link href="/" className={`group flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo/logo-elk.png"
        alt="Logo Professeur Lahbib Elkeantaoui"
        width={px}
        height={px}
        priority
        className="shrink-0 rounded-full"
        style={{ width: px, height: px }}
      />
      {withName && (
        <span className="leading-tight">
          <span className="block font-display text-sm font-bold tracking-tight text-navy-900 dark:text-white sm:text-base">
            Prof. Lahbib Elkeantaoui
          </span>
          <span className="block text-[11px] font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400">
            Mathématiques
          </span>
        </span>
      )}
    </Link>
  );
}
