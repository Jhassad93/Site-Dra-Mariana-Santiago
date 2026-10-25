import { migalhas } from "@/lib/seo";

// Portfólio: dados estruturados desligados (consultório fictício não deve virar "fato" para buscadores e IAs).
// Para religar num site real, troque para true.
const DADOS_ESTRUTURADOS = false;

/** Dados estruturados no HTML do servidor. `<` escapado para não fechar o script. */
export function JsonLd({ dados }: { dados: object }) {
  if (!DADOS_ESTRUTURADOS) return null;
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dados).replace(/</g, "\\u003c") }} />
  );
}

export function Migalhas({ itens }: { itens: [string, string][] }) {
  return <JsonLd dados={migalhas(itens)} />;
}
