import type { Metadata } from "next";
import { endereco, identificacao, redes, telefoneVisivel } from "@/lib/site";

// Endereço do site. Não é segredo. BRIEF: dramarianasantiago.com.br (PENDÊNCIA: titularidade no Registro.br).
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://dramarianasantiago.com.br").replace(/\/$/, "");

// Prévia: fora dos buscadores. Só a publicação definitiva, depois do aceite, liga NEXT_PUBLIC_INDEXAR=1.
export const indexar = process.env.NEXT_PUBLIC_INDEXAR === "1";

export const imagemOg = { url: "/og.png", width: 1200, height: 630, alt: `${identificacao.nome}, ${identificacao.registro}` };

/** Title, description, canonical e Open Graph de uma página. `caminho` com barra final ("/sobre/"). */
export function metadados({ titulo, descricao, caminho }: { titulo: string; descricao: string; caminho: string }): Metadata {
  return {
    title: titulo,
    description: descricao,
    alternates: { canonical: caminho },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: identificacao.marca,
      url: caminho,
      title: titulo,
      description: descricao,
      images: [imagemOg],
    },
    twitter: { card: "summary_large_image", title: titulo, description: descricao, images: [imagemOg.url] },
  };
}

const telefoneE164 = "+55-11-3192-2635"; // mesmo número de telefoneVisivel
void telefoneVisivel;

/**
 * Entidade do consultório (JSON-LD), igual em todas as páginas e ao Perfil da Empresa no Google.
 * R2: sem `medicalSpecialty` (a Dra. não tem RQE). Sem preço (R8). Sem avaliações (R7).
 */
export const entidade = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": `${siteUrl}/#consultorio`,
      name: identificacao.nome,
      description:
        "Consultório médico de procedimentos estéticos faciais na Av. Paulista, com consulta de avaliação e plano antes de qualquer procedimento.",
      url: `${siteUrl}/`,
      image: `${siteUrl}/og.png`,
      telephone: telefoneE164,
      identifier: { "@type": "PropertyValue", propertyID: "CRM-SP", value: "227636" },
      address: {
        "@type": "PostalAddress",
        streetAddress: endereco.linha1,
        addressLocality: "São Paulo",
        addressRegion: "SP",
        postalCode: "01310-100",
        addressCountry: "BR",
      },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Friday"], opens: "13:00", closes: "21:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "14:00" },
      ],
      areaServed: { "@type": "City", name: "São Paulo" },
      sameAs: redes.map((r) => r.href),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#site`,
      url: `${siteUrl}/`,
      name: identificacao.marca,
      inLanguage: "pt-BR",
      publisher: { "@id": `${siteUrl}/#consultorio` },
    },
  ],
};

/** BreadcrumbList a partir de pares [nome, caminho]. O Início entra sozinho. */
export function migalhas(itens: [string, string][]) {
  const todos: [string, string][] = [["Início", "/"], ...itens];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: todos.map(([nome, caminho], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: nome,
      item: `${siteUrl}${caminho}`,
    })),
  };
}
