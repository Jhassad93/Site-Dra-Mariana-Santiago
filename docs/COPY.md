# Copy do site — Dra. Helena Duarte

> **RASCUNHO para revisão (Etapa 4, 22/10/2026).** Nenhum texto daqui vai ao ar como definitivo sem a aprovação da Dra. Helena (harness R11).
> Fontes: `BRIEF.md` (premissas do protótipo), `PERSONAS.md` (crenças U1–U7, banco de frases e FAQ priorizado), `DESIGN.md` (estrutura das seções), `APP_FLOW.md` (estados) e o dossiê de procedimentos com fontes (`docs/FONTES_PROCEDIMENTOS.md`).
> **Convenções:** `[A CONFIRMAR: …]` = fato que só a Dra. pode dar; até lá, o site usa a versão neutra escrita ao lado. **Voz:** o texto do método fala em primeira pessoa (a Dra.); o texto informativo é impessoal. Frases em *itálico* são a "voz da Dra." e saem em Libre Caslon.
> **Regras de escrita:** nunca "dermatologista", "especialista", "harmonização", marca de produto, "grátis", "sem dor", "garantido", "natural" como promessa, superlativos sobre ela; todo prazo em faixa e com "varia de pessoa para pessoa"; todo procedimento com indicação individual e possíveis complicações (R2–R5, R9).

---

## Elementos globais

**Identificação (R1), sempre em duas linhas iguais:**
Dra. Helena Duarte
MÉDICA: CRM-SP 123456*

**Botão principal:** Agendar consulta → WhatsApp, mensagem "Olá! Vim pelo site e gostaria de agendar uma consulta."
**Link secundário:** Ver horários disponíveis → /agendar/
**Horários:** Terça e sexta, 13h às 21h. Sábado, 8h às 14h. `[A CONFIRMAR: horários atuais]`
**Endereço:** Av. Paulista, Bela Vista, São Paulo/SP.
**Como chegar:** A uma quadra da estação Trianon-Masp do metrô (linha 2-Verde). O prédio tem estacionamento no subsolo. `[A CONFIRMAR: estacionamento pago ou conveniado]` (fonte: página da unidade Paulista do prédio comercial)
**Valor da consulta:** "O valor da consulta e as formas de pagamento são informados no agendamento." `[A CONFIRMAR: se a Dra. quer publicar o valor (permitido, R8)]`

---

## Home `/`

**Title:** Dra. Helena Duarte | Médica, procedimentos estéticos faciais na Av. Paulista
**Description:** Consulta com a Dra. Helena Duarte, médica (CRM-SP 123456*), na Av. Paulista. Avaliação antes de qualquer procedimento, com prazos, cuidados e riscos explicados. Terças e sextas até 21h e sábados.

### Hero
**H1:** Procedimentos estéticos faciais, planejados no seu tempo
**Apoio:** Antes de qualquer procedimento, uma consulta para entender o que incomoda você. Se fizer sentido seguir, você sai com um plano: o que fazer, quando, quais cuidados e quais riscos.
**CTA:** Agendar consulta · **Link:** Ver horários disponíveis
**Assinatura:** *Helena Duarte* + identificação R1
**Linha de horário:** Terças e sextas até 21h, sábados pela manhã. Av. Paulista.

### Como eu trabalho
**H2:** Como eu trabalho
**Apoio:** A consulta segue sempre a mesma ordem. Nada é feito fora do que combinamos.

| Etapa | Título | Texto |
| --- | --- | --- |
| 1 | Conversa | Começo perguntando o que incomoda você e o que você espera. Sem lista pronta de procedimentos. |
| 2 | Avaliação | Examino a pele e o rosto, pergunto sobre saúde, rotina e procedimentos anteriores. Às vezes a indicação é cuidar da pele em casa ou não fazer nada agora. |
| 3 | Plano | Se fizer sentido seguir, explico o que indico, em que ordem, quanto tempo cada etapa leva para responder e o investimento. A decisão é sua, com calma. |
| 4 | Retorno | Cerca de 15 dias depois do procedimento, você volta para avaliarmos juntas a resposta. O retorno já faz parte do procedimento. |

**Link:** Entender como funciona a consulta → /como-funciona/

### Procedimentos
**H2:** Procedimentos
**Apoio:** Cada página explica para que serve, como é feito, quanto tempo leva para responder e quais são os riscos. A indicação é sempre individual, definida na consulta.

Cards grandes (faixa de dados + legenda): ver "Dados dos cards" em cada página de procedimento.
- Toxina botulínica · legenda: Linhas de expressão da testa, entre as sobrancelhas e ao redor dos olhos
- Bioestimuladores de colágeno · legenda: Firmeza e qualidade da pele, ao longo de meses
- Preenchimento labial · legenda: Contorno e hidratação dos lábios

Cards compactos: Contorno facial · Skinbooster · Peelings
**Link:** Ver todos os procedimentos → /procedimentos/

### Planejamento no tempo (fundo Tinta)
**H2:** Cada procedimento tem o seu tempo de resposta
**Texto:** Alguns agem em dias, outros ao longo de meses, e quase todos podem deixar o rosto inchado ou marcado por alguns dias, às vezes por duas semanas. Por isso, se você tem uma data importante, vale conversar com antecedência. Assim o plano respeita o prazo de cada etapa, e não o contrário.
**Régua (faixas, varia de pessoa para pessoa):**
- Hoje: consulta e avaliação
- 1 a 2 semanas: o inchaço dos injetáveis costuma ceder; a toxina chega ao efeito pleno
- 1 a 2 meses: o bioestimulador começa a agir, aos poucos, entre uma sessão e outra
- 3 a 4 meses: o efeito da toxina diminui; nova etapa do plano, se indicada
- 6 meses: revisão do plano
**Nota:** Prazos médios descritos nos estudos citados nas páginas de procedimento; variam de pessoa para pessoa e de produto para produto.

### Perguntas frequentes (5)
1. Quanto custa a consulta?
2. Já faço o procedimento na primeira consulta?
3. Vou ficar com aparência artificial?
4. Posso voltar ao trabalho no mesmo dia?
5. Você atende quem já fez procedimentos em outro lugar?
*(respostas iguais às da página Perguntas frequentes)*
**Link:** Ver todas as perguntas → /perguntas-frequentes/

### Onde e quando
**H2:** Onde e quando
**Texto:** Av. Paulista, a uma quadra do metrô Trianon-Masp. Atendo às terças e sextas, das 13h às 21h, e aos sábados, das 8h às 14h, horários pensados para quem trabalha durante o dia.
**Link:** Abrir no mapa (Google Maps pelo endereço). **Previsto:** "Ver no Google" (perfil), só quando `NEXT_PUBLIC_GOOGLE_PERFIL_URL` estiver preenchido (decisão 4)

### Fechamento (gradiente Areia → Gesso, foto da Dra.)
**Voz da Dra.:** *Antes de qualquer procedimento, eu quero entender o que incomoda você. Daí em diante, decidimos juntas, no seu tempo.* (decisão 3: reescrita em 22/10/2026; ecoa o título do hero, "planejados no seu tempo")
**Alternativas, se a Dra. preferir:** *"…Daí em diante, cada passo é combinado com você."* · *"…E, se a resposta for esperar, eu vou dizer."*
**Assinatura + identificação R1 + CTA:** Agendar consulta

