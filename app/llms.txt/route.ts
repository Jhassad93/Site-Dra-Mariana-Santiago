import { procedimentos } from "@/lib/procedimentos";
import { siteUrl } from "@/lib/seo";
import { endereco, horarios, identificacao, notaPortfolio, telefoneVisivel } from "@/lib/site";

export const dynamic = "force-static";

// /llms.txt a partir do BRIEF.md e dos textos aprovados. Harness: nunca "dermatologista" nem especialidade (R2),
// sem promessa de resultado (R4), sem preço de procedimento (R8).
export function GET() {
  const u = (c: string) => `${siteUrl}${c}`;
  const texto = `# ${identificacao.nome}

> Médica com consultório próprio na ${endereco.linha1}, ${endereco.linha2}. Atende procedimentos estéticos faciais com consulta de avaliação e um plano antes de qualquer procedimento: o que fazer, quando, quais cuidados e quais riscos.

- Identificação: ${identificacao.nome}, ${identificacao.registro}

${notaPortfolio}
- Horários: ${horarios.map((h) => `${h.dias.toLowerCase()}, ${h.horas}`).join("; ")}.
- Agendamento: WhatsApp ${telefoneVisivel} ou agenda online no site. O valor da consulta é informado no agendamento.
- Atendimento a partir de 18 anos. O site é informativo: não faz diagnóstico nem indica tratamento, e prazos variam de pessoa para pessoa.

## Procedimentos
${procedimentos.map((p) => `- [${p.nome}](${u(p.href)}): ${p.umaLinha}`).join("\n")}

## Consultório
- [Como funciona a consulta](${u("/como-funciona/")}): conversa, avaliação, plano com prazos e riscos, decisão e retorno.
- [Sobre a Dra. Helena Duarte](${u("/sobre/")}): formação e registro profissional.
- [Agendar consulta](${u("/agendar/")}): WhatsApp, agenda online, horários e endereço.

## Opcional
- [Perguntas frequentes](${u("/perguntas-frequentes/")})
- [O que muda na pele na menopausa](${u("/guias/pele-na-menopausa/")})
- [Política de privacidade](${u("/privacidade/")})
- [Termos de uso](${u("/termos/")})
`;
  return new Response(texto, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
