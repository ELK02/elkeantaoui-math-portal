import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import "katex/dist/katex.min.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.profdemath.com"),
  title: {
    default: "Prof. Lahbib Elkeantaoui · Mathématiques",
    template: "%s | Profdemath.com",
  },
  description:
    "Cours de mathématiques Maroc pour le Collège (1AC, 2AC, 3AC) et le Lycée (Tronc Commun, 1 Bac, 2 Bac) : résumés de cours, exercices corrigés et fiches de révision, par le Prof. Lahbib Elkeantaoui.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Profdemath.com",
    title: "Prof. Lahbib Elkeantaoui · Mathématiques",
    description:
      "Cours de mathématiques Maroc pour le Collège et le Lycée : résumés de cours, exercices corrigés et fiches de révision.",
    images: ["/logo/logo-elk.png"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