---

## Como funciona a consulta `/como-funciona/`

**Title:** Como funciona a consulta | Dra. Helena Duarte, médica na Av. Paulista
**Description:** O que acontece na consulta com a Dra. Helena Duarte: conversa, avaliação, plano com prazos e riscos, decisão sua e retorno. Valor da consulta, horários e o que levar.

**H1:** Como funciona a consulta
**Apoio:** O que acontece em cada etapa, da primeira conversa ao retorno.

### 1. A conversa
Começo pelo que incomoda você, com as suas palavras. Também quero saber o que você já tentou, o que espera e o que não quer de jeito nenhum. Se você tem medo de ficar com o rosto diferente, me conte: é um bom ponto de partida.

### 2. A avaliação
Examino a pele e o rosto com calma: estrutura, expressão, qualidade da pele. Pergunto sobre saúde, medicamentos, alergias, gestação ou amamentação e procedimentos anteriores, porque tudo isso muda a indicação. Nem toda queixa se resolve com injetável, e algumas pedem outro tipo de cuidado. Quando é o caso, eu digo.

### 3. O plano
Se fizer sentido seguir, monto um plano com você:
- o que indico e por quê;
- em que ordem e com que intervalo;
- quanto tempo cada etapa costuma levar para responder;
- os cuidados antes e depois;
- os riscos de cada procedimento;
- o investimento, apresentado antes de qualquer procedimento.

*Nada é feito fora do que combinamos no plano.*

### 4. A decisão é sua
Você pode decidir na hora ou levar o plano para pensar. `[A CONFIRMAR: se o procedimento pode ser feito no mesmo dia da consulta e se o plano é entregue por escrito]` Versão neutra até confirmar: "Quando a indicação é clara e você se sente segura, o procedimento pode ser feito no mesmo dia. Se preferir pensar, marcamos depois."

### 5. O procedimento
No dia, revisamos o plano, você assina o termo de consentimento e eu explico de novo o que vai acontecer. O nome do produto e o lote ficam registrados no seu prontuário, e você pode pedir essa informação. `[A CONFIRMAR: termo de consentimento e registro de lote]`

### 6. O retorno
Cerca de 15 dias depois, você volta para avaliarmos juntas a resposta. É nesse momento que vemos se algo precisa de ajuste. O retorno já faz parte do procedimento.

### Se algo fugir do esperado
Depois de qualquer procedimento, você tem um canal direto comigo pelo WhatsApp para dúvidas e para avisar se notar algo diferente do que conversamos. `[A CONFIRMAR: protocolo para intercorrências e horário de resposta]`

### Planejamento no tempo
Mesma régua da home, com o texto: "Para uma data importante, como um casamento, uma viagem ou uma apresentação, o ideal é conversar com algumas semanas de antecedência. Alguns procedimentos deixam o rosto inchado por dias; outros agem ao longo de meses."

### Informações práticas
- **Valor:** o valor da consulta e as formas de pagamento são informados no agendamento.
- **Duração da consulta:** `[A CONFIRMAR]`
- **O que levar:** exames recentes, se tiver, e a lista dos medicamentos que você usa. Se puder, venha sem maquiagem. (base: orientações do site atual)
- **Chegada:** chegue com 20 minutos de antecedência para o cadastro na recepção do prédio. (base: site atual) `[A CONFIRMAR]`
- **Cancelamento:** avise com pelo menos 24 horas de antecedência. (base: site atual)
- **Idade:** atendo pacientes a partir de 18 anos. (base: site atual)

**CTA final:** Agendar consulta · Ver horários disponíveis

---

## Procedimentos (índice) `/procedimentos/`

**Title:** Procedimentos estéticos faciais | Dra. Helena Duarte, médica na Av. Paulista
**Description:** Toxina botulínica, preenchimento labial, contorno facial com ácido hialurônico, bioestimuladores de colágeno, skinbooster e peelings: para que servem, prazos, cuidados e riscos.

**H1:** Procedimentos
**Apoio:** Aqui você encontra o que cada procedimento faz, quanto tempo leva para responder, os cuidados e os riscos. A indicação é sempre individual: é na consulta que vemos juntas o que faz sentido para o seu rosto, inclusive quando a resposta é não fazer nada agora.

| Procedimento | Uma linha |
| --- | --- |
| Toxina botulínica | Suaviza linhas de expressão relaxando músculos específicos. Efeito temporário. |
| Preenchimento labial | Ácido hialurônico para contorno, volume discreto e hidratação dos lábios. |
| Contorno facial | Ácido hialurônico em áreas como maçãs do rosto, mandíbula, queixo e olheiras, em etapas. |
| Bioestimuladores de colágeno | Estimulam a produção de colágeno; a mudança é gradual, ao longo de meses. |
| Skinbooster | Ácido hialurônico para hidratação e qualidade da pele, sem criar volume. |
| Peelings | Renovação controlada da camada superficial da pele para textura e uniformidade. |

**Nota educativa (R3):** "Acne, melasma e rosácea são condições de pele que precisam de diagnóstico médico. Se é isso que incomoda você, conte na consulta: a avaliação vem antes de qualquer indicação."
**CTA:** Agendar consulta

---

## Páginas de procedimento

> Estrutura obrigatória (IMPLEMENTATION_PLAN, Etapa 4): **para que serve (indicação)** · **como é feito** · **régua do tempo** (faixas + "varia de pessoa para pessoa" + fonte) · **o que esperar depois** · **possíveis efeitos e complicações** · **"Na consulta, eu…"** · **perguntas**. Os números vêm de `docs/FONTES_PROCEDIMENTOS.md`.

**Fontes citadas no site (links sem marca comercial):** cada página termina com uma linha "Fontes", em texto pequeno, com autor, ano e link (o link e o título completo ficam em `FONTES_PROCEDIMENTOS.md`; nomes de revista com "Dermatology" ficam só no link, para não confundir com qualificação da Dra.). Os prazos são os descritos nos estudos e variam de pessoa para pessoa, de produto para produto e de área para área. A Dra. valida cada prazo antes de publicar (decisão 🟡 5).

### Toxina botulínica `/procedimentos/toxina-botulinica/`

**Title:** Toxina botulínica na Av. Paulista | Dra. Helena Duarte, médica
**Description:** Para que serve a toxina botulínica, como é feita, em quantos dias começa a agir, quanto dura, cuidados e possíveis complicações. Consulta com a Dra. Helena Duarte, médica na Av. Paulista.
**Dados do card:** "~2 semanas" · "até o efeito pleno, varia de pessoa para pessoa" · legenda: Linhas de expressão da testa, entre as sobrancelhas e ao redor dos olhos

**H1:** Toxina botulínica
**Resumo:** Relaxa músculos específicos da expressão para suavizar as linhas que eles formam. O efeito é temporário e a dose é definida na avaliação.

#### Para que serve
Linhas que aparecem quando você franze a testa, junta as sobrancelhas ou sorri com os olhos. É a queixa de quem se acha com "cara de cansada" ou "de brava" nas fotos e nas videochamadas. A toxina age no músculo, não na pele. Por isso ela ajuda pouco em linhas que já estão marcadas mesmo com o rosto parado, e às vezes o plano combina outro cuidado.

