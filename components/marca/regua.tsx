import { cn } from "@/lib/utils";

/**
 * Régua do tempo (docs/DESIGN.md): linha de 1px Ouro, marcadores quadrados de 8px e rótulos em 13px.
 * É uma sequência real no tempo, por isso é uma lista ordenada. No celular fica vertical.
 * `animada`: desenho da esquerda para a direita em 900ms, só na entrada da home (o único momento orquestrado).
 */
export type Marco = { quando: string; oQue?: string };

export function ReguaDoTempo({
  marcos,
  sobre = "claro",
  animada = false,
  rotulo,
  className,
}: {
  marcos: Marco[];
  sobre?: "claro" | "escuro";
  animada?: boolean;
  /** Nome acessível da lista, por exemplo "Linha do tempo da toxina botulínica". */
  rotulo: string;
  className?: string;
}) {
  const n = marcos.length;
  return (
    <ol
      aria-label={rotulo}
      data-animada={animada ? "" : undefined}
      style={{ "--marcos": n } as React.CSSProperties}
      className={cn("regua", sobre === "escuro" ? "regua-escura" : "regua-clara", className)}
    >
      {marcos.map((m, i) => (
        <li key={m.quando} className="regua-marco" style={{ "--i": i } as React.CSSProperties}>
          <span className="regua-ponto" aria-hidden="true" />
          <span className="regua-quando">{m.quando}</span>
          {m.oQue ? <span className="regua-oque">{m.oQue}</span> : null}
        </li>
      ))}
    </ol>
  );
}

/** Ornamento curto (marcador + linha) usado sob títulos. Decorativo. */
export function ReguaOrnamento({ animada = false, className }: { animada?: boolean; className?: string }) {
  return (
    <div aria-hidden="true" data-animada={animada ? "" : undefined} className={cn("regua-ornamento flex max-w-[640px] items-center", className)}>
      <span className="size-2 shrink-0 bg-ouro" />
      <span className="regua-ornamento-linha h-px flex-1 bg-ouro" />
    </div>
  );
}
