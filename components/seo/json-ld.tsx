import { migalhas } from "@/lib/seo";

/** Dados estruturados no HTML do servidor. `<` escapado para não fechar o script. */
export function JsonLd({ dados }: { dados: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dados).replace(/</g, "\\u003c") }} />
  );
}

export function Migalhas({ itens }: { itens: [string, string][] }) {
  return <JsonLd dados={migalhas(itens)} />;
}
