# Brief — Dra. Helena Duarte (projeto de portfólio)

> **Versão de portfólio (25/10/2026).** O projeto nasceu como protótipo para uma médica real, que não seguiu com a proposta. Nome, registro, contatos, endereço, redes, domínio e o diagnóstico da presença digital dela foram removidos ou trocados por dados fictícios (Dra. Helena Duarte, CRM-SP 123456*). O método e as decisões foram mantidos.

> **Pré-brief (22/10/2026)**, montado com as respostas do responsável (João) e com pesquisa pública. A reunião com a cliente ainda não aconteceu.
> Tudo que não foi dito fica como `[A CONFIRMAR]`. Itens vindos de pesquisa trazem a marca *(pesquisa)* e também precisam ser confirmados.
> **Harness regulatório (v1.3) ativo.** Este brief segue as Regras R1–R20 (`claude/harness-regulatorio.md`). Nada aqui autoriza o que o harness bloqueia (🔴).

## Modo protótipo (decisão de 22/10/2026)

Estratégia comercial: **construir o site primeiro, oferecer pronto à lead e fazer a reunião de briefing só se ela aceitar.** Os itens obrigatórios da conferência rápida do kit (`ROTEIRO_BRIEFING.md`) foram fechados como **PREMISSA**. Cada premissa vale até ser validada na reunião e, se mudar, o plano é revisto pelo prompt "Mudança no brief" (`PROMPTS.md`).

| Item obrigatório | PREMISSA do protótipo | Base |
| --- | --- | --- |
| CTA único | **"Agendar consulta"** → WhatsApp do consultório, com mensagem neutra (R12) | Link da bio do Instagram |
| Métrica de 90 dias | Agendamentos vindos do site (cliques no WhatsApp e página de obrigado) + reteste das 7 perguntas aos assistentes de IA | `claude/argumentos-venda.md` |
| Visitante ideal | Persona A (Carolina, 39) na home; B (Renata, 51) e C (Júlia, 29) nas páginas internas; D (Patrícia, 44) no FAQ | `docs/PERSONAS.md` |
| Lacuna e prova | "Planejamento estético no tempo, com transparência"; prova: método descrito, prazos e riscos explicados, CRM verificável | `docs/CONCORRENTES.md` |
| Páginas do escopo | Ver "Escopo" abaixo | Pré-brief |
| Responsável pelo aceite | João Henrique Assad (até a oferta); depois, a Dra. | Decisão do responsável |

**Fora do protótipo até o aceite:** domínio e DNS, contas no nome da cliente (Cloudflare, GA4, Search Console, Google Perfil da Empresa, ferramenta de agenda), valor da consulta (o protótipo usa o texto "valor informado no agendamento"), fotos profissionais (o protótipo usa placeholders sóbrios ou imagens de ambiente sem pessoas), escolha definitiva da ferramenta de agenda, formação complementar (🟡 do harness).
**Prévia para a lead:** link privado de teste (definir na etapa de publicação); publicação definitiva só após o aceite.

## Pacote contratado
- Site institucional do consultório (pessoa física) `[A CONFIRMAR: pacote exato]`

## Contexto
- Profissional: Dra. Helena Duarte, **MÉDICA, CRM-SP 123456\*** (persona fictícia do portfólio; \* registro fictício).
- Formação: médica generalista, **sem RQE**; por isso o site nunca a apresenta como especialista (R2).
- Atuação: procedimentos estéticos faciais (toxina botulínica, preenchimento com ácido hialurônico, inclusive labial e contorno facial, bioestimuladores de colágeno, skinbooster, peelings).
- Modelo: **consultório próprio, atendimento solo**, em sala alugada num prédio comercial da Av. Paulista.
- Momento: presença digital nova (Instagram recente; site de modelo genérico do prédio). O site novo substitui o modelo.

## Objetivo
- Ação principal (CTA único): **Agendar consulta** (sem "gratuita": R5) `[A CONFIRMAR: WhatsApp ou agenda online como destino principal]`
- Métrica de sucesso em 90 dias: `[A CONFIRMAR]`

