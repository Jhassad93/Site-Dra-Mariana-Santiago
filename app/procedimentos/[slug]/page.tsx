import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Botao, LinkSecundario } from "@/components/marca/botao";
import { ReguaDoTempo, ReguaOrnamento } from "@/components/marca/regua";
import { CardCompacto } from "@/components/marca/cards";
import { Acordeao, VozDaDra } from "@/components/marca/blocos";
import { maiuscula, porSlug, procedimentos } from "@/lib/procedimentos";
import { whatsappHref } from "@/lib/site";

// Modelo das páginas de procedimento (estrutura obrigatória da Etapa 4). RASCUNHO até a aprovação da Dra.
export const dynamicParams = false;
export function generateStaticParams() {
  return procedimentos.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = porSlug((await params).slug);
  return p ? { title: p.title, description: p.description } : {};
}

const caixa = "mx-auto max-w-[1200px] px-4 sm:px-6";

function Bloco({ id, titulo, children }: { id: string; titulo: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="border-t border-border py-14 md:py-20">
      <div className={`${caixa} grid gap-6 lg:grid-cols-12 lg:gap-6`}>
        <h2 id={id} className="text-2xl md:text-3xl lg:col-span-4">
          {titulo}
        </h2>
        <div className="grid max-w-[64ch] content-start gap-4 lg:col-span-7 lg:col-start-6">{children}</div>
      </div>
    </section>
  );
}

export default async function PaginaProcedimento({ params }: Props) {
  const p = porSlug((await params).slug);
  if (!p) notFound();
  const outros = procedimentos.filter((o) => o.slug !== p.slug);

  return (
    <>
      <section className={`${caixa} pb-14 pt-28 md:pb-20 lg:pt-40`} aria-labelledby="titulo">
        <nav aria-label="Você está em" className="text-sm text-muted-foreground">
          <Link href="/procedimentos/" className="underline decoration-1 underline-offset-4 hover:text-tinta">
            Procedimentos
          </Link>
        </nav>
        <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-6">
          <div className="lg:col-span-7">
            <h1 id="titulo" className="max-w-[16ch] text-[clamp(2.5rem,6vw,4.0625rem)]">
              {p.nome}
            </h1>
            <ReguaOrnamento className="mt-8" />
            <p className="mt-8 max-w-[52ch] text-lg text-muted-foreground">{p.resumo}</p>
          </div>
          {p.card ? (
            <div className="border-t border-ouro pt-4 lg:col-span-4 lg:col-start-9">
              <p className="text-[2.5rem] font-light leading-none tracking-[-0.02em]">{p.card.valor}</p>
              <p className="mt-2 text-sm text-muted-foreground">{maiuscula(p.card.rotulo)}</p>
            </div>
          ) : null}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3" data-cta>
          <Botao href={whatsappHref} externo>
            Agendar consulta
          </Botao>
          <LinkSecundario href="/como-funciona/">Como funciona a consulta</LinkSecundario>
        </div>
      </section>

      <Bloco id="para-que-serve" titulo="Para que serve">
        {p.paraQueServe.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </Bloco>

      <Bloco id="como-e-feito" titulo="Como é feito">
        {p.comoEFeito.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </Bloco>

      <section data-tema="escuro" aria-labelledby="tempo" className="tema-escuro bg-tinta text-areia">
        <div className={`${caixa} py-20 md:py-28`}>
          <h2 id="tempo" className="text-3xl md:text-4xl">
            Quanto tempo leva
          </h2>
          <ReguaDoTempo className="mt-12" rotulo={`Linha do tempo: ${p.nome}`} marcos={p.regua.map((m) => ({ quando: m.quando, oQue: maiuscula(m.oQue) }))} sobre="escuro" />
          <p className="mt-10 max-w-[68ch] text-sm text-gesso">{p.reguaNota}</p>
        </div>
      </section>

      <Bloco id="depois" titulo="O que esperar depois">
        <ul className="grid gap-3">
          {p.depois.map((t) => (
            <li key={t} className="flex gap-3">
              <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 bg-ouro" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </Bloco>

      <Bloco id="efeitos" titulo="Possíveis efeitos e complicações">
        <dl className="grid gap-5">
          {p.efeitos.map((e) => (
            <div key={e.rotulo} className="grid gap-1">
              <dt className="font-medium">{e.rotulo}</dt>
              <dd className="text-muted-foreground">{maiuscula(e.texto)}</dd>
            </div>
          ))}
        </dl>
        {p.avisar ? (
          <div className="mt-2 rounded-[var(--radius-compact)] bg-areia/40 p-5">
            <p className="font-medium">Quando avisar na hora</p>
            <p className="mt-1">{maiuscula(p.avisar)}</p>
          </div>
        ) : null}
      </Bloco>

      {p.desfazer.length ? (
        <Bloco id="desfazer" titulo="Dá para desfazer?">
          {p.desfazer.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </Bloco>
      ) : null}

      <Bloco id="contraindicacoes" titulo="Quando não é indicado">
        {p.contraindicacoes.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </Bloco>

      <section aria-label="Na consulta" className="fechamento">
        <div className={`${caixa} py-20 md:py-28`}>
          <VozDaDra>{`Na consulta, eu ${p.naConsulta}`}</VozDaDra>
        </div>
      </section>

      <section aria-labelledby="perguntas" className="py-16 md:py-24">
        <div className={`${caixa} grid gap-10 lg:grid-cols-12 lg:gap-6`}>
          <div className="lg:col-span-4">
            <h2 id="perguntas" className="text-2xl md:text-3xl">
              Perguntas
            </h2>
            <div className="mt-6">
              <LinkSecundario href="/perguntas-frequentes/">Outras dúvidas</LinkSecundario>
            </div>
          </div>
          <Acordeao className="lg:col-span-8" itens={p.perguntas.map((q) => ({ pergunta: q.pergunta, resposta: <p>{q.resposta}</p> }))} />
        </div>
      </section>

      <section aria-labelledby="fontes" className="border-t border-border py-12">
        <div className={`${caixa} grid gap-4 lg:grid-cols-12 lg:gap-6`}>
          <h2 id="fontes" className="text-base font-medium tracking-normal lg:col-span-4">
            Fontes
          </h2>
          <div className="lg:col-span-8">
            <ul className="grid gap-2 text-sm text-muted-foreground">
              {p.fontes.map((f) => (
                <li key={f.href}>
                  <a href={f.href} target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-4 hover:text-tinta">
                    {f.texto}
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Conteúdo informativo. A indicação de qualquer procedimento é individual e definida em consulta.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="agendar" className="border-t border-border py-16 md:py-24">
        <div className={`${caixa} grid gap-10 lg:grid-cols-12 lg:gap-6`}>
          <div className="lg:col-span-4">
            <h2 id="agendar" className="text-2xl md:text-3xl">
              Conversar sobre {p.nome.toLowerCase()}
            </h2>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3" data-cta>
              <Botao href={whatsappHref} externo>
                Agendar consulta
              </Botao>
            </div>
          </div>
          <div className="lg:col-span-8">
            <p className="text-sm text-muted-foreground">Outros procedimentos</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {outros.map((o) => (
                <li key={o.slug}>
                  <CardCompacto href={o.href} nome={o.nome} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
