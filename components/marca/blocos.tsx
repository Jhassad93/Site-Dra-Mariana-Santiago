import { cn } from "@/lib/utils";
import { identificacao } from "@/lib/site";

/**
 * Bloco de identificação R1 (harness: Res. CFM 2.336/2023, arts. 4º e 6º; CEM, art. 117).
 * Nome e registro na MESMA fonte, tamanho e cor, sem negrito e sem destaque entre eles. Não alterar
 * o estilo de uma linha só.
 */
export function IdentificacaoR1({ sobre = "claro", className }: { sobre?: "claro" | "escuro"; className?: string }) {
  return (
    <p className={cn("text-sm font-normal", sobre === "escuro" ? "text-gesso" : "text-tinta", className)}>
      {identificacao.nome}
      <br />
      {identificacao.registro}
    </p>
  );
}

/**
 * Voz da Dra.: frase dela em Libre Caslon itálico (33px no desktop, 26px no celular), com a identificação R1.
 * É o único uso da serifada. Textos saem como RASCUNHO até a Dra. aprovar.
 */
export function VozDaDra({
  children,
  sobre = "claro",
  comIdentificacao = true,
  className,
}: {
  children: React.ReactNode;
  sobre?: "claro" | "escuro";
  comIdentificacao?: boolean;
  className?: string;
}) {
  return (
    <figure className={cn("grid gap-6", className)}>
      <blockquote
        className={cn(
          "max-w-[30ch] font-voz text-[1.625rem] italic leading-[1.35] md:text-[2.0625rem]",
          sobre === "escuro" ? "text-areia" : "text-tinta",
        )}
      >
        {children}
      </blockquote>
      {comIdentificacao ? (
        <figcaption>
          <IdentificacaoR1 sobre={sobre} />
        </figcaption>
      ) : null}
    </figure>
  );
}

/** Acordeão do FAQ com <details> nativo: o texto das respostas fica no HTML (bom para busca e para IA). */
export function Acordeao({
  itens,
  className,
}: {
  itens: { pergunta: string; resposta: React.ReactNode }[];
  className?: string;
}) {
  return (
    <div className={cn("acordeao border-t border-border", className)}>
      {itens.map((item) => (
        <details key={item.pergunta} className="border-b border-border">
          <summary className="flex min-h-16 items-center justify-between gap-6 py-4 text-lg">
            <span className="min-w-0 [overflow-wrap:anywhere]">{item.pergunta}</span>
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" className="shrink-0" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
              <path d="M5 12h14" />
              <path className="sinal-vertical" d="M12 5v14" />
            </svg>
          </summary>
          <div className="acordeao-resposta max-w-[68ch] pb-6 text-muted-foreground">{item.resposta}</div>
        </details>
      ))}
    </div>
  );
}
