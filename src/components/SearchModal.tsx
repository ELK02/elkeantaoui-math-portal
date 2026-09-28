"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Search, X, CornerDownLeft } from "lucide-react";
import { searchChapters, type SearchItem } from "@/lib/search-index";

interface SearchContextValue {
  open: () => void;
}

const SearchContext = createContext<SearchContextValue | null>(null);

export function useSearchModal() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearchModal must be used within SearchModalProvider");
  return ctx;
}

export function SearchModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = useMemo(() => searchChapters(query), [query]);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const id = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [isOpen]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const isShortcut = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k";
      if (isShortcut) {
        e.preventDefault();
        setIsOpen((v) => !v);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function goTo(item: SearchItem) {
    close();
    router.push(item.href);
  }

  function handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Escape") {
      close();
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[activeIndex]) {
      goTo(results[activeIndex]);
    }
  }

  return (
    <SearchContext.Provider value={{ open }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-start justify-center bg-navy-950/60 px-4 pt-20 backdrop-blur-sm sm:pt-28"
          onClick={close}
        >
          <div
            className="w-full max-w-xl rounded-xl border border-border bg-surface shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-border px-4 py-3.5">
              <Search className="h-4.5 w-4.5 shrink-0 text-foreground-muted" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIndex(0);
                }}
                onKeyDown={handleInputKeyDown}
                placeholder="Rechercher un cours, un exercice ou un chapitre..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground-muted focus:outline-none"
              />
              <button
                type="button"
                onClick={close}
                aria-label="Fermer la recherche"
                className="rounded-md p-1 text-foreground-muted hover:bg-surface-muted hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {query.trim() === "" && (
                <p className="px-3 py-6 text-center text-sm text-foreground-muted">
                  Essayez « nombres relatifs », « Thalès », « Pythagore », « fonctions »…
                </p>
              )}

              {query.trim() !== "" && results.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-foreground-muted">
                  Aucun résultat pour « {query} ».
                </p>
              )}

              {results.map((item, i) => (
                <button
                  key={item.href}
                  type="button"
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => goTo(item)}
                  className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                    i === activeIndex ? "bg-navy-900/[0.06] dark:bg-white/[0.08]" : ""
                  }`}
                >
                  <span className="flex items-center gap-2.5 truncate">
                    <span className="shrink-0 rounded border border-border px-1.5 py-0.5 font-mono text-[10px] font-medium text-foreground-muted">
                      {item.levelLabel}
                    </span>
                    <span className="truncate font-medium text-foreground">{item.title}</span>
                  </span>
                  {i === activeIndex && <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-foreground-muted" />}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-border px-4 py-2 font-mono text-[11px] text-foreground-muted">
              <span>↑↓ naviguer · ↵ ouvrir · Échap fermer</span>
              <span className="hidden sm:inline">Ctrl+K</span>
            </div>
          </div>
        </div>
      )}
    </SearchContext.Provider>
  );
}