## Público
- Visitante ideal *(pesquisa: Instagram, post de 29/04/2026)*: mulheres que querem cuidar da pele e suavizar os sinais de envelhecimento com naturalidade e têm medo de "exagerar" `[A CONFIRMAR: faixa etária, renda, bairro]`.
- Dores *(pesquisa, a validar)*: medo de ficar artificial; não saber por onde começar nem o que faz sentido para o próprio rosto; não ter tempo (horários noturnos e de sábado ajudam).
- Objeções antes de comprar *(a validar)*: resultado artificial; segurança e quem aplica; quanto custa; tempo de recuperação.
- Perguntas reais do público (para AEO/GEO): `[A CONFIRMAR com a Dra.: o que mais perguntam no WhatsApp]`. Ponto de partida *(pesquisa)*: "quanto tempo dura a toxina?", "quando começar o bioestimulador para ver efeito no verão?", "preenchimento labial fica natural?", "posso fazer vários procedimentos de uma vez?", "o que acontece na primeira consulta?".

## Mensagem
- Proposta de valor em uma frase (rascunho, a validar): "Planejamento estético individual, no tempo certo de cada procedimento, para cuidar da pele sem perder o seu rosto."
- Provas permitidas (R5–R7): CRM-SP; formação factual; estrutura do consultório; transparência (valor da consulta, orientações). **Sem depoimentos, sem antes e depois, sem números de pacientes.** Formação complementar em andamento: 🟡 (harness, seção 1).
- Tom de voz *(pesquisa: Instagram)*: acolhedor, feminino, sereno. Exemplo do perfil: "o melhor resultado não é aquele que todo mundo percebe; é aquele em que você se olha no espelho e continua se reconhecendo" (parafraseado). No site, mais sóbrio que no Instagram (R4, R5).
- Palavra-chave principal por página (rascunho; **nunca "dermatologista"**, R2): Home → "médica procedimentos estéticos Av. Paulista"; Toxina botulínica → "toxina botulínica São Paulo Paulista"; Preenchimento labial → "preenchimento labial natural São Paulo"; Bioestimulador → "bioestimulador de colágeno São Paulo" `[A CONFIRMAR após pesquisa de volume]`.

## Posicionamento (de docs/CONCORRENTES.md)
- Concorrentes analisados: três dermatologistas da região (duas no mesmo andar) e uma clínica de estética não médica (C1 a C4, anonimizados).
- Padrão do mercado que o site precisa ter: CTA para WhatsApp; página Sobre com credenciais; perfil completo no Google Maps; discurso de naturalidade.
- Lacuna escolhida: `[A CONFIRMAR na reunião]`. Candidata principal: **planejamento estético no tempo, com transparência** (o que esperar de cada procedimento, tempo de resposta, cuidados e possíveis complicações), somada à transparência prática (valor da consulta, agenda online, horários).
- Mensagem de diferenciação em uma frase: `[A CONFIRMAR]`
- Prova que sustenta: conteúdo do Instagram sobre planejamento (posts de 03/09/2026 e 10/08/2026) e agenda/políticas já publicadas `[A CONFIRMAR: algo verificável a mais]`.

## Referências
- Admira: `[A CONFIRMAR com a cliente]`
- Evitar: `[A CONFIRMAR]`. Sugestão: o modelo genérico atual do prédio comercial; sites de clínicas de estética com cupons e pacotes (C4).
- Estilo-base (Refero Styles): `[A DEFINIR na etapa de DESIGN.md]`
- Paleta e fontes (Realtime Colors): `[A DEFINIR]`. Insumo abaixo, em "Identidade existente".

## Escopo
- Páginas (PREMISSA do protótipo): Home; Como funciona a consulta (método e planejamento); Procedimentos (índice + 6 páginas educativas: toxina botulínica, preenchimento labial, contorno facial/full face, bioestimuladores de colágeno, skinbooster, peelings; R3, R4); Guia "Pele na menopausa: o que muda" (persona B); Sobre; Perguntas frequentes; Agendar (com /obrigado); Privacidade; Termos; 404.
- Funcionalidades (PREMISSA): **CTA principal = WhatsApp** em todo o site. **Alternativa em /agendar = agenda online** (serviço tipo Calendly), carregada só depois do clique, com campos mínimos (nome, celular, e-mail) e retorno para /obrigado. **Ferramenta: Calendly** (decisão do responsável), em conta de demonstração em nome do João no protótipo, com horários fictícios, e como recomendação final à Dra. (conta dela, plano pago com lembretes, sincronizado com a agenda para respeitar a reserva da sala). **Sem banco de dados próprio**; nenhum dado de saúde coletado (R12, R15). Detalhes em `APP_FLOW.md`, seção "Agendamento online".
- Integrações: WhatsApp do consultório (no portfólio, modo demonstração); GA4 com consentimento; Google Perfil da Empresa.
- Fora do escopo: `[A CONFIRMAR]`. Sugestão: loja de produtos, blog com publicação contínua, chatbot (se entrar, segue R11).

