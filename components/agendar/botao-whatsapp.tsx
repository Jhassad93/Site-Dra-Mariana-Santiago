"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { telefoneVisivel, whatsappHref, whatsappWebHref } from "@/lib/site";

/**
 * Botão principal de /agendar (APP_FLOW). Abre o WhatsApp em nova aba e leva esta aba para
 * /obrigado?origem=whatsapp. Se o navegador bloquear a nova aba, mostra o plano B: número, copiar e WhatsApp Web.
 */
export function BotaoWhatsapp() {
  const router = useRouter();
  const [estado, setEstado] = useState<"pronto" | "abrindo" | "falhou">("pronto");
  const [copiado, setCopiado] = useState(false);

  const abrir = () => {
    setEstado("abrindo");
    const aba = window.open(whatsappHref, "_blank");
    if (!aba) {
      setEstado("falhou");
      return;
    }
    aba.opener = null;
    window.setTimeout(() => router.push("/obrigado/?origem=whatsapp"), 1200);
  };

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(telefoneVisivel);
      setCopiado(true);
    } catch {
      setCopiado(false);
    }
  };

  return (
    <div className="grid gap-4" data-cta>
      <button
        type="button"
        onClick={abrir}
        data-evento="clique_whatsapp"
        data-origem="agendar"
        disabled={estado === "abrindo"}
        className="botao inline-flex min-h-12 max-w-full items-center justify-center justify-self-start rounded-full bg-tinta px-6 py-2 text-center text-[1rem] font-medium text-gesso disabled:opacity-80"
      >
        {estado === "abrindo" ? "Abrindo o WhatsApp…" : "Abrir o WhatsApp"}
      </button>
      <p role="status" aria-live="polite" className="contents">
        {estado === "falhou" ? (
          <span className="grid max-w-[52ch] gap-3 rounded-[var(--radius-compact)] bg-areia/40 p-5">
            <span>
              Não conseguimos abrir o WhatsApp por aqui. Mande uma mensagem para <strong className="font-medium">{telefoneVisivel}</strong>.
            </span>
            <span className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <button type="button" onClick={copiar} className="inline-flex min-h-11 items-center text-bronze underline decoration-1 underline-offset-4">
                {copiado ? "Número copiado" : "Copiar número"}
              </button>
              <a href={whatsappWebHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-bronze underline decoration-1 underline-offset-4">
                Abrir o WhatsApp Web
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </span>
          </span>
        ) : null}
      </p>
    </div>
  );
}
