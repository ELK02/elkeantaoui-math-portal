import type { ReactNode } from "react";

const VARIANTS = {
  info: "bg-surface-muted border-border text-foreground",
  success: "bg-green-100/60 border-green-500/20 text-foreground",
  warning: "bg-orange-100/60 border-orange-500/30 text-foreground",
  danger: "bg-rose-100/60 border-rose-500/30 text-foreground",
} as const;

export function Callout({
  variant = "info",
  title,
  children,
}: {
  variant?: keyof typeof VARIANTS;
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className={`rounded-xl border p-5 ${VARIANTS[variant]}`}>
      {title ? <p className="mb-2 text-xs font-bold uppercase tracking-wide">{title}</p> : null}
      <div className="text-sm">{children}</div>
    </div>
  );
}
