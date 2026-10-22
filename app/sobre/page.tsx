import type { Metadata } from "next";
import { Botao, LinkSecundario } from "@/components/marca/botao";
import { ReguaOrnamento } from "@/components/marca/regua";
import { IdentificacaoR1, VozDaDra } from "@/components/marca/blocos";
import { FotoDra } from "@/components/home/secoes";
import { whatsappHref } from "@/lib/site";

// RASCUNHO (COPY.md). Decisão 1 do harness: a residência NÃO é citada.
// [A CONFIRMAR]: frase em itálico (escrita para ela), cursos livres e congressos, linhas pessoais.
export const metadata: Metadata = {
  title: "Sobre a Dra. Mariana Passos Santiago | Médica, CRM-SP 227636",
  description:
    "Mariana Passos Santiago é médica (CRM-SP 227636), formada pela USCS em 2021, e atua com procedimentos estéticos faciais em consultório próprio na Av. Paulista.",
};

const caixa = "mx-auto max-w-[1200px] px-4 sm:px-6";

const formacao = [
  { rotulo: "Graduação", texto: "Medicina, Universidade Municipal de São Caetano do Sul (USCS), 2021" },
  { rotulo: "Registro", texto: "CRM-SP 227636, desde 14/12/2021, situação regular" },
];

export default function Sobre() {
  return (
    <>
      <section className={`${caixa} grid gap-12 pb-16 pt-32 md:pb-24 lg:grid-cols-12 lg:gap-6 lg:pt-44`} aria-labelledby="titulo">
        <div className="lg:col-span-7">
          <h1 id="titulo" className="text-[clamp(2.5rem,6vw,4.0625rem)]">
            Sobre mim
          </h1>
          <ReguaOrnamento className="mt-8" />
          <div className="mt-8 grid max-w-[60ch] gap-5 text-lg">
            <p>
              Sou médica, formada pela Universidade Municipal de São Caetano do Sul (USCS) em 2021, com registro no Conselho
              Regional de Medicina de São Paulo desde dezembro daquele ano. Atuo com procedimentos estéticos faciais em
              consultório próprio, na Av. Paulista, onde atendo sozinha, da avaliação ao retorno.
            </p>
            <p className="text-muted-foreground">
              Escolhi trabalhar com calma. Prefiro uma consulta que explique bem a um procedimento feito às pressas, e gosto
              quando a paciente sai sabendo o que esperar, quanto tempo cada coisa leva e quais são os riscos, mesmo quando
              decide não fazer nada.
            </p>
          </div>
          <IdentificacaoR1 className="mt-8" />
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] lg:col-span-4 lg:col-start-9 lg:mx-0">
          <FotoDra />
        </div>
      </section>

      <section aria-label="Na consulta" className="fechamento">
        <div className={`${caixa} py-20 md:py-28`}>
          <VozDaDra comIdentificacao={false}>
            O que eu mais ouço na consulta é o medo de ficar com o rosto diferente. Eu levo esse medo a sério: é por isso que o
            plano começa pela conversa e que cada etapa tem o seu tempo.
          </VozDaDra>
        </div>
      </section>

      <section aria-labelledby="formacao" className="py-16 md:py-24">
        <div className={`${caixa} grid gap-8 lg:grid-cols-12 lg:gap-6`}>
          <h2 id="formacao" className="text-2xl md:text-3xl lg:col-span-4">
            Formação e registro
          </h2>
          <div className="lg:col-span-8">
            <dl className="border-t border-border">
              {formacao.map((f) => (
                <div key={f.rotulo} className="grid gap-1 border-b border-border py-5 sm:grid-cols-3 sm:gap-6">
                  <dt className="text-muted-foreground">{f.rotulo}</dt>
                  <dd className="sm:col-span-2">{f.texto}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 max-w-[60ch] text-muted-foreground">
              Você pode conferir o meu registro na busca pública de médicos do Conselho Federal de Medicina.
            </p>
            <div className="mt-3">
              <LinkSecundario href="https://portal.cfm.org.br/busca-medicos" externo>
                Conferir o registro no CFM
              </LinkSecundario>
            </div>
          </div>
        </div>
      </section>

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
