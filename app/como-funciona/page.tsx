import type { Metadata } from "next";
import { metadados } from "@/lib/seo";
import { Migalhas } from "@/components/seo/json-ld";
import { Botao, LinkSecundario } from "@/components/marca/botao";
import { ReguaOrnamento } from "@/components/marca/regua";
import { Planejamento } from "@/components/home/secoes";
import { comoFunciona } from "@/lib/conteudo";
import { whatsappHref } from "@/lib/site";

// RASCUNHO (COPY.md aprovado pelo responsável; aguarda a Dra.). Itens [A CONFIRMAR] listados em lib/conteudo.ts.
export const metadata: Metadata = metadados({
  titulo: "Como funciona a consulta | Dra. Mariana Santiago, médica na Av. Paulista",
  descricao: "O que acontece na consulta com a Dra. Mariana Santiago: conversa, avaliação, plano com prazos e riscos, decisão sua e retorno. Valor da consulta, horários e o que levar.",
  caminho: "/como-funciona/",
});

const caixa = "mx-auto max-w-[1200px] px-4 sm:px-6";

export default function ComoFunciona() {
  const c = comoFunciona;
  return (
    <>
      <Migalhas itens={[["Como funciona", "/como-funciona/"]]} />
      <section className={`${caixa} pb-16 pt-32 md:pb-24 lg:pt-44`} aria-labelledby="titulo">
        <h1 id="titulo" className="max-w-[16ch] text-[clamp(2.5rem,6vw,4.0625rem)]">
          {c.titulo}
        </h1>
        <ReguaOrnamento className="mt-8" />
        <p className="mt-8 max-w-[52ch] text-lg text-muted-foreground">{c.apoio}</p>
      </section>

      <section aria-label="Etapas da consulta" className="pb-20 md:pb-32">
        <div className={`${caixa} grid gap-12 lg:grid-cols-12 lg:gap-6`}>
          <nav aria-label="Etapas" className="hidden lg:col-span-3 lg:block">
            <ol className="sticky top-28 grid gap-1 text-sm">
              {c.etapas.map((e, i) => (
                <li key={e.id}>
                  <a href={`#${e.id}`} className="flex min-h-9 items-center gap-3 text-muted-foreground hover:text-tinta">
                    <span className="w-4 text-right">{i + 1}</span>
                    {e.titulo}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <ol className="regua regua-clara regua-etapas regua-vertical lg:col-span-8 lg:col-start-5" style={{ "--marcos": c.etapas.length } as React.CSSProperties}>
            {c.etapas.map((e, i) => (
              <li key={e.id} id={e.id} className="regua-marco scroll-mt-28" style={{ "--i": i } as React.CSSProperties}>
                <span className="regua-ponto" aria-hidden="true" />
                <h2 className="regua-quando">{e.titulo}</h2>
                <div className="regua-oque grid gap-4">
                  {e.texto.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                  {e.lista ? (
                    <ul className="grid gap-1.5 pl-5 [list-style:'–  ']">
                      {e.lista.map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                    </ul>
                  ) : null}
                  {e.voz ? <p className="font-voz text-[1.625rem] italic leading-[1.35] text-tinta">{e.voz}</p> : null}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className={`${caixa} mt-16 grid lg:grid-cols-12 lg:gap-6`}>
          <aside aria-labelledby="imprevisto" className="rounded-[var(--radius-compact)] bg-areia/40 p-6 md:p-8 lg:col-span-8 lg:col-start-5">
            <h2 id="imprevisto" className="text-xl font-normal tracking-[-0.015em]">
              {c.imprevisto.titulo}
            </h2>
            <p className="mt-3 max-w-[60ch] text-muted-foreground">{c.imprevisto.texto}</p>
            <div className="mt-4">
              <LinkSecundario href={whatsappHref} externo>
                Falar pelo WhatsApp
              </LinkSecundario>
            </div>
          </aside>
        </div>
      </section>

      <Planejamento texto={c.planejamentoTexto} comLuz={false} />

      <section aria-labelledby="praticas" className="py-20 md:py-32">
        <div className={`${caixa} grid gap-10 lg:grid-cols-12 lg:gap-6`}>
          <h2 id="praticas" className="text-3xl md:text-4xl lg:col-span-4">
            Informações práticas
          </h2>
          <div className="lg:col-span-8">
            <dl className="grid gap-x-10 border-t border-border sm:grid-cols-2">
              {c.praticas.map((p) => (
                <div key={p.rotulo} className="grid gap-1 border-b border-border py-5">
                  <dt className="text-muted-foreground">{p.rotulo}</dt>
                  <dd>{p.texto}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3" data-cta>
              <Botao href={whatsappHref} externo>
                Agendar consulta
              </Botao>
              <LinkSecundario href="/agendar/#agenda">Ver horários disponíveis</LinkSecundario>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
