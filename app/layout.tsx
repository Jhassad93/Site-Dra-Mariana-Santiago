import type { Metadata, Viewport } from "next";
import { hostGrotesk, libreCaslon } from "./fonts";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CtaFixo } from "@/components/layout/cta-fixo";

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
      <body>
        <a href="#conteudo" className="pular">
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
        <CtaFixo />
      </body>
    </html>
  );
}
