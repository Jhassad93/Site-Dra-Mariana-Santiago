import { Botao, LinkSecundario } from "@/components/marca/botao";
import { ReguaDoTempo, ReguaOrnamento } from "@/components/marca/regua";
import { CardCompacto, CardProcedimento } from "@/components/marca/cards";
import { Acordeao, IdentificacaoR1, VozDaDra } from "@/components/marca/blocos";
import { whatsappHref, horarios } from "@/lib/site";
import { FundoMidia, Imagem, temMidia } from "@/components/marca/midia";
import {
  comoTrabalho,
  faqHome,
  fechamento,
  hero,
  ondeQuando,
  perfilGoogle,
  planejamento,
  procedimentosCompactos,
  procedimentosDestaque,
} from "@/lib/conteudo";

const caixa = "mx-auto max-w-[1200px] px-4 sm:px-6";

/** Hero: tela escura de ponta a ponta. Até a Etapa 10, a "luz no linho" é desenhada em CSS (sem foto). */
export function Hero() {
  return (
    <section data-tema="escuro" aria-labelledby="titulo-hero" className="hero tema-escuro relative isolate overflow-hidden bg-tinta text-areia">
      {temMidia("hero") ? (
        <div className="absolute inset-0 -z-10">
          <FundoMidia slot="hero" sizes="100vw" prioridade />
          <div aria-hidden="true" className="hero-veu absolute inset-0" />
        </div>
      ) : (
        <div aria-hidden="true" className="hero-luz absolute inset-0 -z-10" />
      )}
      <div className={`${caixa} flex min-h-[max(600px,100svh)] flex-col justify-end pb-8 pt-24 sm:pb-12 md:min-h-[max(720px,92svh)] md:pb-16 lg:pt-36`}>
        <h1 id="titulo-hero" className="hero-titulo max-w-[17ch] text-[clamp(2.5rem,5.4vw,4.0625rem)] font-light">
          {hero.titulo}
        </h1>
        <ReguaOrnamento animada className="mt-6 sm:mt-8" />
        <p className="mt-6 max-w-[52ch] text-base text-gesso sm:mt-8 sm:text-lg">{hero.apoio}</p>
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-8 gap-y-3" data-cta>
          <Botao href={whatsappHref} externo variante="vidro">
            Agendar consulta
          </Botao>
          <LinkSecundario href="/agendar/#agenda" sobre="escuro">
            Ver horários disponíveis
          </LinkSecundario>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-areia/20 pt-5 sm:mt-10 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:pt-6">
          <div className="grid gap-2">
            <p className="hidden font-voz text-2xl italic leading-none text-areia sm:block">Mariana Santiago</p>
            <IdentificacaoR1 sobre="escuro" />
          </div>
          <p className="max-w-[34ch] text-sm text-gesso sm:text-right">{hero.horario}</p>
        </div>
      </div>
    </section>
  );
}

/** Faixa "Onde e quando" curta, só no celular, logo depois do hero (crença U6). */
export function OndeQuandoCelular() {
  return (
    <section aria-label="Horários e endereço" className="border-b border-border md:hidden">
      <div className={`${caixa} grid gap-3 py-6 text-sm`}>
        <dl className="grid gap-1">
          {horarios.map((h) => (
            <div key={h.dias} className="flex flex-wrap gap-x-2">
              <dt className="text-tinta">{h.dias}</dt>
              <dd className="text-muted-foreground">{h.horas}</dd>
            </div>
          ))}
        </dl>
        <p className="text-muted-foreground">Av. Paulista, 1048, 18º andar. A uma quadra do metrô Trianon-Masp.</p>
      </div>
    </section>
  );
}

