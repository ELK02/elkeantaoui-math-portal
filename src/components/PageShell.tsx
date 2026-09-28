import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SearchModalProvider } from "./SearchModal";
import { WhatsAppFloatingButton } from "./WhatsAppFloatingButton";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <SearchModalProvider>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloatingButton />
    </SearchModalProvider>
  );
}
