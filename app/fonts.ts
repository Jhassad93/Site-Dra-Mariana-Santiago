import localFont from "next/font/local";

// Par A "Carta" (DESIGN.md, 22/10/2026). Fontes SIL OFL servidas pelo próprio site
// (SCHEMA: nada de CDN do Google antes do consentimento).

// Informação: títulos, corpo, botões, dados da régua.
export const hostGrotesk = localFont({
  src: [
    { path: "./fonts/host-grotesk-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "./fonts/host-grotesk-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/host-grotesk-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-host-grotesk",
  display: "swap",
});

// A voz da Dra.: nome, assinatura e frases dela. Nunca como título grande do hero.
export const libreCaslon = localFont({
  src: [
    { path: "./fonts/libre-caslon-text-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/libre-caslon-text-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-libre-caslon",
  display: "swap",
});
