import { cn } from "@/lib/utils";
import { midia, srcSet } from "@/lib/midia";
import { VideoAmbiente } from "./video-ambiente";

/** Imagem responsiva (AVIF + WebP) a partir de um slot de lib/midia.json. Sem o slot, não renderiza nada. */
export function Imagem({
  slot,
  alt = "",
  sizes,
  prioridade = false,
  className,
}: {
  slot: string;
  alt?: string;
  sizes: string;
  prioridade?: boolean;
  className?: string;
}) {
  const e = midia(slot)?.imagem;
  if (!e) return null;
  const maior = e.larguras[e.larguras.length - 1];
  return (
    <picture>
      <source type="image/avif" srcSet={srcSet(slot, e.larguras, "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(slot, e.larguras, "webp")} sizes={sizes} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/midia/${slot}-${maior}.webp`}
        alt={alt}
        width={e.largura}
        height={e.altura}
        loading={prioridade ? "eager" : "lazy"}
        fetchPriority={prioridade ? "high" : undefined}
        decoding="async"
        aria-hidden={alt ? undefined : true}
        className={cn("size-full object-cover", className)}
      />
    </picture>
  );
}

/** Fundo de seção: imagem sempre; vídeo por cima só no desktop, sem movimento reduzido e quando visível. */
export function FundoMidia({ slot, sizes, prioridade = false, className }: { slot: string; sizes: string; prioridade?: boolean; className?: string }) {
  const e = midia(slot);
  if (!e) return null;
  return (
    <div aria-hidden="true" className={cn("absolute inset-0 overflow-hidden", className)}>
      {e.imagem ? <Imagem slot={slot} sizes={sizes} prioridade={prioridade} /> : null}
      {e.video ? <VideoAmbiente mp4={e.video.mp4} webm={e.video.webm} /> : null}
    </div>
  );
}

export const temMidia = (slot: string) => Boolean(midia(slot));
