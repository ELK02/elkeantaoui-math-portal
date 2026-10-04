import type { Metadata } from "next";
import Image from "next/image";
import QRCode from "qrcode";
import { FileDown, MessageCircle, NotebookPen } from "lucide-react";
import { FICHES, FICHES_WHATSAPP_CHANNELS } from "@/data/fiches";
import { pageOpenGraph } from "@/lib/page-metadata";

const TITLE = "Fiches manuscrites";
const DESCRIPTION = "Fiches de révision manuscrites, claires et colorées, pour réviser rapidement chaque chapitre.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/fiches" },
  openGraph: pageOpenGraph(TITLE, DESCRIPTION, "/fiches"),
};

export default async function FichesPage() {
  const channels = await Promise.all(
    FICHES_WHATSAPP_CHANNELS.map(async (channel) => ({
      ...channel,
      qrSvg: await QRCode.toString(channel.url, {
        type: "svg",
        margin: 1,
        color: { dark: "#0b1f3a", light: "#ffffff" },
      }),
    }))
  );

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="font-mono text-xs font-medium uppercase tracking-wider text-foreground-muted">✍️ Révision</p>
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Fiches manuscrites
      </h1>
      <p className="mt-3 max-w-2xl text-foreground-muted">
        Révise rapidement avec des fiches claires, colorées et faciles à mémoriser.
      </p>

      {channels.length > 0 && (
        <div className="mt-10">
          <h2 className="font-display text-lg font-semibold text-foreground">
            Reçois les fiches sur WhatsApp
          </h2>
          <p className="mt-1 text-sm text-foreground-muted">
            Scanne le QR code de ton niveau ou touche le bouton pour rejoindre la chaîne.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {channels.map((channel) => (
              <div
                key={channel.level}
                className="flex items-center gap-5 rounded-lg border border-border bg-surface p-5"
              >
                <div
                  role="img"
                  aria-label={`QR code de la chaîne WhatsApp ${channel.level}`}
                  className="h-32 w-32 shrink-0 overflow-hidden rounded-md border border-border bg-white p-1 [&>svg]:h-full [&>svg]:w-full"
                  dangerouslySetInnerHTML={{ __html: channel.qrSvg }}
                />
                <div className="min-w-0">
                  <p className="font-mono text-xs font-medium uppercase tracking-wider text-foreground-muted">
                    Chaîne {channel.level}
                  </p>
                  <p className="mt-1 font-display text-base font-semibold text-foreground">
                    Fiches et ressources {channel.level}
                  </p>
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-md bg-green-600 px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Rejoindre la chaîne
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {FICHES.length === 0 ? (
        <div className="mt-10 flex flex-col items-center gap-3 rounded-lg border border-dashed border-border bg-surface-muted/50 px-6 py-16 text-center">
          <NotebookPen className="h-8 w-8 text-foreground-muted" />
          <p className="font-display text-lg font-semibold text-foreground">
            Suivre les fiches manuscrites sur les chaînes WhatsApp
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {FICHES.map((fiche) => (
            <div key={fiche.slug} className="overflow-hidden rounded-lg border border-border bg-surface">
              <div className="relative aspect-[3/4] w-full bg-surface-muted">
                <Image src={fiche.imageSrc} alt={fiche.chapterTitle} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="font-mono text-[11px] font-medium uppercase tracking-wide text-foreground-muted">
                  {fiche.level}
                </p>
                <h2 className="mt-1 text-sm font-semibold text-foreground">{fiche.chapterTitle}</h2>
                {fiche.pdfSrc && (
                  <a
                    href={fiche.pdfSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-navy-700 hover:underline dark:text-orange-400"
                  >
                    <FileDown className="h-3.5 w-3.5" />
                    Télécharger le PDF
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
