import type { MetadataRoute } from "next";
import { procedimentos } from "@/lib/procedimentos";
import { siteUrl } from "@/lib/seo";

// Fora do mapa: /obrigado (noindex), /componentes (interna, sai antes da prévia da lead) e 404.
export const dynamic = "force-static";

const atualizado = new Date("2026-10-22");

export default function sitemap(): MetadataRoute.Sitemap {
  const caminhos = [
    "/",
    "/como-funciona/",
    "/procedimentos/",
    ...procedimentos.map((p) => `/procedimentos/${p.slug}/`),
    "/guias/pele-na-menopausa/",
    "/sobre/",
    "/perguntas-frequentes/",
    "/agendar/",
    "/privacidade/",
    "/termos/",
  ];
  return caminhos.map((c) => ({ url: `${siteUrl}${c}`, lastModified: atualizado }));
}
