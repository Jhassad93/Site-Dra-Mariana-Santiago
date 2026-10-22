// Perguntas frequentes (COPY.md). RASCUNHO até a aprovação da Dra.
// [A CONFIRMAR]: procedimento no mesmo dia (2), protocolo e horário de resposta para intercorrências (17).
export type Pergunta = { pergunta: string; resposta: string; link?: { href: string; texto: string } };

export const grupos: { titulo: string; id: string; itens: Pergunta[] }[] = [
  {
    titulo: "Sobre a consulta",
    id: "consulta",
    itens: [
      { pergunta: "Quanto custa a consulta?", resposta: "O valor da consulta e as formas de pagamento são informados no agendamento. O investimento de um procedimento é apresentado na consulta, antes de qualquer decisão, porque depende da indicação." },
      { pergunta: "Já faço o procedimento na primeira consulta?", resposta: "Pode acontecer, quando a indicação é clara e você se sente segura para decidir. Se preferir pensar, o plano fica com você e marcamos depois." },
      { pergunta: "Preciso saber o que quero fazer antes de marcar?", resposta: "Não. A consulta começa pelo que incomoda você. A indicação vem depois da avaliação." },
      { pergunta: "Como funciona o retorno?", resposta: "Cerca de 15 dias depois de um procedimento, você volta para avaliarmos juntas a resposta. O retorno já faz parte do procedimento." },
      { pergunta: "Você atende quem já fez procedimentos em outro lugar?", resposta: "Sim. Conte o que fez, quando e, se souber, qual produto foi usado. A avaliação considera tudo isso, sem julgamento, e às vezes o melhor começo é esperar." },
      { pergunta: "Com que idade faz sentido começar?", resposta: "Não existe idade certa para todo mundo. Para muitas pessoas mais jovens, a primeira indicação é uma rotina de cuidados com a pele e proteção solar. Atendo a partir de 18 anos." },
    ],
  },
  {
    titulo: "Sobre os procedimentos",
    id: "procedimentos",
    itens: [
      { pergunta: "Vou ficar com aparência artificial?", resposta: "Ninguém pode garantir como cada pessoa vai responder. O que eu posso fazer é planejar com você: doses e áreas definidas na avaliação, começar pelo necessário e avaliar a resposta no retorno antes de qualquer passo seguinte." },
      { pergunta: "Posso voltar ao trabalho no mesmo dia?", resposta: "Na maioria dos procedimentos injetáveis, sim, com alguns cuidados nas primeiras horas. Pode haver inchaço ou pequenas marcas roxas por alguns dias, às vezes até duas semanas no preenchimento, e o peeling pode descamar por uma semana ou mais. Em cada página de procedimento estão os cuidados e prazos." },
      { pergunta: "Com quanto tempo de antecedência planejar antes de um evento?", resposta: "Depende do procedimento. A toxina leva cerca de duas semanas para chegar ao efeito pleno, o preenchimento labial pode deixar inchaço por uma a duas semanas e o bioestimulador age ao longo de meses. Para datas importantes, converse comigo com algumas semanas, ou meses, de antecedência." },
      { pergunta: "Em quantos dias a toxina botulínica começa a agir e quanto tempo dura?", resposta: "Começa em 1 a 2 dias, chega ao efeito pleno por volta de 2 semanas e dura, em média, de 3 a 4 meses. Varia de pessoa para pessoa.", link: { href: "/procedimentos/toxina-botulinica/", texto: "Mais sobre a toxina botulínica" } },
      { pergunta: "Quando a toxina passa, a ruga fica pior?", resposta: "Não há evidência disso. O músculo volta aos poucos ao que era antes." },
      { pergunta: "Quanto tempo o roxo ou o inchaço do preenchimento demora a sair?", resposta: "Em geral, de alguns dias a uma semana; em algumas pessoas, até duas semanas.", link: { href: "/procedimentos/preenchimento-labial/", texto: "Mais sobre o preenchimento labial" } },
      { pergunta: "Quantas sessões de bioestimulador são necessárias?", resposta: "Em geral, de 2 a 4, com intervalo de 3 a 8 semanas, e a pele responde aos poucos, ao longo de meses.", link: { href: "/procedimentos/bioestimuladores-de-colageno/", texto: "Mais sobre bioestimuladores" } },
      { pergunta: "Skinbooster é a mesma coisa que preenchimento?", resposta: "É a mesma substância, mas aplicada em microgotas na pele para hidratar e melhorar a textura, sem criar volume.", link: { href: "/procedimentos/skinbooster/", texto: "Mais sobre o skinbooster" } },
      { pergunta: "Pode fazer peeling no verão?", resposta: "Pode, com proteção solar rigorosa. Os peelings mais profundos costumam ficar para os meses mais frios.", link: { href: "/procedimentos/peelings/", texto: "Mais sobre peelings" } },
    ],
  },
  {
    titulo: "Sobre segurança",
    id: "seguranca",
    itens: [
      { pergunta: "Quais são os riscos?", resposta: "Todo procedimento pode ter efeitos adversos. Os mais comuns são passageiros, como inchaço, vermelhidão e pequenas marcas roxas. Complicações mais sérias são raras, mas existem, e cada página de procedimento lista as possíveis. Na consulta, falamos dos riscos do seu plano antes de qualquer decisão." },
      { pergunta: "E se acontecer uma intercorrência?", resposta: "Você tem um canal direto comigo pelo WhatsApp depois do procedimento. Se notar algo diferente do que conversamos, como dor forte, mudança de cor na pele ou alteração na visão, avise na hora." },
      { pergunta: "Posso fazer grávida ou amamentando?", resposta: "Os procedimentos injetáveis e a maioria dos peelings não são indicados durante a gestação e a amamentação. Conte na consulta, e planejamos para depois." },
    ],
  },
];
