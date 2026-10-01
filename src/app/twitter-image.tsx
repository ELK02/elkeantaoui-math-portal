import { ImageResponse } from "next/og";
import { OG_IMAGE_SIZE, SiteOgImage } from "@/lib/og-image";

export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";
export const alt = "Prof. Lahbib Elkeantaoui · Mathématiques — Profdemath.com";

export default function TwitterImage() {
  return new ImageResponse(<SiteOgImage />, { ...size });
}