#### Como é feito
Pequenas aplicações com agulha bem fina, em pontos escolhidos na avaliação. Gelo antes e depois ajuda no desconforto. A quantidade e os pontos são pensados para suavizar a linha sem tirar o movimento que faz o seu rosto ser o seu.

#### Quanto tempo leva
- **1 a 2 dias:** o efeito começa e aumenta ao longo da primeira semana
- **Cerca de 2 semanas:** efeito pleno. É quando fazemos o retorno
- **3 a 4 meses:** o músculo volta aos poucos à atividade; em algumas pessoas, o efeito dura até 5 meses
- **Não antes de 3 meses:** intervalo mínimo para uma nova aplicação
*Prazos médios descritos nos estudos. Variam de pessoa para pessoa e com a dose.*

#### O que esperar depois
- Você volta às atividades no mesmo dia.
- Nas primeiras horas, fique sentada ou em pé (até 3 horas), sem deitar de bruços nem abaixar a cabeça por longos períodos, e deixe o exercício intenso para o dia seguinte.
- Pequenos pontos vermelhos ou um roxinho no local podem aparecer e somem em poucos dias.
- Não massageie a região sem orientação.

#### Possíveis efeitos e complicações
- **Comuns e passageiros:** dor leve, roxo ou inchaço no ponto da aplicação; dor de cabeça (cerca de 1 em cada 10 pessoas nos estudos).
- **Incomuns:** queda da pálpebra ou da sobrancelha, em cerca de 1 a 3 em cada 100 pessoas, conforme o estudo e a área. É temporária e pode durar até cerca de 3 meses. Assimetria leve, que se avalia no retorno.
- **Raros:** reação alérgica; efeito à distância do local (visão dupla, dificuldade para engolir ou respirar). Nas doses usadas em estética, não há casos graves confirmados nos estudos da bula, mas o risco existe e é por isso que a dose é sempre individual.
- **Quando avisar na hora:** visão dupla, pálpebra muito caída, dificuldade para engolir, falar ou respirar.

#### Quando não é indicado
Gestação e amamentação; alergia a qualquer toxina botulínica; infecção no local; doenças neuromusculares, como miastenia gravis. Conte na consulta todos os medicamentos que você usa.

#### Na consulta, eu…
*…olho como o seu rosto se mexe antes de pensar em dose. Quero entender quais linhas incomodam você e quais fazem parte do jeito como você se expressa.*

#### Perguntas
- **Em quantos dias começa a agir e quanto tempo dura?** Começa em 1 a 2 dias, chega ao efeito pleno por volta de 2 semanas e dura, em média, de 3 a 4 meses. Varia de pessoa para pessoa.
- **Quando o efeito passa, a ruga fica pior?** Não há evidência disso. O músculo volta aos poucos ao que era antes. Fazer ou parar é sempre uma escolha sua.
- **Vou conseguir mexer a testa?** O plano busca suavizar sem tirar a expressão. Por isso começamos com doses conservadoras e avaliamos no retorno.
- **Posso voltar ao trabalho?** Sim, no mesmo dia.

**Fontes:** StatPearls, "Botulinum Toxin Treatment of the Upper Face" (NCBI, NBK574523) e "Botulinum Toxin" (NBK557387).

---

### Preenchimento labial `/procedimentos/preenchimento-labial/`

**Title:** Preenchimento labial com ácido hialurônico em São Paulo | Dra. Helena Duarte, médica
**Description:** Preenchimento labial com ácido hialurônico: para que serve, como é feito, quanto tempo dura o inchaço, cuidados, possíveis complicações e o que fazer se precisar desfazer. Av. Paulista.
**Dados do card:** "1 a 2 semanas" · "para o inchaço ceder, varia de pessoa para pessoa" · legenda: Contorno e hidratação dos lábios

**H1:** Preenchimento labial
**Resumo:** Ácido hialurônico aplicado nos lábios para desenhar o contorno, repor um pouco de volume ou melhorar a hidratação, na medida combinada na avaliação.

#### Para que serve
Lábios que perderam o contorno ou o volume com o tempo, assimetrias leves, linhas finas ao redor da boca, lábios ressecados. O ácido hialurônico é uma substância que o corpo já produz; o gel usado no preenchimento é absorvido aos poucos. A ideia é ajustar, não mudar o formato da sua boca.

#### Como é feito
O gel já vem com anestésico (lidocaína) e, se for preciso, uso anestesia local antes. A aplicação é feita com agulha fina ou cânula, em pequenas quantidades, olhando o resultado de frente e de perfil. Pode haver um retoque no retorno, se combinado.

#### Quanto tempo leva
- **Na hora:** o volume do gel já aparece, junto com o inchaço
- **2 a 7 dias:** a maior parte do roxo e da sensibilidade passa
- **Cerca de 1 semana:** o inchaço costuma ceder; em algumas pessoas, leva até 2 semanas
- **Cerca de 15 dias:** retorno, já com o lábio desinchado
- **6 a 12 meses:** o gel é absorvido aos poucos; em torno de metade das pessoas ainda percebe o efeito com 1 ano
*Prazos médios descritos nos estudos. Variam de pessoa para pessoa e de produto para produto.*

#### O que esperar depois
- Inchaço, sensibilidade e roxo são esperados e podem durar de alguns dias a duas semanas. Por isso não marque o procedimento na véspera de uma data importante.
- Nas primeiras 24 horas: compressa fria por pouco tempo se inchar; nada de exercício intenso, sauna ou sol forte.
- Pequenos caroços podem ser sentidos ao toque nas primeiras semanas. Avise no retorno.

#### Possíveis efeitos e complicações
- **Comuns e passageiros:** sensibilidade, inchaço e roxo (presentes na maioria das pessoas nos primeiros dias); pequenos caroços ao toque (cerca de 5 em cada 100), que em geral somem em semanas.
- **Incomuns:** reativação de herpes labial em quem já teve; reação inflamatória ao produto; inchaço alérgico.
- **Raros e graves:** o gel entrar num vaso sanguíneo e bloquear a circulação. Isso pode causar lesão da pele e, muito raramente, alteração da visão. É raro, mas é a complicação que mais pede atenção em qualquer preenchimento, e o tratamento precisa começar o quanto antes.
- **Quando avisar na hora:** dor forte e desproporcional, pele pálida ou arroxeada em forma de rede, bolhas, qualquer alteração da visão.

#### Dá para desfazer?
O ácido hialurônico pode ser dissolvido com uma enzima chamada hialuronidase. Ela é usada principalmente para tratar complicações e também tem riscos próprios, como alergia (rara) e inchaço, além de dissolver um pouco do ácido hialurônico natural da pele. `[A CONFIRMAR: se a Dra. faz a dissolução e tem hialuronidase no consultório]`

#### Quando não é indicado
Gestação e amamentação; herpes ativo ou qualquer infecção no lábio; alergia a lidocaína; histórico de alergias graves; distúrbios de coagulação.

#### Na consulta, eu…
*…pergunto o que você quer mudar na sua boca e o que você quer manter. Muitas vezes o que incomoda é o contorno ou a hidratação, e não o tamanho.*

