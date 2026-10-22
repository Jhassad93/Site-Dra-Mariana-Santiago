import manifesto from "./midia.json";

// Mídia comprimida por scripts/midia.mjs. Slot ausente = o componente usa o desenho em CSS (placeholder).
type Entrada = {
  imagem?: { larguras: number[]; largura: number; altura: number };
  video?: { mp4: string; webm: string };
};
const m = manifesto as Record<string, Entrada>;

export const midia = (slot: string): Entrada | undefined => m[slot];

export const srcSet = (slot: string, larguras: number[], ext: "avif" | "webp") =>
  larguras.map((w) => `/midia/${slot}-${w}.${ext} ${w}w`).join(", ");
