"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { EVENTO_MUDOU, lerEscolha } from "@/lib/consentimento";
import { enviarEvento, origemDoClique, prepararConsentimento } from "@/lib/eventos";

/** GA4 só depois do aceite (R13, R15). Sem ID configurado, não faz nada. */
export function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA4_ID;
  const pathname = usePathname();
  const [aceito, setAceito] = useState(false);

  useEffect(() => {
    if (lerEscolha() === "aceito") {
      prepararConsentimento();
      setAceito(true);
    }
    const mudou = (e: Event) => {
      const escolha = (e as CustomEvent).detail;
      if (escolha === "aceito") {
        prepararConsentimento();
        setAceito(true);
      }
      // Recusou depois de ter aceitado: recarrega para descarregar o script (os cookies do GA são apagados abaixo)
      if (escolha === "recusado" && document.querySelector('script[src*="googletagmanager"]')) {
        document.cookie.split(";").forEach((c) => {
          const nome = c.split("=")[0].trim();
          if (nome.startsWith("_ga")) document.cookie = `${nome}=; Max-Age=0; path=/; domain=${location.hostname.replace(/^www\./, ".")}`;
        });
        location.reload();
      }
    };
    window.addEventListener(EVENTO_MUDOU, mudou);
    return () => window.removeEventListener(EVENTO_MUDOU, mudou);
  }, []);

  // Cliques de agendamento: qualquer link para o WhatsApp ou elemento com data-evento (APP_FLOW).
  useEffect(() => {
    if (!id || !aceito) return;
    const clique = (e: MouseEvent) => {
      const alvo = (e.target as Element | null)?.closest?.('a[href*="wa.me/"], a[href*="web.whatsapp.com"], [data-evento]');
      if (!alvo) return;
      const nome = alvo.getAttribute("data-evento") ?? "clique_whatsapp";
      if (nome === "clique_whatsapp" || nome === "clique_agenda_online") enviarEvento(nome, { origem: origemDoClique(alvo) });
    };
    document.addEventListener("click", clique, { capture: true });
    return () => document.removeEventListener("click", clique, { capture: true });
  }, [id, aceito]);

  // Página de obrigado: view_obrigado e, vindo da agenda, agendamento_concluido.
  useEffect(() => {
    if (!id || !aceito || !pathname.startsWith("/obrigado")) return;
    const origem = new URLSearchParams(location.search).get("origem") === "agenda" ? "agenda" : "whatsapp";
    enviarEvento("view_obrigado", { origem });
    if (origem === "agenda") enviarEvento("agendamento_concluido");
  }, [id, aceito, pathname]);

  if (!id || !aceito) return null;
  return <GoogleAnalytics gaId={id} />;
}