#### Perguntas
- **Quanto tempo o roxo e o inchaço demoram a sair?** Em geral, de alguns dias a uma semana; em algumas pessoas, até duas semanas.
- **É normal ficar endurecido?** Pequenos caroços ao toque nas primeiras semanas podem acontecer e costumam sumir. Se persistirem, avaliamos no retorno.
- **Quanto tempo dura?** De 6 a 12 meses, diminuindo aos poucos. Depende do produto, da quantidade e de como o seu corpo absorve o gel.
- **Quem tem herpes labial pode fazer?** Não com a lesão ativa. Se você costuma ter herpes, conte na consulta para planejarmos a prevenção.

**Fontes:** Czumbel et al., "Hyaluronic Acid Is an Effective Dermal Filler for Lip Augmentation: A Meta-Analysis", Frontiers in Surgery, 2021; StatPearls, "Hyaluronic Acid" (NBK482440) e "Hyaluronidase" (NBK545163); FDA, "Dermal Fillers (Soft Tissue Fillers)".

---

### Contorno facial com ácido hialurônico `/procedimentos/contorno-facial/`

**Title:** Contorno facial com ácido hialurônico em São Paulo | Dra. Helena Duarte, médica
**Description:** Preenchimento com ácido hialurônico em maçãs do rosto, mandíbula, queixo e olheiras, feito em etapas: indicações, prazos, cuidados e possíveis complicações. Av. Paulista.
**Card compacto:** Contorno facial

**H1:** Contorno facial com ácido hialurônico
**Resumo:** Ácido hialurônico aplicado em pontos de sustentação do rosto, como maçãs do rosto, mandíbula, queixo e região das olheiras, para repor o que mudou com o tempo. Feito em etapas, uma área de cada vez.

#### Para que serve
Com o tempo, o rosto perde um pouco de sustentação e volume em pontos específicos. Isso pode dar a impressão de cansaço, de "rosto caído" ou de contorno menos definido. O preenchimento repõe sustentação nesses pontos. Não é para mudar os seus traços, e nem toda queixa responde a volume: olheiras, por exemplo, têm causas diferentes, e as que vêm de pigmento ou de vasos não melhoram com preenchimento.

#### Como é feito
Um gel mais firme, com anestésico, aplicado em planos profundos com agulha ou cânula. Começamos pelo ponto que mais faz diferença para a sua queixa e avaliamos antes de seguir para o próximo. Algumas áreas, como a mandíbula, podem pedir mais de uma sessão.

#### Quanto tempo leva
- **Na hora:** o efeito aparece, com algum inchaço
- **2 a 7 dias:** a maior parte do inchaço e do roxo cede; na região das olheiras, o roxo pode durar até 2 a 4 semanas
- **Cerca de 15 dias:** retorno para avaliar e decidir a próxima etapa
- **12 a 24 meses:** duração descrita nos estudos para áreas profundas, como maçãs do rosto e mandíbula, diminuindo aos poucos. Na região das olheiras, a maioria ainda mantinha o efeito com 1 ano
*Prazos médios descritos nos estudos. Variam de pessoa para pessoa, de área para área e de produto para produto.*

#### O que esperar depois
- Volta às atividades no mesmo dia, com possível inchaço e roxo.
- Nas primeiras 24 horas: sem exercício intenso, sauna ou sol forte; compressa fria por pouco tempo se inchar.
- Evite massagear ou apertar a região, a não ser que eu oriente.

#### Possíveis efeitos e complicações
- **Comuns e passageiros:** inchaço, roxo, sensibilidade, pequenos caroços ao toque (mais frequentes na região das olheiras, onde podem durar algumas semanas).
- **Incomuns:** tom azulado quando o gel fica muito superficial (corrigível com hialuronidase); assimetria; reação inflamatória ao produto.
- **Raros e graves:** o gel entrar num vaso e bloquear a circulação. Num estudo com cerca de 1,7 milhão de seringas, isso aconteceu em cerca de 1 a cada 6.400 aplicações com agulha e 1 a cada 41.000 com cânula, e a maioria dos casos não deixou sequela. A forma mais grave é a perda de visão: rara, mas descrita, e mais ligada ao nariz, à testa e à região entre as sobrancelhas. É por isso que a escolha da área, da técnica e da quantidade é feita com cuidado e que alguns pedidos eu não faço.
- **Quando avisar na hora:** dor forte e desproporcional, pele pálida ou arroxeada em forma de rede, qualquer alteração da visão.

#### Quando não é indicado
Gestação e amamentação; infecção ou inflamação no local; alergia a lidocaína ou histórico de alergias graves; distúrbios de coagulação; tendência a queloide. Imunossupressão e uso de anticoagulantes pedem avaliação cuidadosa.

#### Na consulta, eu…
*…prefiro começar por um ponto e ver como o seu rosto responde. Nada é feito em todas as áreas de uma vez só porque é possível.*

#### Perguntas
- **Preciso fazer tudo de uma vez?** Não. O contorno é planejado em etapas, e cada etapa é avaliada antes da próxima.
- **Preenchimento resolve olheira escura?** Depende da causa. Olheira por sulco pode responder; olheira por pigmento ou por vasos, não. A avaliação diferencia.
- **Tem risco de cegueira?** É uma complicação rara, mas real, dos preenchimentos. Na consulta, explico como reduzimos esse risco e o que fazer se algo diferente acontecer.

**Fontes:** Alam et al., 2021, estudo sobre complicações de preenchimento com ácido hialurônico; Doyon et al., revisão sobre perda de visão associada a preenchedores, Aesthetic Surgery Journal, 2024; StatPearls, "Hyaluronic Acid" (NBK482440); FDA, "Dermal Fillers (Soft Tissue Fillers)".

---

### Bioestimuladores de colágeno `/procedimentos/bioestimuladores-de-colageno/`

**Title:** Bioestimuladores de colágeno em São Paulo | Dra. Helena Duarte, médica
**Description:** Como agem os bioestimuladores de colágeno, quantas sessões, em quanto tempo a pele responde, quanto dura, cuidados e possíveis complicações. Planejamento ao longo de meses, na Av. Paulista.
**Dados do card:** "2 a 4 sessões" · "efeito que aparece aos poucos, ao longo de meses" · legenda: Firmeza e qualidade da pele

**H1:** Bioestimuladores de colágeno
**Resumo:** Substâncias injetadas que estimulam a pele a produzir colágeno. A mudança é gradual e acontece ao longo de meses, por isso o planejamento começa cedo.

#### Para que serve
Perda de firmeza, pele mais fina, rosto que parece "cair" com o tempo, inclusive depois da menopausa ou de um emagrecimento grande. O bioestimulador não dá volume na hora como um preenchimento. Ele estimula a produção de colágeno, e o efeito depende do tempo e do número de sessões. Os mais usados são o ácido poli-L-láctico e a hidroxiapatita de cálcio; a escolha depende da avaliação.

#### Como é feito
Em geral, de 2 a 4 sessões, com intervalo de 3 a 8 semanas. O produto é diluído e aplicado com agulha ou cânula, com anestésico. Depois de algumas aplicações, pode ser preciso massagear a região em casa por alguns dias, como vou orientar.

#### Quanto tempo leva
- **Na hora:** algum volume aparece, mas é inchaço e some em 2 a 3 dias
- **3 a 8 semanas:** intervalo entre as sessões
- **A partir de 1 a 2 meses:** a pele começa a responder, aos poucos
- **3 meses ou mais:** a mudança segue ao longo dos meses seguintes ao fim das sessões
- **12 a 24 meses:** duração descrita nos estudos, com manutenção conforme avaliação
*Prazos médios descritos nos estudos. Variam de pessoa para pessoa e de produto para produto.*

