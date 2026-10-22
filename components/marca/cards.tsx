import Link from "next/link";
import { cn } from "@/lib/utils";
import { PilulaVidro } from "./botao";

/**
 * Card grande de procedimento (docs/DESIGN.md): retrato 3:4 (4:5 no celular), raio 20px, foto em tela cheia,
 * faixa de dados no topo, legenda de indicação embaixo e pílula de vidro. Sem sombra.
 * R4: o dado de tempo sempre vem com "varia de pessoa para pessoa" (ou equivalente) no rótulo.
 * Até a Etapa 10, a foto é um gradiente de matéria (placeholder sem pessoas).
 */
export function CardProcedimento({
  href,
  nome,
  indicacao,
  dado,
  foto,
  className,
}: {
  href: string;
  nome: string;
  indicacao: string;
  dado: { valor: string; rotulo: string };
  foto?: { src: string; alt: string };
  className?: string;
}) {
  return (
    <article
      className={cn(
        "card-procedimento tema-escuro relative isolate flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[var(--radius-card)] p-5 text-gesso md:aspect-[3/4]",
        className,
      )}
    >
      <div className="card-foto absolute inset-0 -z-10" aria-hidden={foto ? undefined : true}>
        {foto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={foto.src} alt={foto.alt} className="size-full object-cover" loading="lazy" />
        ) : (
          <span className="block size-full bg-[radial-gradient(120%_90%_at_80%_15%,#e3c89a_0%,#b8956a_38%,#5b4630_78%,#2a2219_100%)]" />
        )}
      </div>
      {/* Véus de Tinta para garantir contraste do texto sobre qualquer foto */}
      <span aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-3/5 bg-gradient-to-b from-tinta/80 via-tinta/60 via-40% to-transparent" />
      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-3/5 bg-gradient-to-t from-tinta/85 via-tinta/55 to-transparent" />

      <div className="flex flex-wrap items-end gap-x-4 gap-y-1.5 border-b border-areia/60 pb-3">
        <span className="shrink-0 whitespace-nowrap text-[2.0625rem] font-light leading-none tracking-[-0.01em]">{dado.valor}</span>
        <span className="min-w-[17ch] flex-1 text-xs leading-[1.3] text-gesso">{dado.rotulo}</span>
      </div>

      <div className="grid gap-4">
        <div>
          <h3 className="text-xl font-normal leading-[1.15] tracking-[-0.015em]">{nome}</h3>
          <p className="mt-1.5 max-w-[30ch] text-sm text-gesso">{indicacao}</p>
        </div>
        <Link href={href} className="justify-self-start after:absolute after:inset-0 after:content-['']">
          <PilulaVidro>Entender o procedimento</PilulaVidro>
          <span className="sr-only">: {nome}</span>
        </Link>
      </div>
    </article>
  );
}

/** Card compacto: fundo Areia a 40% sobre Gesso, raio 14px, 72px de altura, nome + seta desenhada. */
export function CardCompacto({ href, nome, className }: { href: string; nome: string; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "card-compacto flex min-h-[72px] items-center justify-between gap-4 rounded-[var(--radius-compact)] bg-areia/40 px-5 text-lg text-tinta",
        className,
      )}
    >
      <span>{nome}</span>
      <svg className="seta shrink-0" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </Link>
  );
}
