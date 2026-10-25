import type { Metadata, Viewport } from "next";
import { hostGrotesk, libreCaslon } from "./fonts";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CtaFixo } from "@/components/layout/cta-fixo";
import { BannerCookies } from "@/components/consentimento/banner-cookies";
import { Analytics } from "@/components/consentimento/analytics";
import { JsonLd } from "@/components/seo/json-ld";
import { entidade, imagemOg, indexar, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dra. Helena Duarte | Médica na Av. Paulista",
  description:
    "Consultório da Dra. Helena Duarte, médica, na Av. Paulista, São Paulo.",
  openGraph: { type: "website", locale: "pt_BR", siteName: "Dra. Helena Duarte", images: [imagemOg] },
  // Prévia: fora dos buscadores. Só a publicação definitiva (NEXT_PUBLIC_INDEXAR=1) libera a indexação.
  robots: indexar ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#1c1813",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${hostGrotesk.variable} ${libreCaslon.variable}`}>
      <body>
        <JsonLd dados={entidade} />
        <a href="#conteudo" className="pular">
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
        <CtaFixo />
        <BannerCookies />
        <Analytics />
      </body>
    </html>
  );
}