#### O que esperar depois
- Inchaço, roxo e sensibilidade nos primeiros dias são comuns.
- Massagem em casa quando eu orientar (no ácido poli-L-láctico, costuma ser 5 minutos, 5 vezes ao dia, por 5 dias).
- Nas primeiras 24 horas, evite sol e calor intensos.
- Paciência: a diferença não aparece na primeira semana.

#### Possíveis efeitos e complicações
- **Comuns e passageiros:** inchaço, roxo, vermelhidão e sensibilidade, que melhoram em até uma semana.
- **Incomuns:** pequenos nódulos sob a pele, que podem aparecer semanas ou meses depois. A maioria é discreta e some sozinha; alguns precisam de tratamento.
- **Raros e graves:** como em qualquer injetável, bloqueio de vaso sanguíneo, com risco de lesão da pele. Diferente do ácido hialurônico, os bioestimuladores não são dissolvidos pela hialuronidase, e esse é mais um motivo para escolher bem a área e a técnica.
- **Quando avisar na hora:** dor forte, pele pálida ou arroxeada em forma de rede; e, a qualquer momento, um caroço que cresça ou doa.

#### Quando não é indicado
Gestação e amamentação; tendência a queloide ou cicatriz grossa; infecção ou inflamação no local; alergia aos componentes. Doença autoimune, distúrbios de coagulação e cirurgia recente no rosto pedem avaliação. A hidroxiapatita de cálcio não é usada nos lábios.

#### Na consulta, eu…
*…explico o calendário antes de qualquer agulha: quantas sessões, com que intervalo e quando faz sentido reavaliar. Se você tem uma data em mente, é por ela que começamos a contar.*

#### Perguntas
- **Quantas sessões são necessárias?** Em geral, de 2 a 4, com intervalo de 3 a 8 semanas. O número depende da avaliação e de como a pele responde.
- **Quando começo a ver diferença?** Aos poucos, a partir do primeiro ou segundo mês, e ao longo dos meses seguintes.
- **Bioestimulador é preenchimento?** Não. Ele estimula o colágeno da própria pele; o volume que aparece no dia é inchaço.
- **Substitui uma cirurgia?** Não. Para flacidez mais intensa, a avaliação pode concluir que injetáveis não são a melhor opção, e eu digo isso na consulta.

**Fontes:** StatPearls, "Poly-L-Lactic Acid" (NBK507871); de Almeida et al., consenso sobre hidroxiapatita de cálcio diluída, Plastic and Reconstructive Surgery Global Open, 2019; ASDS, "Injectable Poly-L-lactic Acid".

---

### Skinbooster `/procedimentos/skinbooster/`

**Title:** Skinbooster em São Paulo | Dra. Helena Duarte, médica na Av. Paulista
**Description:** Skinbooster é ácido hialurônico aplicado em microgotas para hidratação e qualidade da pele. Sessões, prazos, cuidados, possíveis efeitos e a diferença para o preenchimento.
**Card compacto:** Skinbooster

**H1:** Skinbooster
**Resumo:** Ácido hialurônico mais fluido, aplicado em microgotas na pele, para melhorar hidratação, viço e linhas finas. Não dá volume e não muda o contorno.

#### Para que serve
Pele opaca, ressecada, sem viço, com linhas finas e textura irregular. É uma opção para quem quer cuidar da qualidade da pele sem mudar nada no formato do rosto. Funciona melhor junto com a rotina de cuidados em casa, que também conversamos na consulta.

#### Como é feito
Muitas pequenas aplicações na pele, com produto que já contém anestésico. Em geral são 2 a 3 sessões com cerca de 4 semanas de intervalo.

#### Quanto tempo leva
- **1 a 3 dias:** vermelhidão, inchaço e pequenas elevações no local costumam ceder
- **Até 2 semanas:** algum roxo pode durar mais
- **Cerca de 4 semanas:** intervalo entre as sessões; muitas pessoas já notam diferença em um mês
- **Cerca de 6 meses:** duração descrita nos estudos e momento de reavaliar a manutenção
*Prazos médios descritos nos estudos. Variam de pessoa para pessoa e de produto para produto.*

#### O que esperar depois
- Pequenas elevações e vermelhidão nos pontos de aplicação no primeiro dia ou dois. Planeje a sessão longe de compromissos importantes.
- Nas primeiras 24 horas: sem exercício intenso, sauna, sol forte ou massagem no rosto.
- Retome a sua rotina de cuidados quando eu orientar.

#### Possíveis efeitos e complicações
- **Comuns e passageiros:** vermelhidão, inchaço, pequenas elevações e roxo, presentes na maioria das pessoas nos primeiros dias.
- **Incomuns:** elevações que duram mais de um mês (em poucas pessoas, por muitos meses); reação alérgica.
- **Raros:** os riscos de qualquer ácido hialurônico injetável, inclusive o bloqueio de um vaso. Como é ácido hialurônico, pode ser dissolvido com hialuronidase, se necessário.

#### Quando não é indicado
Gestação e amamentação; infecção ou inflamação no local; alergia a lidocaína ou histórico de alergias graves.

#### Na consulta, eu…
*…olho também para a sua rotina. Às vezes, o que falta para a pele é mudar o cuidado em casa e a proteção solar, antes de qualquer agulha.*

#### Perguntas
- **Skinbooster é preenchimento?** É a mesma substância, o ácido hialurônico, mas aplicada em microgotas na pele para hidratar e melhorar a textura. Não cria volume nem muda o contorno.
- **Quanto tempo dura?** Nos estudos, cerca de 6 meses, quando se reavalia a manutenção.
- **Vai inchar o meu rosto?** Pode haver pequenas elevações e inchaço por um a três dias. Depois disso, o rosto não fica com volume diferente.

**Fontes:** StatPearls, "Hyaluronic Acid" (NBK482440); Nikolis e Enright, 2018, série de casos sobre ácido hialurônico para qualidade da pele; FDA, "Dermal Fillers (Soft Tissue Fillers)". *Evidência ainda limitada: poucos estudos independentes de longo prazo.*

---

### Peelings `/procedimentos/peelings/`

**Title:** Peeling químico em São Paulo | Dra. Helena Duarte, médica na Av. Paulista
**Description:** O que é o peeling químico, para que serve, quantos dias de descamação, cuidados com o sol, possíveis complicações e se pode fazer no verão. Consulta na Av. Paulista.
**Card compacto:** Peelings

**H1:** Peelings
**Resumo:** Ácidos aplicados na pele para renovar a camada superficial de forma controlada. Ajudam na textura, no viço e na uniformidade do tom.
`[A CONFIRMAR: quais peelings a Dra. faz (superficiais e/ou médios) e com quais ácidos]`

#### Para que serve
Textura irregular, poros aparentes, pele opaca, tom desigual, linhas finas. Manchas têm causas diferentes: algumas são do sol, outras, como o melasma, são uma condição de pele que precisa de diagnóstico. Se é isso que incomoda você, conte na consulta. A avaliação vem antes de qualquer indicação.

#### Como é feito
A pele é preparada antes, em geral por 2 a 4 semanas, com produtos que oriento. No dia, o ácido é aplicado por alguns minutos e depois neutralizado ou retirado. Ardência e calor durante a aplicação são esperados. Os peelings superficiais costumam ser feitos em série, de 3 a 5 sessões, com intervalo de 2 a 5 semanas.