## Entidade (manter idêntico em todos os canais)
- Nome: **Dra. Helena Duarte**; no bloco de identificação, "Dra. Helena Duarte · MÉDICA: CRM-SP 123456\*" (R1). \* Registro fictício, explicado no rodapé do site.
- Endereço: Av. Paulista, Bela Vista, São Paulo/SP (sem número, para não apontar para um prédio real).
- Telefone/WhatsApp: (11) 0000-0000 (fictício).
- Área de atendimento: São Paulo (presencial).
- Horários: terça e sexta, 13h–21h; sábado, 8h–14h.
- Redes: nenhuma no portfólio (perfis inventados poderiam existir de verdade).

## Decisões técnicas
- Política para robôs de IA: `[A CONFIRMAR]` (padrão do kit: liberar busca e bloquear treino).
- Domínio: definido pela hospedagem (`NEXT_PUBLIC_SITE_URL` ou o domínio de produção da Vercel).
- Contas em nome da cliente: Cloudflare, GA4, Search Console, Google Perfil da Empresa `[A CONFIRMAR]`.

## Restrições
- Identidade existente *(pesquisa: posts do Instagram, insumo para o DESIGN.md)*:
  - Paleta observada: branco (#FFFFFF / #FAFBFC) como fundo; preto quente (~#13110E) em roupas, fundos escuros e textos; **dourado/ocre** como acento (~#CAA462, variações #D4AC53 e #D9BD74); acento pontual vermelho-vinho (~#9C2113, um post); fotografia de tons quentes ("golden hour", girassóis, margaridas).
  - Atenção de acessibilidade: o dourado #CAA462 sobre branco tem contraste de cerca de 2,3:1 e **não passa AA para texto**. Usar como acento ou em texto grande; no texto corrido, um dourado mais escuro.
  - Tipografia observada: serifada de alto contraste **em itálico** para o nome e as ênfases (estilo Playfair/Bodoni), sans-serif geométrica para o corpo (estilo Montserrat), etiquetas em sans condensada sobre caixa dourada; título serifado em negrito nos carrosséis. Fontes exatas `[A CONFIRMAR com quem faz as artes]`.
  - Marca: monograma com a inicial do nome.
  - Fotos: retratos da médica e reels em formato selfie (no portfólio, substituídos por imagens de ambiente geradas por IA, sem pessoas).
- Imagens: `[A CONFIRMAR: sessão de fotos profissional no consultório]`. Proibido antes e depois e qualquer foto de paciente (R6).
- Legais: **harness regulatório da medicina** (CFM 2.336/2023, CEM, Res. CFM 2.454/2026, Anvisa, LGPD, CDC, LBI). Pontos críticos: sem "dermatologista/dermatologia" (R2), sem preço de procedimento (R8), sem marcas como "Botox" (R9), sem depoimentos (R7).
- Prazo: `[A CONFIRMAR]`

## Aprovação
- Responsável pelo aceite: `[A CONFIRMAR: nome e e-mail]`
- Marcos: brief · layout · aprovado para publicação · entrega

---

## Diagnóstico da presença atual

Removido na versão de portfólio: descrevia o site, o Instagram e o perfil do Google da cliente original. Em resumo, o método encontrou: site de modelo genérico sem CRM, sem política de privacidade e com SEO do sistema do prédio; especialidade sem RQE no Google e no Instagram (🔴 R2); gratuidade anunciada (🟡 R5); agenda que coletava dados sem aviso de privacidade (🟡 R12, R15). Cada achado virou uma decisão do site novo.
