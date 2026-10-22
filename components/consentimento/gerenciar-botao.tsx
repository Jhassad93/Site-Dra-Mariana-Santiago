"use client";

import { EVENTO_ABRIR } from "@/lib/consentimento";

/** Botão "Gerenciar cookies" para fundo claro (página de privacidade). */
export function GerenciarCookiesBotao() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(EVENTO_ABRIR, { cancelable: true }))}
      className="botao inline-flex h-11 items-center rounded-full border border-tinta/25 px-5 text-[0.9375rem] font-medium"
    >
      Gerenciar cookies
    </button>
  );
}