#### Quanto tempo leva
- **No dia:** vermelhidão e sensação de pele repuxada
- **Peeling superficial:** a pele se recupera em até uma semana, com descamação fina por alguns dias
- **Peeling médio:** de 7 a 14 dias, com inchaço nos primeiros dias, descamação mais intensa e crostas
- **1 a 2 semanas:** a vermelhidão costuma passar; em algumas pessoas, dura mais
- **Semanas a meses:** proteção solar rigorosa faz parte do tratamento
*Prazos médios descritos nos estudos. Variam de pessoa para pessoa, com o tipo de pele e com a profundidade do peeling.*

#### O que esperar depois
- Não arranque as peles que soltarem.
- Limpeza suave, hidratante simples e protetor solar todos os dias, com chapéu se for ficar ao sol.
- No peeling médio, evite o sol completamente até a pele cicatrizar. Planeje a sessão para uma semana mais tranquila.

#### Possíveis efeitos e complicações
- **Esperados:** ardência, vermelhidão, descamação e inchaço leve.
- **Incomuns:** manchas escuras depois da inflamação, mais frequentes em peles morenas e negras (num estudo com peelings superficiais em peles mais escuras, cerca de 2 em cada 100); reativação de herpes; pequenos cistos brancos (mília); acne.
- **Raros:** infecção; clareamento de áreas da pele (no peeling médio); cicatriz.
- **Quando avisar:** dor que aumenta em vez de diminuir, pus, bolhas inesperadas ou manchas que escurecem.

#### Quando não é indicado
Infecção ou ferida aberta no local; uso de isotretinoína oral (no peeling médio, também nos últimos 6 meses); alergia ao ácido. No peeling médio, também gestação e amamentação, tendência a queloide, algumas doenças de pele e tabagismo pedem cautela. Peles morenas e negras podem fazer, com indicação e preparo cuidadosos.

#### Na consulta, eu…
*…pergunto sobre a sua rotina, o sol do seu dia a dia e a sua agenda das próximas semanas. Peeling bom é o que cabe na sua vida, inclusive nos dias de descamação.*

#### Perguntas
- **Pode fazer peeling no verão?** Pode, com cuidado redobrado: a proteção solar faz parte do tratamento. Num estudo em peles mais escuras, as complicações foram menos frequentes no inverno, por isso os peelings mais profundos costumam ficar para os meses mais frios.
- **Quantos dias vou descamar?** No superficial, alguns dias, em geral discretos. No médio, de uma a duas semanas.
- **Pele morena ou negra pode fazer?** Pode, com indicação e preparo cuidadosos, porque o risco de manchas depois do peeling é maior.

**Fontes:** StatPearls, "Chemical Peels" (NBK547752); AAD, perguntas frequentes sobre peelings químicos; Vemula et al., 2018, estudo sobre segurança de peelings superficiais em peles mais escuras.

---

## Guia: o que muda na pele na menopausa `/guias/pele-na-menopausa/`

**Title:** O que muda na pele na menopausa | Guia da Dra. Helena Duarte, médica
**Description:** Colágeno, espessura, elasticidade, hidratação e cicatrização: o que acontece com a pele na menopausa, o que ajuda no dia a dia e quando procurar avaliação médica.

**H1:** O que muda na pele na menopausa
**Apoio:** Muita coisa que parece "só idade" tem a ver com a queda do estrogênio. Entender a diferença ajuda a escolher o que faz sentido para você, com calma e com informação.

### O estrogênio também cuida da pele
O estrogênio participa da produção de colágeno, de ácido hialurônico e da oleosidade natural da pele. Quando ele cai, a pele muda em várias frentes ao mesmo tempo, e mais rápido nos primeiros anos.

### O que os estudos mostram
- **Colágeno:** a pele pode perder até cerca de 30% do colágeno nos primeiros 5 anos depois da menopausa. Depois, a perda segue mais devagar, em torno de 2% ao ano.
- **Espessura:** a pele fica mais fina, com queda de até cerca de 1% ao ano nos primeiros 15 anos.
- **Elasticidade:** cai cerca de 0,5% ao ano, e as fibras elásticas se degradam mais, o que aparece como flacidez e linhas.
- **Hidratação:** as glândulas produzem menos oleosidade e suor, e a pele fica mais seca e sensível.
- **Cicatrização:** fica mais lenta. Isso também importa para o planejamento de procedimentos, porque a recuperação pode levar mais tempo.
*Médias de estudos; cada mulher passa por isso de um jeito.*

### O que ajuda no dia a dia
- Protetor solar todos os dias, inclusive em casa perto da janela. O sol acelera a perda de colágeno em qualquer idade.
- Hidratante adequado ao seu tipo de pele, de manhã e à noite.
- Limpeza suave, sem esfoliar demais uma pele que ficou mais fina.
- Sono, alimentação e atividade física também aparecem na pele.

### Quando procurar um médico
- **Sintomas da menopausa** (ondas de calor, alterações do sono, do humor ou da menstruação): converse com o seu ginecologista. A terapia hormonal é uma decisão médica que considera a sua saúde como um todo, e não é indicada só por causa da pele.
- **Sinais na pele que pedem avaliação:** coceira que não passa, feridas que demoram a cicatrizar, manchas ou pintas novas ou que mudam.

### Como isso entra na consulta comigo
Na avaliação, pergunto em que fase você está, como a sua pele mudou e o que incomoda você. Com isso, o plano considera a pele que você tem hoje. Às vezes, ele começa pela rotina em casa. Quando há indicação, pode incluir procedimentos que agem ao longo de meses, como os [bioestimuladores de colágeno](/procedimentos/bioestimuladores-de-colageno/), sempre com prazos e riscos explicados antes.

*Cuidar de você nesta fase não precisa ser corrida contra o tempo. Precisa de informação e de um plano que respeite o seu ritmo.* `[A CONFIRMAR: frase da Dra.]`

**CTA:** Agendar consulta
**Fontes:** Calleja-Agius, Muscat-Baron e Brincat, "Skin ageing", Menopause International, 2007; Brincat et al., Obstetrics & Gynecology, 1987; Kamp et al., 2022, revisão sobre menopausa e pele; Zomer e Cooke, Frontiers in Physiology, 2023.

---

## Sobre `/sobre/`

**Title:** Sobre a Dra. Helena Duarte | Médica, CRM-SP 123456*
**Description:** Helena Duarte é médica (CRM-SP 123456*), formada em 2019, e atua com procedimentos estéticos faciais em consultório próprio na Av. Paulista.

**H1:** Sobre mim
**Texto:**
Sou médica, formada em 2019, com registro no Conselho Regional de Medicina de São Paulo desde dezembro daquele ano. Atuo com procedimentos estéticos faciais em consultório próprio, na Av. Paulista, onde atendo sozinha, da avaliação ao retorno.

Escolhi trabalhar com calma. Prefiro uma consulta que explique bem a um procedimento feito às pressas, e gosto quando a paciente sai sabendo o que esperar, quanto tempo cada coisa leva e quais são os riscos, mesmo quando decide não fazer nada.

