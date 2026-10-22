import type { Metadata } from "next";
import { ReguaOrnamento } from "@/components/marca/regua";
import { BotaoWhatsapp } from "@/components/agendar/botao-whatsapp";
import { AgendaOnline } from "@/components/agendar/agenda-online";
import { horarios } from "@/lib/site";

// RASCUNHO (COPY.md). [A CONFIRMAR]: quem responde o WhatsApp e em quanto tempo.
export const metadata: Metadata = {
  title: "Agendar consulta | Dra. Mariana Santiago, médica na Av. Paulista",
  description:
    "Agende sua consulta com a Dra. Mariana Passos Santiago pelo WhatsApp ou escolha um horário na agenda online. Terças e sextas até 21h e sábados.",
};

const caixa = "mx-auto max-w-[1200px] px-4 sm:px-6";

const antesDeVir = [
  "O valor da consulta e as formas de pagamento são informados no agendamento.",
  "Leve exames recentes, se tiver, e a lista dos seus medicamentos.",
  "Cancelamentos com 24 horas de antecedência.",
  "Atendo pacientes a partir de 18 anos.",
];

export default function Agendar() {
  return (
    <>
      <section className={`${caixa} grid gap-12 pb-16 pt-32 md:pb-24 lg:grid-cols-12 lg:gap-6 lg:pt-44`} aria-labelledby="titulo">
        <div className="lg:col-span-7">
          <h1 id="titulo" className="text-[clamp(2.5rem,6vw,4.0625rem)]">
            Agendar consulta
          </h1>
          <ReguaOrnamento className="mt-8" />
          <p className="mt-8 max-w-[48ch] text-lg text-muted-foreground">
            O jeito mais rápido é pelo WhatsApp. Você manda uma mensagem e recebe os horários disponíveis.
          </p>
          <div className="mt-8">
            <BotaoWhatsapp />
          </div>
        </div>
        <dl className="grid content-start gap-3 lg:col-span-4 lg:col-start-9 lg:pt-4">
          {horarios.map((h) => (
            <div key={h.dias} className="grid gap-0.5 border-t border-border pt-3">
              <dt className="text-muted-foreground">{h.dias}</dt>
              <dd className="text-xl tracking-[-0.01em]">{h.horas}</dd>
            </div>
          ))}
          <p className="border-t border-border pt-3 text-muted-foreground">Av. Paulista, 1048, 18º andar. A uma quadra do metrô Trianon-Masp.</p>
        </dl>
      </section>

      <section id="agenda" aria-labelledby="agenda-t" className="scroll-mt-24 border-t border-border py-16 md:py-24">
        <div className={`${caixa} grid gap-8 lg:grid-cols-12 lg:gap-6`}>
          <div className="lg:col-span-4">
            <h2 id="agenda-t" className="text-2xl md:text-3xl">
              Prefere escolher o horário sozinha?
            </h2>
            <p className="mt-4 max-w-[44ch] text-muted-foreground">
              Veja os horários livres e marque direto na agenda online. Ela pede só nome, celular e e-mail.
            </p>
          </div>
          <div className="lg:col-span-8">
            <AgendaOnline />
          </div>
        </div>
      </section>

      <section aria-labelledby="antes" className="border-t border-border py-16 md:py-24">
        <div className={`${caixa} grid gap-8 lg:grid-cols-12 lg:gap-6`}>
          <h2 id="antes" className="text-2xl md:text-3xl lg:col-span-4">
            Antes de vir
          </h2>
          <ul className="grid gap-3 lg:col-span-8">
            {antesDeVir.map((t) => (
              <li key={t} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 bg-ouro" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
