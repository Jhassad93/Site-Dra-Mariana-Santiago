import type { Metadata } from "next";
import { metadados } from "@/lib/seo";
import { JsonLd, Migalhas } from "@/components/seo/json-ld";
import Link from "next/link";
import { Botao, LinkSecundario } from "@/components/marca/botao";
import { ReguaOrnamento } from "@/components/marca/regua";
import { Acordeao } from "@/components/marca/blocos";
import { grupos } from "@/lib/faq";
import { whatsappHref } from "@/lib/site";

export const metadata: Metadata = metadados({
  titulo: "Perguntas frequentes | Dra. Helena Duarte, médica na Av. Paulista",
  descricao: "Valor da consulta, primeira consulta, prazos, cuidados, riscos, retorno, gestação e procedimentos feitos em outro lugar: respostas da Dra. Helena Duarte.",
  caminho: "/perguntas-frequentes/",
});

const caixa = "mx-auto max-w-[1200px] px-4 sm:px-6";

// Dados estruturados FAQPage (schema.org), com o mesmo texto visível na página.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: grupos.flatMap((g) =>
    g.itens.map((i) => ({ "@type": "Question", name: i.pergunta, acceptedAnswer: { "@type": "Answer", text: i.resposta } })),
  ),
};

export default function PerguntasFrequentes() {
  return (
    <>
      <Migalhas itens={[["Perguntas frequentes", "/perguntas-frequentes/"]]} />
      <JsonLd dados={jsonLd} />
      <section className={`${caixa} pb-12 pt-32 md:pb-16 lg:pt-44`} aria-labelledby="titulo">
        <h1 id="titulo" className="text-[clamp(2.5rem,6vw,4.0625rem)]">
          Perguntas frequentes
        </h1>
        <ReguaOrnamento className="mt-8" />
        <p className="mt-8 max-w-[52ch] text-lg text-muted-foreground">
          Se a sua dúvida não estiver aqui,{" "}
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-bronze underline decoration-1 underline-offset-4">
            mande pelo WhatsApp
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
          .
        </p>
        <nav aria-label="Temas" className="mt-8 flex flex-wrap gap-2">
          {grupos.map((g) => (
            <a key={g.id} href={`#${g.id}`} className="inline-flex min-h-11 items-center rounded-full border border-border px-4 text-sm hover:bg-areia/40">
              {g.titulo}
            </a>
          ))}
        </nav>
      </section>

      {grupos.map((g) => (
        <section key={g.id} id={g.id} aria-labelledby={`${g.id}-t`} className="scroll-mt-24 border-t border-border py-14 md:py-20">
          <div className={`${caixa} grid gap-8 lg:grid-cols-12 lg:gap-6`}>
            <h2 id={`${g.id}-t`} className="text-2xl md:text-3xl lg:col-span-4">
              {g.titulo}
            </h2>
            <Acordeao
              className="lg:col-span-8"
              itens={g.itens.map((i) => ({
                pergunta: i.pergunta,
                resposta: (
                  <>
                    <p>{i.resposta}</p>
                    {i.link ? (
                      <p className="mt-3">
                        <Link href={i.link.href} className="link-solto text-bronze underline decoration-1 underline-offset-4">
                          {i.link.texto}
                        </Link>
                      </p>
                    ) : null}
                  </>
                ),
              }))}
            />
          </div>
        </section>
      ))}

      <section aria-label="Agendar" className="border-t border-border py-16 md:py-24">
        <div className={`${caixa} flex flex-wrap items-center gap-x-8 gap-y-3`} data-cta>
          <Botao href={whatsappHref} externo>
            Agendar consulta
          </Botao>
          <LinkSecundario href="/como-funciona/">Como funciona a consulta</LinkSecundario>
        </div>
      </section>
    </>
  );
}
