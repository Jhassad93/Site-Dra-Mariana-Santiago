import type { Metadata } from "next";
import { ReguaOrnamento } from "@/components/marca/regua";
import { LinkSecundario } from "@/components/marca/botao";
import { ConteudoObrigado } from "./conteudo";

// RASCUNHO (COPY.md). Fora dos buscadores. [A CONFIRMAR]: prazo de resposta do WhatsApp.
export const metadata: Metadata = {
  title: "Obrigado | Dra. Helena Duarte",
  robots: { index: false, follow: false },
};

export default function Obrigado() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-24 pt-32 sm:px-6 lg:pt-44">
      <ConteudoObrigado />
      <ReguaOrnamento className="mt-10" />
      <div className="mt-10 grid max-w-[52ch] gap-2">
        <h2 className="text-xl font-normal tracking-[-0.015em]">Para a consulta</h2>
        <p className="text-muted-foreground">
          Leve exames recentes, se tiver, e a lista dos seus medicamentos. Av. Paulista, a uma quadra do metrô
          Trianon-Masp.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2">
        <LinkSecundario href="/">Voltar para o início</LinkSecundario>
        <LinkSecundario href="/como-funciona/">Como funciona a consulta</LinkSecundario>
      </div>
    </section>
  );
}
