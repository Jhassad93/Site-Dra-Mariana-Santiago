import type { Metadata, Viewport } from "next";
import { hostGrotesk, libreCaslon } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dra. Mariana Santiago · Médica · Av. Paulista",
  description:
    "Consultório da Dra. Mariana Passos Santiago, médica (CRM-SP 227636), na Av. Paulista, São Paulo.",
  // Protótipo: prévia privada, fora dos buscadores até a publicação definitiva.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#1c1813",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${hostGrotesk.variable} ${libreCaslon.variable}`}>
      <body>{children}</body>
    </html>
  );
}
