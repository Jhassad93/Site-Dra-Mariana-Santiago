import type { Metadata } from "next";
import { metadados } from "@/lib/seo";
import { Migalhas } from "@/components/seo/json-ld";
import Link from "next/link";
import { PaginaLegal } from "@/components/layout/pagina-legal";
import { GerenciarCookiesBotao } from "@/components/consentimento/gerenciar-botao";
import { telefoneVisivel, whatsappHref } from "@/lib/site";

// RASCUNHO PARA REVISÃO JURÍDICA (responsável, advogado; depois a Dra.). Fonte: docs/SCHEMA.md e harness R12, R13, R15.
// [A CONFIRMAR]: e-mail do canal do titular (hoje só WhatsApp); enquadramento como agente de pequeno porte (Res. CD/ANPD 2/2022);
// conta do Calendly e do GA4 no nome da Dra. depois do aceite.
export const metadata: Metadata = metadados({
  titulo: "Política de privacidade | Dra. Mariana Santiago",
  descricao: "Como o site da Dra. Mariana Passos Santiago trata dados pessoais: o que é coletado, para quê, por quanto tempo, com quem é compartilhado e como exercer seus direitos.",
  caminho: "/privacidade/",
});

const fluxos = [
  {
    quando: "Você clica em “Agendar consulta” e conversa pelo WhatsApp",
    dados: "O número e o nome do seu perfil no WhatsApp e o que você escrever. Nenhum dado passa pelo site.",
    finalidade: "Agendar a consulta e responder dúvidas administrativas (horário, endereço, valores da consulta).",
    base: "Procedimentos preliminares a um contrato, a seu pedido (LGPD, art. 7º, V).",
    prazo: "12 meses a partir do seu último contato; depois, a conversa é apagada.",
  },
  {
    quando: "Você usa a agenda online (“Ver horários disponíveis”)",
    dados: "Nome, celular, e-mail, data e hora escolhidas.",
    finalidade: "Marcar a consulta e enviar confirmação e lembrete.",
    base: "Procedimentos preliminares a um contrato, a seu pedido (LGPD, art. 7º, V).",
    prazo: "12 meses a partir do seu último contato; depois, o registro é excluído.",
  },
  {
    quando: "Você aceita os cookies de análise",
    dados: "Um identificador aleatório do navegador, as páginas vistas, de onde veio a visita e cliques em “Agendar”. Não registra quais procedimentos você leu.",
    finalidade: "Saber quantas pessoas visitam o site e se ele ajuda a marcar consultas.",
    base: "Seu consentimento (LGPD, art. 7º, I), que pode ser retirado a qualquer momento.",
    prazo: "14 meses (configuração do Google Analytics).",
  },
  {
    quando: "Você faz a escolha sobre cookies",
    dados: "Apenas a escolha (aceitar ou recusar) e a data, guardadas no seu próprio navegador.",
    finalidade: "Lembrar a sua escolha.",
    base: "Legítimo interesse e cumprimento da LGPD (art. 7º, II e IX).",
    prazo: "12 meses; depois, o site pergunta de novo.",
  },
  {
    quando: "Você acessa qualquer página",
    dados: "Endereço IP, navegador, data e hora, em registros técnicos da hospedagem.",
    finalidade: "Segurança e funcionamento do site.",
    base: "Legítimo interesse (LGPD, art. 7º, IX).",
    prazo: "Conforme o prazo do provedor de hospedagem.",
  },
];

