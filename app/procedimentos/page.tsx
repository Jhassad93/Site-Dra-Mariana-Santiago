import type { Metadata } from "next";
import { metadados } from "@/lib/seo";
import { Migalhas } from "@/components/seo/json-ld";
import Link from "next/link";
import { Botao, LinkSecundario } from "@/components/marca/botao";
import { ReguaOrnamento } from "@/components/marca/regua";
import { procedimentos } from "@/lib/procedimentos";
import { whatsappHref } from "@/lib/site";

// RASCUNHO (COPY.md). Índice dos procedimentos.
export const metadata: Metadata = metadados({
  titulo: "Procedimentos estéticos faciais | Dra. Mariana Santiago, médica na Av. Paulista",
  descricao: "Toxina botulínica, preenchimento labial, contorno facial com ácido hialurônico, bioestimuladores de colágeno, skinbooster e peelings: para que servem, prazos, cuidados e riscos.",
  caminho: "/procedimentos/",
});

const caixa = "mx-auto max-w-[1200px] px-4 sm:px-6";

export default function Procedimentos() {
  return (
    <>
      <Migalhas itens={[["Procedimentos", "/procedimentos/"]]} />
      <section className={`${caixa} pb-12 pt-32 md:pb-20 lg:pt-44`} aria-labelledby="titulo">
        <h1 id="titulo" className="text-[clamp(2.5rem,6vw,4.0625rem)]">
          Procedimentos
        </h1>
        <ReguaOrnamento className="mt-8" />
        <p className="mt-8 max-w-[60ch] text-lg text-muted-foreground">
          Aqui você encontra o que cada procedimento faz, quanto tempo leva para responder, os cuidados e os riscos. A
          indicação é sempre individual: é na consulta que vemos juntas o que faz sentido para o seu rosto, inclusive
          quando a resposta é não fazer nada agora.
        </p>
      </section>

      <section aria-label="Lista de procedimentos" className={`${caixa} pb-20 md:pb-28`}>
        <ul className="border-t border-border">
          {procedimentos.map((p) => (
            <li key={p.slug} className="border-b border-border">
              <Link href={p.href} className="item-procedimento group grid gap-2 py-7 md:grid-cols-12 md:items-baseline md:gap-6">
                <span className="text-2xl font-light tracking-[-0.015em] md:col-span-5 md:text-3xl">{p.nome}</span>
                <span className="text-muted-foreground md:col-span-6">{p.umaLinha}</span>
                <svg className="seta hidden justify-self-end md:col-span-1 md:block" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-6">
          <p className="max-w-[60ch] text-muted-foreground lg:col-span-6">
            Acne, melasma e rosácea são condições de pele que precisam de diagnóstico médico. Se é isso que incomoda você,
            conte na consulta: a avaliação vem antes de qualquer indicação.
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 lg:col-span-6 lg:justify-end" data-cta>
            <Botao href={whatsappHref} externo>
              Agendar consulta
            </Botao>
            <LinkSecundario href="/como-funciona/">Como funciona a consulta</LinkSecundario>
          </div>
        </div>
      </section>
    </>
  );
}