*O que eu mais ouço na consulta é o medo de ficar com o rosto diferente. Eu levo esse medo a sério: é por isso que o plano começa pela conversa e que cada etapa tem o seu tempo.* `[A CONFIRMAR: frase escrita para ela; trocar por uma fala real]`

**Formação (factual):**
- Medicina, Universidade Municipal de São Caetano do Sul ([universidade]), 2021
- Registro no CRM-SP nº 123456* (fictício)
- `[A CONFIRMAR: cursos livres e congressos, com instituição e ano (R2: sem adjetivos)]`
- Formação complementar em andamento: **não citada** no protótipo (decisão 🟡 1)

**Verifique:** Você pode conferir o meu registro na busca pública de médicos do Conselho Federal de Medicina. → https://portal.cfm.org.br/busca-medicos
**Fora do consultório:** `[A CONFIRMAR: uma ou duas linhas pessoais que ela queira dividir]`
**Identificação R1 + CTA:** Agendar consulta

---

## Perguntas frequentes `/perguntas-frequentes/`

**Title:** Perguntas frequentes | Dra. Helena Duarte, médica na Av. Paulista
**Description:** Valor da consulta, primeira consulta, prazos, cuidados, riscos, retorno, gestação e procedimentos feitos em outro lugar: respostas da Dra. Helena Duarte.

**H1:** Perguntas frequentes
**Apoio:** Se a sua dúvida não estiver aqui, mande pelo WhatsApp.

**Sobre a consulta**
1. **Quanto custa a consulta?** O valor da consulta e as formas de pagamento são informados no agendamento. O investimento de um procedimento é apresentado na consulta, antes de qualquer decisão, porque depende da indicação.
2. **Já faço o procedimento na primeira consulta?** Pode acontecer, quando a indicação é clara e você se sente segura para decidir. Se preferir pensar, o plano fica com você e marcamos depois. `[A CONFIRMAR]`
3. **Preciso saber o que quero fazer antes de marcar?** Não. A consulta começa pelo que incomoda você. A indicação vem depois da avaliação.
4. **Como funciona o retorno?** Cerca de 15 dias depois de um procedimento, você volta para avaliarmos juntas a resposta. O retorno já faz parte do procedimento.
5. **Você atende quem já fez procedimentos em outro lugar?** Sim. Conte o que fez, quando e, se souber, qual produto foi usado. A avaliação considera tudo isso, sem julgamento, e às vezes o melhor começo é esperar. *(não citar reversão com hialuronidase até a Dra. confirmar que faz)*
6. **Com que idade faz sentido começar?** Não existe idade certa para todo mundo. Para muitas pessoas mais jovens, a primeira indicação é uma rotina de cuidados com a pele e proteção solar. Atendo a partir de 18 anos.

**Sobre os procedimentos**
7. **Vou ficar com aparência artificial?** Ninguém pode garantir como cada pessoa vai responder. O que eu posso fazer é planejar com você: doses e áreas definidas na avaliação, começar pelo necessário e avaliar a resposta no retorno antes de qualquer passo seguinte.
8. **Posso voltar ao trabalho no mesmo dia?** Na maioria dos procedimentos injetáveis, sim, com alguns cuidados nas primeiras horas. Pode haver inchaço ou pequenas marcas roxas por alguns dias, às vezes até duas semanas no preenchimento, e o peeling pode descamar por uma semana ou mais. Em cada página de procedimento estão os cuidados e prazos.
9. **Com quanto tempo de antecedência planejar antes de um evento?** Depende do procedimento. A toxina leva cerca de duas semanas para chegar ao efeito pleno, o preenchimento labial pode deixar inchaço por uma a duas semanas e o bioestimulador age ao longo de meses. Para datas importantes, converse comigo com algumas semanas, ou meses, de antecedência.
10. **Em quantos dias a toxina botulínica começa a agir e quanto tempo dura?** Começa em 1 a 2 dias, chega ao efeito pleno por volta de 2 semanas e dura, em média, de 3 a 4 meses. Varia de pessoa para pessoa. [Mais sobre a toxina botulínica](/procedimentos/toxina-botulinica/)
11. **Quando a toxina passa, a ruga fica pior?** Não há evidência disso. O músculo volta aos poucos ao que era antes.
12. **Quanto tempo o roxo ou o inchaço do preenchimento demora a sair?** Em geral, de alguns dias a uma semana; em algumas pessoas, até duas semanas. [Mais sobre o preenchimento labial](/procedimentos/preenchimento-labial/)
13. **Quantas sessões de bioestimulador são necessárias?** Em geral, de 2 a 4, com intervalo de 3 a 8 semanas, e a pele responde aos poucos, ao longo de meses. [Mais sobre bioestimuladores](/procedimentos/bioestimuladores-de-colageno/)
14. **Skinbooster é a mesma coisa que preenchimento?** É a mesma substância, mas aplicada em microgotas na pele para hidratar e melhorar a textura, sem criar volume. [Mais sobre o skinbooster](/procedimentos/skinbooster/)
15. **Pode fazer peeling no verão?** Pode, com proteção solar rigorosa. Os peelings mais profundos costumam ficar para os meses mais frios. [Mais sobre peelings](/procedimentos/peelings/)

**Sobre segurança**
16. **Quais são os riscos?** Todo procedimento pode ter efeitos adversos. Os mais comuns são passageiros, como inchaço, vermelhidão e pequenas marcas roxas. Complicações mais sérias são raras, mas existem, e cada página de procedimento lista as possíveis. Na consulta, falamos dos riscos do seu plano antes de qualquer decisão.
17. **E se acontecer uma intercorrência?** Você tem um canal direto comigo pelo WhatsApp depois do procedimento. Se notar algo diferente do que conversamos, como dor forte, mudança de cor na pele ou alteração na visão, avise na hora. `[A CONFIRMAR: protocolo e horário de resposta]`
18. **Posso fazer grávida ou amamentando?** Os procedimentos injetáveis e a maioria dos peelings não são indicados durante a gestação e a amamentação. Conte na consulta, e planejamos para depois.

---

## Agendar `/agendar/`

**Title:** Agendar consulta | Dra. Helena Duarte, médica na Av. Paulista
**Description:** Agende sua consulta com a Dra. Helena Duarte pelo WhatsApp ou escolha um horário na agenda online. Terças e sextas até 21h e sábados.

**H1:** Agendar consulta
**Apoio:** O jeito mais rápido é pelo WhatsApp. Você manda uma mensagem e recebe os horários disponíveis. `[A CONFIRMAR: quem responde e em quanto tempo]`
**Botão principal:** Abrir o WhatsApp
**Estado carregando:** Abrindo o WhatsApp…
**Estado erro (não abriu):** "Não conseguimos abrir o WhatsApp por aqui. Mande uma mensagem para (11) 1234-5678." + botão **Copiar número** (→ "Número copiado") + link **Abrir o WhatsApp Web**

**Bloco agenda online:**
**H2:** Prefere escolher o horário sozinha?
**Texto:** Veja os horários livres e marque direto na agenda online. Ela pede só nome, celular e e-mail.
**Botão:** Ver horários disponíveis
**Aviso abaixo do botão (R15):** A agenda é de um serviço externo (Calendly), que guarda seus dados fora do Brasil. Ela só carrega depois que você clicar. Saiba mais na [Política de privacidade](/privacidade/).
**Estado carregando:** esqueleto, sem texto.
**Estado erro:** "A agenda não carregou. Você pode [abri-la em outra aba] ou falar pelo WhatsApp."
**Estado sem horários:** "Não há horários livres nas próximas semanas. Mande uma mensagem pelo WhatsApp, que encontramos um horário."
**Nota do protótipo (só na prévia):** "Agenda de demonstração: nenhum horário marcado aqui é real."

