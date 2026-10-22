"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { EVENTO_ABRIR, lerEscolha, salvarEscolha, type Escolha } from "@/lib/consentimento";

/**
 * Banner de cookies (R15; Guia de cookies da ANPD): aceitar e recusar no MESMO nível, nada não essencial antes do aceite.
 * Reabre pelo botão "Gerenciar cookies" (evento "preferencias-cookies").
 */
export function BannerCookies() {
  const [aberto, setAberto] = useState(false);
  const [atual, setAtual] = useState<Escolha | null>(null);
  const caixa = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const e = lerEscolha();
    setAtual(e);
    if (!e) setAberto(true);
    const abrir = (ev: Event) => {
      ev.preventDefault(); // avisa o botão que o banner existe e tratou o pedido
      setAtual(lerEscolha());
      setAberto(true);
      window.setTimeout(() => caixa.current?.focus(), 0);
    };
    window.addEventListener(EVENTO_ABRIR, abrir);
    return () => window.removeEventListener(EVENTO_ABRIR, abrir);
  }, []);

  const escolher = (e: Escolha) => {
    salvarEscolha(e);
    setAtual(e);
    setAberto(false);
  };

  if (!aberto) return null;
  return (
    <div
      ref={caixa}
      role="region"
      aria-labelledby="cookies-titulo"
      tabIndex={-1}
      className="banner-cookies fixed inset-x-3 bottom-3 z-50 mx-auto max-w-[520px] rounded-[var(--radius-header)] border border-border bg-gesso p-4 text-tinta outline-none sm:inset-x-6 sm:bottom-6 md:p-6"
    >
      <h2 id="cookies-titulo" className="text-base font-medium tracking-normal md:text-lg md:font-normal md:tracking-[-0.01em]">
        Cookies de análise
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Só com o seu aceite: eles contam visitas sem identificar você nem registrar o que você leu. Recusar não muda nada no
        site.{" "}
        <Link href="/privacidade/#cookies" className="text-bronze underline decoration-1 underline-offset-4">
          Saiba mais
        </Link>
        .
      </p>
      {atual ? <p className="mt-2 text-sm text-muted-foreground">Sua escolha atual: {atual === "aceito" ? "aceitos" : "recusados"}.</p> : null}
      <div className="mt-3 grid grid-cols-2 gap-3 md:mt-4">
        <button type="button" onClick={() => escolher("recusado")} className="botao h-11 rounded-full border border-tinta/25 text-[0.9375rem] font-medium">
          Recusar
        </button>
        <button type="button" onClick={() => escolher("aceito")} className="botao h-11 rounded-full border border-tinta/25 text-[0.9375rem] font-medium">
          Aceitar
        </button>
      </div>
    </div>
  );
}
