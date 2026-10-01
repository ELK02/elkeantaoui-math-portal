import { MessageCircle } from "lucide-react";
import { WHATSAPP_CHANNELS, WHATSAPP_LEVEL_LABELS, type WhatsappLevelId } from "@/data/whatsapp";

export function WhatsAppLevelBanner({ levelId }: { levelId: WhatsappLevelId }) {
  const link = WHATSAPP_CHANNELS[levelId];
  if (!link) return null;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
    >
      <MessageCircle className="h-4 w-4" />
      Rejoindre le canal WhatsApp {WHATSAPP_LEVEL_LABELS[levelId]}
    </a>
  );
}
