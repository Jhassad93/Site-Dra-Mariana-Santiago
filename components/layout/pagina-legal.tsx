import { ReguaOrnamento } from "@/components/marca/regua";

// Moldura das páginas legais: leitura em coluna estreita, títulos com âncora.
export function PaginaLegal({ titulo, atualizacao, children }: { titulo: string; atualizacao: string; children: React.ReactNode }) {
  return (
    <article className="mx-auto max-w-[1200px] px-4 pb-24 pt-32 sm:px-6 lg:pt-44">
      <div className="mx-auto max-w-[62ch]">
        <h1 className="text-[clamp(2.5rem,6vw,4.0625rem)]">{titulo}</h1>
        <ReguaOrnamento className="mt-8" />
        <p className="mt-6 text-sm text-muted-foreground">Última atualização: {atualizacao}</p>
        <div className="texto-legal mt-10">{children}</div>
      </div>
    </article>
  );
}