**Antes de vir:** Valor e formas de pagamento informados no agendamento. Leve exames recentes, se tiver, e a lista dos seus medicamentos. Cancelamentos com 24 horas de antecedência. Atendo a partir de 18 anos.

---

## Obrigado `/obrigado/`

**Title:** Obrigado | Dra. Helena Duarte (noindex)

**Versão WhatsApp (padrão):**
**H1:** Sua mensagem está a caminho
**Texto:** O WhatsApp abriu em outra aba. Envie a mensagem e você recebe os horários disponíveis em seguida, dentro do horário de atendimento. `[A CONFIRMAR: prazo de resposta]`
**Se o WhatsApp não abriu:** Mande uma mensagem para (11) 1234-5678.

**Versão agenda (`?origem=agenda`):**
**H1:** Sua consulta está marcada
**Texto:** A confirmação chega no seu e-mail, com data, horário e endereço. Se precisar remarcar, use o link do e-mail ou fale pelo WhatsApp com 24 horas de antecedência.

**Bloco comum:** Para a consulta: leve exames recentes, se tiver, e a lista dos seus medicamentos. Av. Paulista, a uma quadra do metrô Trianon-Masp.
**Links:** Voltar para o início · Como funciona a consulta

---

## 404 e erro (já no código, Etapa 2)
- **404:** "Esta página não existe" / "O endereço pode ter mudado ou ter sido digitado com algum erro." / Ir para o início · Agendar consulta
- **Erro:** "Esta página não carregou" / "Tente carregar de novo. Se continuar assim, fale com o consultório pelo WhatsApp." / Carregar de novo · Falar pelo WhatsApp

## Privacidade e Termos
Redigidos na **Etapa 11**, a partir do SCHEMA.md e do R15, com revisão jurídica antes de publicar. Fora deste documento.

---

## Decisões 🟡 (tomadas pelo responsável em 22/10/2026 e registradas no Anexo D do harness, v1.4)

| # | Tema | Decisão |
| --- | --- | --- |
| 1 | formação complementar em andamento | **Não citar no protótipo.** A Sobre usa graduação, ano do CRM e link de verificação do CFM. Se a Dra. quiser citar, só depois de consulta escrita à Codame do Cremesp |
| 2 | Retorno de 15 dias | **"O retorno, cerca de 15 dias depois, já faz parte do procedimento."** Sem "grátis" nem "sem custo". Confirmar com a Dra. que o retorno é incluído |
| 3 | Frase de fechamento da home | **Reescrita:** *"Antes de qualquer procedimento, eu quero entender o que incomoda você. Daí em diante, decidimos juntas, no seu tempo."* Fala de método, não de resultado. A frase de resultado do Instagram ("o melhor resultado é aquele em que…") não é usada |
| 4 | Link para o perfil do Google | **Sem link no protótipo, mas previsto.** "Abrir no mapa" aponta para o endereço. O código ganha um campo opcional (`NEXT_PUBLIC_GOOGLE_PERFIL_URL`): vazio, nada aparece; preenchido, surge em "Onde e quando" e no rodapé um link discreto "Ver no Google", sem nota, estrelas nem avaliações. Só preencher depois do ajuste do perfil (pendência 11a: nome sem "Dermatologia Estética") |
| 5 | Prazos nas páginas de procedimento | **Sempre em faixa**, com "varia de pessoa para pessoa" e fonte em `FONTES_PROCEDIMENTOS.md`; a Dra. valida cada prazo antes de publicar |
| 6 | Acne, melasma e rosácea | **Só a nota educativa** ("precisam de diagnóstico médico… conte na consulta"), sem oferta de tratamento |

## Harness: conferência linha a linha

Conferência feita em 22/10/2026 sobre todo o texto acima: busca pelo léxico do Anexo A2 (dermatolog*, especialista, harmonização, marcas, grátis/sem custo, sem dor, garantido, definitivo, rejuvenescer, superlativos, antes e depois, depoimentos, promoção, pacote, "natural" como promessa, "tratamos…") e leitura linha a linha contra R1–R11.

| Regra | Resultado | Onde conferir |
| --- | --- | --- |
| R1 Identificação | OK. Nome e "MÉDICA: CRM-SP 123456*" em duas linhas iguais na home, na Sobre e no rodapé | Elementos globais; Home; Sobre |
| R2 Especialidade | OK. Nenhuma ocorrência no texto do site. "Dermatology" só aparece em nomes de revista, que ficam nos links das fontes (não no texto visível) | Busca do léxico |
| R3 Doença | OK com nota educativa (decisão 🟡 6). Acne, melasma e rosácea aparecem só como "precisam de diagnóstico médico… conte na consulta" | Procedimentos (índice); Peelings |
| R4 Promessa | OK. Todo prazo em faixa, com "varia de pessoa para pessoa"; "Ninguém pode garantir como cada pessoa vai responder"; cada página tem indicação, cuidados, complicações e quando não é indicado. Frase de fechamento reescrita (decisão 3) | Páginas de procedimento; FAQ 7 |
| R5 Sensacionalismo e gratuidade | OK. Sem superlativo sobre ela; "melhor" só como "melhor indicação" e "melhor opção" (sem comparação com colegas). Retorno "já faz parte do procedimento" (decisão 🟡 2). Riscos graves descritos com número e contexto, sem tom de alarme | Home; Como funciona; Contorno facial |
| R6 e R7 Imagens e depoimentos | OK. Nenhum antes e depois, resultado ou depoimento. "Antes e depois" só no sentido de "cuidados antes e depois" | — |
| R8 Preço | OK. Só "valor da consulta informado no agendamento" e "investimento apresentado na consulta"; nenhum preço de procedimento | Elementos globais; FAQ 1 |
| R9 Marcas | OK. Só nomes genéricos (toxina botulínica, ácido hialurônico, ácido poli-L-láctico, hidroxiapatita de cálcio, hialuronidase); fontes sem marca no texto. Nenhum produto de skincare citado | Busca do léxico |
| R10 Método | OK. Só procedimentos reconhecidos, descritos com fonte | Páginas de procedimento |
| R11 IA e consulta a distância | OK. Sem quiz nem indicação individual; "a indicação é sempre individual, definida na consulta". Todo o documento é RASCUNHO para aprovação da Dra. | Cabeçalho deste documento |
| R12 Contato | OK. Mensagem do WhatsApp neutra; agenda online com só nome, celular e e-mail e aviso de privacidade | Agendar |
| R17 Veracidade | 🟡 até confirmar: horários, estacionamento, retorno incluído, registro de lote, termo de consentimento, hialuronidase e canal pós-procedimento estão marcados `[A CONFIRMAR]` e só vão ao ar confirmados | Marcações `[A CONFIRMAR]` |

**Resultado: nenhum 🔴.** Os seis 🟡 foram decididos (tabela acima, Anexo D do harness). Seguem pendentes só as marcações `[A CONFIRMAR]`, que dependem da Dra. e não vão ao ar sem confirmação.

