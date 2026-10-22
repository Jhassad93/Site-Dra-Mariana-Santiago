"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState } from "react";
import { EVENTO_MUDOU, lerEscolha } from "@/lib/consentimento";

/** GA4 só depois do aceite (R13, R15). Sem ID configurado, não faz nada. */
export function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA4_ID;
  const [aceito, setAceito] = useState(false);

  useEffect(() => {
    setAceito(lerEscolha() === "aceito");
    const mudou = (e: Event) => {
      const escolha = (e as CustomEvent).detail;
      if (escolha === "aceito") setAceito(true);
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

  if (!id || !aceito) return null;
  return <GoogleAnalytics gaId={id} />;
}
