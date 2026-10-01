import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SearchModalProvider } from "./SearchModal";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <SearchModalProvider>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </SearchModalProvider>
  );
}
