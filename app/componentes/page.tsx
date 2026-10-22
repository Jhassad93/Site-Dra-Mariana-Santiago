import type { Metadata } from "next";
import { Botao, LinkSecundario, PilulaVidro } from "@/components/marca/botao";
import { ReguaDoTempo, ReguaOrnamento } from "@/components/marca/regua";
import { CardCompacto, CardProcedimento } from "@/components/marca/cards";
import { Acordeao, IdentificacaoR1, VozDaDra } from "@/components/marca/blocos";
import { whatsappHref } from "@/lib/site";

// Página interna de revisão dos componentes (Etapa 3). Fora dos buscadores e REMOVIDA antes da prévia à lead.
// Todos os textos daqui são RASCUNHO de exemplo; os definitivos saem da Etapa 4 (copy) e da validação da Dra.
export const metadata: Metadata = {
  title: "Componentes · Dra. Mariana Santiago",
  robots: { index: false, follow: false },
};

const reguaPlanejamento = [
  { quando: "Hoje", oQue: "Conversa e avaliação" },
  { quando: "2 semanas", oQue: "Retorno para avaliar a resposta" },
  { quando: "1 mês", oQue: "Ajustes, se fizerem sentido" },
  { quando: "3 meses", oQue: "Nova etapa do plano" },
  { quando: "6 meses", oQue: "Revisão do plano" },
];

const reguaToxina = [
  { quando: "Dia 0", oQue: "Aplicação" },
  { quando: "3 a 4 dias", oQue: "O efeito começa" },
  { quando: "Cerca de 14 dias", oQue: "Efeito pleno e retorno" },
  { quando: "4 a 6 meses", oQue: "Avaliar a manutenção" },
];

const perguntas = [
  {
    pergunta: "Preciso saber o que quero fazer antes da consulta?",
    resposta: (
      <p>
        Não. A consulta começa pela conversa sobre o que incomoda você. A indicação vem depois da avaliação, e às
        vezes ela é não fazer nada agora.
      </p>
    ),
  },
  {
    pergunta: "Quanto custa a consulta?",
    resposta: <p>O valor da consulta é informado no agendamento, junto com as formas de pagamento.</p>,
  },
  {
    pergunta: "Em que dias a Dra. atende?",
    resposta: <p>Terça e sexta, das 13h às 21h, e sábado, das 8h às 14h, na Av. Paulista, 1048.</p>,
  },
];

function Secao({ titulo, children, escura = false }: { titulo: string; children: React.ReactNode; escura?: boolean }) {
  return (
    <section
      data-tema={escura ? "escuro" : undefined}
      className={escura ? "tema-escuro bg-tinta text-areia" : undefined}
      aria-label={titulo}
    >
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-20">
        <h2 className="text-2xl md:text-3xl">{titulo}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export default function Componentes() {
  return (
    <>
      <div className="mx-auto max-w-[1200px] px-4 pt-32 sm:px-6 lg:pt-40">
        <h1 className="text-[clamp(2.5rem,6vw,4.0625rem)]">Componentes</h1>
        <ReguaOrnamento animada className="mt-8" />
        <p className="mt-8 max-w-[60ch] text-lg text-muted-foreground">
          Página interna de revisão, fora dos buscadores e removida antes da prévia para a Dra. Os textos são
          rascunhos de exemplo.
        </p>
      </div>

      <Secao titulo="Botões e links">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <Botao href={whatsappHref} externo>
            Agendar consulta
          </Botao>
          <LinkSecundario href="/agendar/">Ver horários disponíveis</LinkSecundario>
        </div>
      </Secao>

      <Secao titulo="Botões sobre fundo escuro" escura>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <Botao href={whatsappHref} externo variante="vidro">
            Agendar consulta
          </Botao>
          <LinkSecundario href="/agendar/" sobre="escuro">
            Ver horários disponíveis
          </LinkSecundario>
          <PilulaVidro>Entender o procedimento</PilulaVidro>
        </div>
      </Secao>

      <Secao titulo="Régua do tempo">
        <ReguaDoTempo rotulo="Linha do tempo de um plano" marcos={reguaPlanejamento} animada />
        <p className="mt-10 max-w-[60ch] text-sm text-muted-foreground">
          Os prazos variam de pessoa para pessoa e são definidos na avaliação.
        </p>
      </Secao>

      <Secao titulo="Régua do tempo sobre fundo escuro" escura>
        <ReguaDoTempo rotulo="Linha do tempo da toxina botulínica" marcos={reguaToxina} sobre="escuro" />
        <p className="mt-10 max-w-[60ch] text-sm text-gesso">Os prazos variam de pessoa para pessoa.</p>
      </Secao>

      <Secao titulo="Cards de procedimento">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <CardProcedimento
            href="/procedimentos/toxina-botulinica/"
            nome="Toxina botulínica"
            indicacao="Linhas de expressão"
            dado={{ valor: "~14 dias", rotulo: "efeito pleno, varia de pessoa para pessoa" }}
          />
          <CardProcedimento
            href="/procedimentos/bioestimuladores-de-colageno/"
            nome="Bioestimuladores de colágeno"
            indicacao="Firmeza da pele ao longo do tempo"
            dado={{ valor: "~30 dias", rotulo: "primeiros sinais, efeito gradual e variável" }}
          />
          <CardProcedimento
            href="/procedimentos/preenchimento-labial/"
            nome="Preenchimento labial"
            indicacao="Contorno e volume dos lábios"
            dado={{ valor: "2 a 7 dias", rotulo: "o inchaço costuma ceder, varia de pessoa para pessoa" }}
          />
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <CardCompacto href="/procedimentos/contorno-facial/" nome="Contorno facial" />
          <CardCompacto href="/procedimentos/skinbooster/" nome="Skinbooster" />
          <CardCompacto href="/procedimentos/peelings/" nome="Peelings" />
        </div>
      </Secao>

      <Secao titulo="Perguntas frequentes">
        <Acordeao itens={perguntas} className="max-w-[860px]" />
      </Secao>

      <Secao titulo="Voz da Dra. e identificação">
        <div className="grid gap-14 lg:grid-cols-2">
          <VozDaDra>Antes de qualquer procedimento, eu quero entender o que incomoda você. Daí em diante, decidimos juntas, no seu tempo.</VozDaDra>
          <div className="grid content-start gap-3">
            <p className="text-sm text-muted-foreground">Identificação sozinha (R1)</p>
            <IdentificacaoR1 />
          </div>
        </div>
      </Secao>

      <Secao titulo="Voz da Dra. sobre fundo escuro" escura>
        <VozDaDra sobre="escuro">Na consulta, eu explico o que cada procedimento faz, quanto tempo leva e o que pode acontecer depois.</VozDaDra>
      </Secao>
    </>
  );
}