export function ComoTrabalho() {
  return (
    <section aria-labelledby="como-trabalho" className="py-20 md:py-32">
      <div className={caixa}>
        <div className="grid gap-6 lg:grid-cols-12">
          <h2 id="como-trabalho" className="text-3xl md:text-4xl lg:col-span-5">
            {comoTrabalho.titulo}
          </h2>
          <p className="max-w-[46ch] text-lg text-muted-foreground lg:col-span-6 lg:col-start-7 lg:pt-3">{comoTrabalho.apoio}</p>
        </div>
        <ol className="regua regua-clara regua-etapas mt-14" style={{ "--marcos": comoTrabalho.etapas.length } as React.CSSProperties}>
          {comoTrabalho.etapas.map((e, i) => (
            <li key={e.titulo} className="regua-marco" style={{ "--i": i } as React.CSSProperties}>
              <span className="regua-ponto" aria-hidden="true" />
              <h3 className="regua-quando">{e.titulo}</h3>
              <p className="regua-oque">{e.texto}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <LinkSecundario href="/como-funciona/">Entender como funciona a consulta</LinkSecundario>
        </div>
      </div>
    </section>
  );
}

export function Procedimentos() {
  return (
    <section aria-labelledby="procedimentos" className="pb-20 md:pb-32">
      <div className={caixa}>
        <div className="grid gap-6 lg:grid-cols-12">
          <h2 id="procedimentos" className="text-3xl md:text-4xl lg:col-span-5">
            Procedimentos
          </h2>
          <p className="max-w-[52ch] text-lg text-muted-foreground lg:col-span-6 lg:col-start-7 lg:pt-3">
            Cada página explica para que serve, como é feito, quanto tempo leva para responder e quais são os riscos. A
            indicação é sempre individual, definida na consulta.
          </p>
        </div>
      </div>
      {/* No celular, os cards grandes viram uma faixa com deslize horizontal */}
      <div className="carrossel mt-12 snap-x snap-mandatory scroll-px-4 overflow-x-auto sm:scroll-px-6 lg:overflow-visible">
        <ul aria-label="Procedimentos em destaque" className="flex w-max gap-4 px-4 sm:px-6 lg:mx-auto lg:grid lg:w-auto lg:max-w-[1200px] lg:grid-cols-3 lg:gap-5">
          {procedimentosDestaque.map((p) => (
            <li key={p.href} className="w-[78vw] shrink-0 snap-start sm:w-[46vw] md:w-[40vw] lg:w-auto">
              <CardProcedimento {...p} />
            </li>
          ))}
        </ul>
      </div>
      <div className={caixa}>
        <p className="mt-3 text-sm text-muted-foreground lg:hidden" aria-hidden="true">
          Deslize para ver os outros
        </p>
        <ul className="mt-5 grid gap-3 md:grid-cols-3 md:gap-5">
          {procedimentosCompactos.map((p) => (
            <li key={p.href}>
              <CardCompacto {...p} />
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <LinkSecundario href="/procedimentos/">Ver todos os procedimentos</LinkSecundario>
        </div>
      </div>
    </section>
  );
}

export function Planejamento({ texto = planejamento.texto, comLuz = true }: { texto?: string; comLuz?: boolean } = {}) {
  return (
    <section data-tema="escuro" aria-labelledby="planejamento" className="tema-escuro bg-tinta text-areia">
      <div className={`${caixa} grid gap-12 py-20 md:py-32 lg:grid-cols-12 lg:gap-6`}>
        <div className="lg:col-span-6">
          <h2 id="planejamento" className="max-w-[16ch] text-3xl md:text-4xl">
            {planejamento.titulo}
          </h2>
          <p className="mt-8 max-w-[52ch] text-lg text-gesso">{texto}</p>
          <div className="mt-8" data-cta>
            <LinkSecundario href={whatsappHref} externo sobre="escuro">
              Conversar sobre uma data
            </LinkSecundario>
          </div>
        </div>
        {/* Lugar do vídeo 2 (luz no gesso), Etapa 10. Até lá, a luz é desenhada em CSS. */}
        {comLuz ? (
          <div aria-hidden="true" className="planejamento-luz relative hidden min-h-72 overflow-hidden rounded-[var(--radius-card)] lg:col-span-5 lg:col-start-8 lg:block">
            <FundoMidia slot="planejamento" sizes="(min-width: 1024px) 40vw, 0px" />
          </div>
        ) : null}
        <div className="lg:col-span-12">
          <ReguaDoTempo rotulo="Linha do tempo de um plano" marcos={planejamento.regua} sobre="escuro" />
          <p className="mt-10 max-w-[68ch] text-sm text-gesso">{planejamento.nota}</p>
        </div>
      </div>
    </section>
  );
}

export function PerguntasHome() {
  return (
    <section aria-labelledby="perguntas" className="py-20 md:py-32">
      <div className={`${caixa} grid gap-10 lg:grid-cols-12 lg:gap-6`}>
        <div className="lg:col-span-4">
          <h2 id="perguntas" className="text-3xl md:text-4xl">
            Perguntas frequentes
          </h2>
          <div className="mt-6">
            <LinkSecundario href="/perguntas-frequentes/">Ver todas as perguntas</LinkSecundario>
          </div>
        </div>
        <Acordeao itens={faqHome.map((f) => ({ pergunta: f.pergunta, resposta: <p>{f.resposta}</p> }))} className="lg:col-span-8" />
      </div>
    </section>
  );
}

export function OndeQuando() {
  return (
    <section aria-labelledby="onde-quando" className="border-t border-border py-20 md:py-28">
      <div className={`${caixa} grid gap-10 lg:grid-cols-12 lg:gap-6`}>
        <h2 id="onde-quando" className="text-3xl md:text-4xl lg:col-span-4">
          {ondeQuando.titulo}
        </h2>
        <div className="grid gap-8 lg:col-span-8 lg:grid-cols-2">
          <div className="grid content-start gap-3">
            <p className="text-lg">
              Av. Paulista, 1048, 18º andar
              <br />
              Bela Vista, São Paulo
            </p>
            <p className="text-muted-foreground">A uma quadra do metrô Trianon-Masp. {ondeQuando.comoChegar}</p>
            <div className="flex flex-wrap gap-x-6">
              <LinkSecundario href={ondeQuando.mapa} externo>
                Abrir no mapa
              </LinkSecundario>
              {perfilGoogle ? (
                <LinkSecundario href={perfilGoogle} externo>
                  Ver no Google
                </LinkSecundario>
              ) : null}
            </div>
          </div>
          <dl className="grid content-start gap-3">
            {horarios.map((h) => (
              <div key={h.dias} className="grid gap-0.5 border-t border-border pt-3">
                <dt className="text-muted-foreground">{h.dias}</dt>
                <dd className="text-xl tracking-[-0.01em]">{h.horas}</dd>
              </div>
            ))}
            <p className="pt-2 text-muted-foreground">Horários pensados para quem trabalha durante o dia.</p>
          </dl>
        </div>
      </div>
    </section>
  );
}

/** Fechamento: gradiente Areia → Gesso, voz da Dra., assinatura e foto (só na prévia privada; Etapa 10). */
export function Fechamento() {
  return (
    <section aria-labelledby="fechamento" className="fechamento overflow-hidden">
      <div className={`${caixa} grid items-end gap-10 pt-20 md:pt-28 lg:grid-cols-12 lg:gap-6`}>
        <div className="pb-20 md:pb-28 lg:col-span-7 lg:row-start-1">
          <h2 id="fechamento" className="sr-only">
            Agende sua consulta
          </h2>
          <VozDaDra comIdentificacao={false}>{fechamento.frase}</VozDaDra>
          <p className="mt-8 font-voz text-xl italic leading-none text-tinta">Mariana Santiago</p>
          <IdentificacaoR1 className="mt-3" />
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3" data-cta>
            <Botao href={whatsappHref} externo>
              Agendar consulta
            </Botao>
            <LinkSecundario href="/agendar/#agenda">Ver horários disponíveis</LinkSecundario>
          </div>
        </div>
        <div className="fechamento-foto relative order-first mx-auto aspect-[4/5] w-full max-w-[420px] lg:order-none lg:col-span-5 lg:mx-0 lg:justify-self-end">
          <FotoDra />
        </div>
      </div>
    </section>
  );
}

export function FotoDra() {
  // Foto do Instagram: SÓ na prévia privada (NEXT_PUBLIC_FOTO_DRA_PREVIA=1 no .env.local, nunca no site publicado)
  if (process.env.NEXT_PUBLIC_FOTO_DRA_PREVIA === "1" && temMidia("dra-previa")) {
    return (
      <div className="size-full overflow-hidden rounded-t-[var(--radius-card)]">
        <Imagem slot="dra-previa" alt="Dra. Mariana Passos Santiago" sizes="(min-width: 1024px) 420px, 90vw" className="object-top" />
      </div>
    );
  }
  return <div aria-hidden="true" className="size-full rounded-t-[var(--radius-card)] bg-[linear-gradient(170deg,#e9dcc4_0%,#cdb48c_55%,#a98a5e_100%)]" />;
}

