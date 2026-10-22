"use client";

import { useEffect, useState } from "react";
import { telefoneVisivel, whatsappHref } from "@/lib/site";

// Lê ?origem no navegador (site estático). Sem parâmetro, mostra a versão do WhatsApp (padrão do APP_FLOW).
export function ConteudoObrigado() {
  const [origem, setOrigem] = useState<"whatsapp" | "agenda">("whatsapp");
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("origem") === "agenda") setOrigem("agenda");
  }, []);

  if (origem === "agenda") {
    return (
      <>
        <h1 className="text-[clamp(2.5rem,6vw,4.0625rem)]">Sua consulta está marcada</h1>
        <p className="mt-8 max-w-[52ch] text-lg text-muted-foreground">
          A confirmação chega no seu e-mail, com data, horário e endereço. Se precisar remarcar, use o link do e-mail ou fale
          pelo WhatsApp com 24 horas de antecedência.
        </p>
      </>
    );
  }
  return (
    <>
      <h1 className="text-[clamp(2.5rem,6vw,4.0625rem)]">Sua mensagem está a caminho</h1>
      <p className="mt-8 max-w-[52ch] text-lg text-muted-foreground">
        O WhatsApp abriu em outra aba. Envie a mensagem e você recebe os horários disponíveis em seguida, dentro do horário de
        atendimento.
      </p>
      <p className="mt-4 max-w-[52ch] text-muted-foreground">
        Se o WhatsApp não abriu,{" "}
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-bronze underline decoration-1 underline-offset-4">
          mande uma mensagem para {telefoneVisivel}
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
        .
      </p>
    </>
  );
}
