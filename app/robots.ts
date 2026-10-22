import type { MetadataRoute } from "next";
import { indexar, siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

// Política aprovada em 22/10/2026 (tabela da Etapa 12, fontes oficiais consultadas na mesma data):
// libera busca e visitas a pedido do usuário; bloqueia treino de modelos.
// Revisar os nomes antes de cada publicação (prompt "Verificar robôs de IA" em docs/PROMPTS.md).
const treino = [
  "GPTBot", // OpenAI
  "ClaudeBot", // Anthropic
  "Google-Extended", // Google: token de controle; não afeta o Google Busca nem a Visão geral criada por IA
  "Applebot-Extended", // Apple: token de controle; não afeta a busca da Apple
  "meta-externalagent", // Meta
];

export default function robots(): MetadataRoute.Robots {
  // Prévia: fechada para todos os robôs. Só a publicação definitiva (NEXT_PUBLIC_INDEXAR=1) aplica a política.
  if (!indexar) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: [
      ...treino.map((userAgent) => ({ userAgent, disallow: "/" })),
      { userAgent: "*", allow: "/", disallow: ["/obrigado/", "/componentes/"] },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
