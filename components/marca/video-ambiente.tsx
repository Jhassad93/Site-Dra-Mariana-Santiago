"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Vídeo de ambiente (DESIGN.md, Movimento): mudo, em loop, preload="none", toca só quando visível e pausa fora da tela.
 * Não é montado no celular (economia de dados: fica a imagem de capa) nem com prefers-reduced-motion.
 */
export function VideoAmbiente({ mp4, webm }: { mp4: string; webm: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ativo, setAtivo] = useState(false);
  const [tocando, setTocando] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    const atualizar = () => setAtivo(mq.matches);
    atualizar();
    mq.addEventListener("change", atualizar);
    return () => mq.removeEventListener("change", atualizar);
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!ativo || !v) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.15 },
    );
    obs.observe(v);
    return () => obs.disconnect();
  }, [ativo]);

  if (!ativo) return null;
  return (
    <video
      ref={ref}
      className="video-ambiente absolute inset-0 size-full object-cover"
      data-tocando={tocando ? "" : undefined}
      onPlaying={() => setTocando(true)}
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
      tabIndex={-1}
    >
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
    </video>
  );
}
