import { MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/social";

export function WhatsAppFloatingButton() {
  if (!SOCIAL_LINKS.whatsapp) return null;

  return (
    <a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Rejoindre le canal WhatsApp Profdemath"
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition-transform hover:scale-105 hover:bg-green-700"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
