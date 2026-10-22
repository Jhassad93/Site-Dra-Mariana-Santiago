import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";

// Fontes servidas pelo próprio site (SCHEMA: nada de CDN do Google antes do consentimento).
export const geist = GeistSans; // variável --font-geist-sans (pesos 100–900)

// "A voz da Dra." — usada só no nome, assinatura e frases dela (DESIGN.md).
export const instrumentSerif = localFont({
  src: [
    { path: "./fonts/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});
