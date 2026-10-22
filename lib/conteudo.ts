// Textos do site, copiados de docs/COPY.md (RASCUNHO aprovado pelo responsável em 22/10/2026;
// a versão final depende da aprovação da Dra.). Alterar aqui só junto com o COPY.md.

export const hero = {
  titulo: "Procedimentos estéticos faciais, planejados no seu\u00a0tempo",
  apoio:
    "Antes de qualquer procedimento, uma consulta para entender o que incomoda você. Se fizer sentido seguir, você sai com um plano: o que fazer, quando, quais cuidados e quais riscos.",
  horario: "Terças e sextas até 21h, sábados pela manhã. Av. Paulista, 1048.",
};

export const comoTrabalho = {
  titulo: "Como eu trabalho",
  apoio: "A consulta segue sempre a mesma ordem. Nada é feito fora do que combinamos.",
  etapas: [
    {
      titulo: "Conversa",
      texto: "Começo perguntando o que incomoda você e o que você espera. Sem lista pronta de procedimentos.",
    },
    {
      titulo: "Avaliação",
      texto:
        "Examino a pele e o rosto, pergunto sobre saúde, rotina e procedimentos anteriores. Às vezes a indicação é cuidar da pele em casa ou não fazer nada agora.",
    },
    {
      titulo: "Plano",
      texto:
        "Se fizer sentido seguir, explico o que indico, em que ordem, quanto tempo cada etapa leva para responder e o investimento. A decisão é sua, com calma.",
    },
    {
      titulo: "Retorno",
      texto:
        "Cerca de 15 dias depois do procedimento, você volta para avaliarmos juntas a resposta. O retorno já faz parte do procedimento.",
    },
  ],
};

export const procedimentosDestaque = [
  {
    href: "/procedimentos/toxina-botulinica/",
    nome: "Toxina botulínica",
    indicacao: "Linhas de expressão da testa, entre as sobrancelhas e ao redor dos olhos",
    dado: { valor: "~2 semanas", rotulo: "até o efeito pleno, varia de pessoa para pessoa" },
  },
  {
    href: "/procedimentos/bioestimuladores-de-colageno/",
    nome: "Bioestimuladores de colágeno",
    indicacao: "Firmeza e qualidade da pele, ao longo de meses",
    dado: { valor: "2 a 4 sessões", rotulo: "efeito que aparece aos poucos, ao longo de meses" },
  },
  {
    href: "/procedimentos/preenchimento-labial/",
    nome: "Preenchimento labial",
    indicacao: "Contorno e hidratação dos lábios",
    dado: { valor: "1 a 2 semanas", rotulo: "para o inchaço ceder, varia de pessoa para pessoa" },
  },
];

export const procedimentosCompactos = [
  { href: "/procedimentos/contorno-facial/", nome: "Contorno facial" },
  { href: "/procedimentos/skinbooster/", nome: "Skinbooster" },
  { href: "/procedimentos/peelings/", nome: "Peelings" },
];

export const planejamento = {
  titulo: "Cada procedimento tem o seu tempo de resposta",
  texto:
    "Alguns agem em dias, outros ao longo de meses, e quase todos podem deixar o rosto inchado ou marcado por alguns dias, às vezes por duas semanas. Por isso, se você tem uma data importante, vale conversar com antecedência. Assim o plano respeita o prazo de cada etapa, e não o contrário.",
  regua: [
    { quando: "Hoje", oQue: "Consulta e avaliação" },
    { quando: "1 a 2 semanas", oQue: "O inchaço dos injetáveis costuma ceder; a toxina chega ao efeito pleno" },
    { quando: "1 a 2 meses", oQue: "O bioestimulador começa a agir, aos poucos, entre uma sessão e outra" },
    { quando: "3 a 4 meses", oQue: "O efeito da toxina diminui; nova etapa do plano, se indicada" },
    { quando: "6 meses", oQue: "Revisão do plano" },
  ],
  nota: "Prazos médios descritos nos estudos citados nas páginas de procedimento; variam de pessoa para pessoa e de produto para produto.",
};

export const faqHome = [
  {
    pergunta: "Quanto custa a consulta?",
    resposta:
      "O valor da consulta e as formas de pagamento são informados no agendamento. O investimento de um procedimento é apresentado na consulta, antes de qualquer decisão, porque depende da indicação.",
  },
  {
    pergunta: "Já faço o procedimento na primeira consulta?",
    resposta:
      "Pode acontecer, quando a indicação é clara e você se sente segura para decidir. Se preferir pensar, o plano fica com você e marcamos depois.",
  },
  {
    pergunta: "Vou ficar com aparência artificial?",
    resposta:
      "Ninguém pode garantir como cada pessoa vai responder. O que eu posso fazer é planejar com você: doses e áreas definidas na avaliação, começar pelo necessário e avaliar a resposta no retorno antes de qualquer passo seguinte.",
  },
  {
    pergunta: "Posso voltar ao trabalho no mesmo dia?",
    resposta:
      "Na maioria dos procedimentos injetáveis, sim, com alguns cuidados nas primeiras horas. Pode haver inchaço ou pequenas marcas roxas por alguns dias, às vezes até duas semanas no preenchimento, e o peeling pode descamar por uma semana ou mais. Em cada página de procedimento estão os cuidados e prazos.",
  },
  {
    pergunta: "Você atende quem já fez procedimentos em outro lugar?",
    resposta:
      "Sim. Conte o que fez, quando e, se souber, qual produto foi usado. A avaliação considera tudo isso, sem julgamento, e às vezes o melhor começo é esperar.",
  },
];

export const ondeQuando = {
  titulo: "Onde e quando",
  texto:
    "Av. Paulista, 1048, 18º andar, a uma quadra do metrô Trianon-Masp. Atendo às terças e sextas, das 13h às 21h, e aos sábados, das 8h às 14h, horários pensados para quem trabalha durante o dia.",
  comoChegar: "O prédio tem estacionamento no subsolo.",
  mapa: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Av. Paulista, 1048, São Paulo, SP"),
};

export const fechamento = {
  frase:
    "Antes de qualquer procedimento, eu quero entender o que incomoda você. Daí em diante, decidimos juntas, no seu\u00a0tempo.",
};

// Decisão 4 do harness: vazio = não aparece. Preencher só depois do ajuste do perfil no Google.
export const perfilGoogle = process.env.NEXT_PUBLIC_GOOGLE_PERFIL_URL || "";