export default function Privacidade() {
  return (
    <>
      <Migalhas itens={[["Política de privacidade", "/privacidade/"]]} />
      <PaginaLegal titulo="Política de privacidade" atualizacao="22 de outubro de 2026">
        <p>
          Esta política explica como o site da Dra. Mariana Passos Santiago, médica (CRM-SP 227636), trata dados pessoais, de
          acordo com a Lei Geral de Proteção de Dados (Lei 13.709/2018, LGPD).
        </p>

        <h2 id="resumo">Em resumo</h2>
        <ul>
          <li>O site não tem formulário, cadastro nem login, e não pede dados de saúde.</li>
          <li>O agendamento acontece pelo WhatsApp ou por uma agenda online, que pede só nome, celular e e-mail.</li>
          <li>Cookies de análise só são usados se você aceitar.</li>
          <li>Dúvidas sobre a sua saúde são tratadas na consulta, não pelo site nem pelo WhatsApp.</li>
        </ul>

        <h2 id="controladora">Quem é a responsável pelos dados</h2>
        <p>
          A controladora dos dados é a Dra. Mariana Passos Santiago, médica, pessoa física, com consultório na Av. Paulista,
          1048, 18º andar, Bela Vista, São Paulo/SP, 01310-100. Para qualquer assunto sobre os seus dados, fale pelo{" "}
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
            WhatsApp {telefoneVisivel}
          </a>
          .
        </p>

        <h2 id="dados">Quais dados, para quê e por quanto tempo</h2>
        <div className="tabela-rolagem" tabIndex={0} aria-label="Tabela de dados tratados; rola na horizontal">
          <table>
            <thead>
              <tr>
                <th scope="col">Quando</th>
                <th scope="col">Dados</th>
                <th scope="col">Para quê</th>
                <th scope="col">Base legal</th>
                <th scope="col">Por quanto tempo</th>
              </tr>
            </thead>
            <tbody>
              {fluxos.map((f) => (
                <tr key={f.quando}>
                  <th scope="row">{f.quando}</th>
                  <td>{f.dados}</td>
                  <td>{f.finalidade}</td>
                  <td>{f.base}</td>
                  <td>{f.prazo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="saude">Dados de saúde</h2>
        <p>
          O site não pede nem guarda informações sobre a sua saúde. Por favor, não envie fotos do rosto, exames ou queixas pela
          agenda online. Pelo WhatsApp, as respostas são só administrativas: avaliação, indicação e orientação acontecem na
          consulta, onde as informações ficam no prontuário, protegidas pelo sigilo médico.
        </p>

        <h2 id="compartilhamento">Com quem os dados são compartilhados</h2>
        <p>Os dados são tratados por empresas que prestam serviço ao consultório (operadoras), só para as finalidades acima:</p>
        <ul>
          <li>
            <strong className="font-medium">Meta (WhatsApp):</strong> mensagens.
          </li>
          <li>
            <strong className="font-medium">Calendly:</strong> agenda online.
          </li>
          <li>
            <strong className="font-medium">Google (Google Analytics):</strong> estatísticas de visita, só com o seu aceite.
          </li>
          <li>
            <strong className="font-medium">Cloudflare:</strong> hospedagem do site.
          </li>
        </ul>
        <p>
          O link &quot;Abrir no mapa&quot; leva ao Google Maps em outra aba; nada é enviado ao Google antes desse clique. Os dados
          não são vendidos nem usados para publicidade.
        </p>

        <h2 id="internacional">Transferência internacional</h2>
        <p>
          O Calendly, o Google e a Cloudflare podem guardar dados em servidores fora do Brasil, principalmente nos Estados
          Unidos. Essas empresas adotam cláusulas contratuais e medidas de segurança previstas na LGPD (art. 33) para essa
          transferência.
        </p>

        <h2 id="cookies">Cookies</h2>
        <p>O site usa dois tipos de armazenamento no seu navegador:</p>
        <div className="tabela-rolagem" tabIndex={0} aria-label="Tabela de cookies; rola na horizontal">
          <table>
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Tipo</th>
                <th scope="col">Para quê</th>
                <th scope="col">Duração</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">dra-ms-cookies</th>
                <td>Necessário (armazenamento local)</td>
                <td>Lembrar a sua escolha sobre cookies</td>
                <td>12 meses</td>
              </tr>
              <tr>
                <th scope="row">_ga, _ga_*</th>
                <td>Análise (Google Analytics), só com aceite</td>
                <td>Contar visitas sem identificar você</td>
                <td>Até 2 anos</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Você pode aceitar, recusar ou mudar a sua escolha a qualquer momento. Recusar não muda nada no funcionamento do site.
        </p>
        <div>
          <GerenciarCookiesBotao />
        </div>

        <h2 id="direitos">Seus direitos</h2>
        <p>Pela LGPD (art. 18), você pode pedir, a qualquer momento:</p>
        <ul>
          <li>confirmação de que tratamos dados seus e acesso a eles;</li>
          <li>correção de dados incompletos ou errados;</li>
          <li>anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>portabilidade;</li>
          <li>eliminação dos dados tratados com o seu consentimento e informação sobre com quem foram compartilhados;</li>
          <li>revogação do consentimento.</li>
        </ul>
        <p>
          Para isso, fale pelo WhatsApp {telefoneVisivel}. A resposta vem em até 15 dias. Você também pode reclamar à Autoridade
          Nacional de Proteção de Dados (ANPD), em gov.br/anpd.
        </p>

        <h2 id="seguranca">Segurança</h2>
        <p>
          O site é estático, servido por conexão segura (HTTPS), e não guarda dados pessoais em banco próprio. O acesso às contas de
          agenda e de mensagens é restrito ao consultório. Se acontecer um incidente de segurança que possa trazer risco a você, você
          e a ANPD serão avisados, como determina a LGPD (art. 48).
        </p>

        <h2 id="menores">Idade</h2>
        <p>O atendimento é para pessoas a partir de 18 anos, e o site não se destina a menores de idade.</p>

        <h2 id="mudancas">Mudanças nesta política</h2>
        <p>
          Esta política pode ser atualizada. A data no topo mostra a versão em vigor. Veja também os{" "}
          <Link href="/termos/">Termos de uso</Link>.
        </p>
      </PaginaLegal>
    </>
  );
}
