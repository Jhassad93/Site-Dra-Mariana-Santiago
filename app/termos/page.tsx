import type { Metadata } from "next";
import { metadados } from "@/lib/seo";
import { Migalhas } from "@/components/seo/json-ld";
import Link from "next/link";
import { PaginaLegal } from "@/components/layout/pagina-legal";
import { telefoneVisivel, whatsappHref } from "@/lib/site";

// RASCUNHO PARA REVISÃO JURÍDICA (responsável, advogado; depois a Dra.). Harness: R4 (atividade-meio), R11 (site não consulta).
export const metadata: Metadata = metadados({
  titulo: "Termos de uso | Dra. Helena Duarte",
  descricao: "Condições de uso do site da Dra. Helena Duarte, médica na Av. Paulista.",
  caminho: "/termos/",
});

export default function Termos() {
  return (
    <>
      <Migalhas itens={[["Termos de uso", "/termos/"]]} />
      <PaginaLegal titulo="Termos de uso" atualizacao="22 de outubro de 2026">
        <p>
          Estes termos valem para o uso deste site, mantido pela Dra. Helena Duarte, médica (CRM-SP 123456*), com
          consultório na Av. Paulista, Bela Vista, São Paulo/SP. Ao usar o site, você concorda com eles.
        </p>

        <h2 id="finalidade">Para que serve o site</h2>
        <p>
          O site apresenta o consultório, explica como funciona a consulta e traz informações gerais sobre procedimentos
          estéticos faciais, para ajudar você a se preparar para a consulta e a agendá-la.
        </p>

        <h2 id="informativo">Conteúdo informativo, não é consulta</h2>
        <ul>
          <li>
            O conteúdo do site é educativo e geral. Ele não substitui a consulta, não faz diagnóstico e não indica tratamento para
            ninguém.
          </li>
          <li>
            A indicação de qualquer procedimento é individual e só acontece depois da avaliação em consulta. Prazos e efeitos
            descritos no site são médias de estudos e variam de pessoa para pessoa.
          </li>
          <li>
            A medicina é uma atividade de meio: a médica se compromete com a conduta adequada ao seu caso, informando benefícios,
            riscos e alternativas, mas não pode garantir resultado.
          </li>
          <li>Usar o site ou trocar mensagens de agendamento não cria, por si só, relação médico-paciente.</li>
        </ul>

        <h2 id="agendamento">Agendamento</h2>
        <p>
          O agendamento é feito pelo WhatsApp ou por uma agenda online de um serviço externo (Calendly). Esses serviços têm termos
          e políticas próprios. A consulta só fica confirmada depois da confirmação do consultório ou da agenda. Cancelamentos e
          remarcações devem ser avisados com pelo menos 24 horas de antecedência. O valor da consulta e as formas de pagamento
          são informados no agendamento.
        </p>

        <h2 id="urgencia">Urgências</h2>
        <p>
          O site e o WhatsApp do consultório não são canais de urgência. Em caso de urgência ou emergência médica, procure um
          pronto-socorro ou ligue 192 (SAMU).
        </p>

        <h2 id="propriedade">Textos e imagens</h2>
        <p>
          Os textos, a identidade visual e as imagens do site pertencem à Dra. Helena Duarte ou são usados com
          autorização ou licença. As imagens de ambiente foram geradas com ferramenta de inteligência artificial e não mostram
          pacientes nem resultados de procedimentos. Você pode compartilhar links do site, mas não pode copiar o conteúdo para uso
          comercial sem autorização.
        </p>

        <h2 id="links">Links para outros sites</h2>
        <p>
          O site tem links para serviços de terceiros, como WhatsApp, Calendly, Google Maps, Instagram, TikTok e as fontes
          científicas citadas. O consultório não controla esses sites e não responde pelo conteúdo ou pelas práticas deles.
        </p>

        <h2 id="privacidade">Privacidade</h2>
        <p>
          O tratamento de dados pessoais está descrito na <Link href="/privacidade/">Política de privacidade</Link>.
        </p>

        <h2 id="mudancas">Mudanças nestes termos</h2>
        <p>Estes termos podem ser atualizados. A data no topo mostra a versão em vigor.</p>

        <h2 id="lei">Lei aplicável</h2>
        <p>
          Estes termos seguem as leis brasileiras, inclusive o Código de Defesa do Consumidor. Fica eleito o foro do domicílio do
          consumidor.
        </p>

        <h2 id="contato">Contato</h2>
        <p>
          Dúvidas sobre estes termos:{" "}
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
            WhatsApp {telefoneVisivel}
          </a>
          .
        </p>
      </PaginaLegal>
    </>
  );
}
