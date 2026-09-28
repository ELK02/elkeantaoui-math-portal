"use client";

import type { ReactNode } from "react";
import { useSearchModal } from "./SearchModal";

export function SearchTriggerButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { open } = useSearchModal();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
