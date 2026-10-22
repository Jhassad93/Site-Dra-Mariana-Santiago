# Plano de implementação — Dra. Mariana Santiago

Fontes: BRIEF.md (modo protótipo) · APP_FLOW.md · DESIGN.md · SCHEMA.md · PERSONAS.md · CONCORRENTES.md · harness regulatório v1.4 (`claude/harness-regulatorio.md`)
Regra: executar uma etapa por vez, marcar [x], resumir, listar o que testar e parar para aprovação. Commit ao fim de cada etapa aprovada (`etapa N: <resumo>`).
**Harness:** em toda etapa, rodar o filtro R1–R20 sobre o que foi produzido e escrever no resumo "Harness: sem alertas" ou a lista de alertas. Todo texto sai marcado RASCUNHO até a aprovação.

> **Fases:** Etapas 1 a 12 constroem o protótipo. A etapa 13 audita. A etapa 14 prepara a oferta à lead. A etapa 15 só acontece **depois do aceite** (publicação definitiva).

## Etapa 1 — Setup e infraestrutura
- [x] **Onde construir (PREMISSA):** código e build no ambiente de nuvem da sessão (Node 22, Chromium e Playwright disponíveis). O **código-fonte, sem `node_modules` e sem build, é sincronizado** com `Site - Dra. Mariana Passos/site/` no seu computador a cada etapa aprovada. Motivo: a pasta fica no iCloud, que sincroniza mal milhares de arquivos de `node_modules` e onde o Git não consegue apagar arquivos pela conexão.
- [x] **Versionamento:** repositório **privado no GitHub do João** (`site-dra-mariana-santiago`), com commit por etapa aprovada. Transferir para a conta da Dra. depois do aceite (regra do kit). Repositório: https://github.com/Jhassad93/Site-Dra-Mariana-Santiago
- [x] Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui; `components.json` com os registros de `config/components.json`; **exportação estática** (`output: "export"`), porque o site não precisa de servidor (APP_FLOW/SCHEMA)
- [x] Fontes **Host Grotesk** e **Libre Caslon Text** com `next/font` (servidas pelo próprio site, sem CDN do Google, conforme o SCHEMA). Trocadas em 22/10/2026 (Geist e Instrument Serif saíram por serem marcadas como "fontes muito usadas" pelo Impeccable)
- [x] Tokens do DESIGN.md no `globals.css` (5 cores, escala tipográfica, raios por hierarquia, curvas de animação)
- [x] `.env.example` com `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_WHATSAPP_MESSAGE`, `NEXT_PUBLIC_CALENDLY_URL`, `NEXT_PUBLIC_GA4_ID` (não são segredos; ficam fora do código para trocar sem novo commit) e `.gitignore` do kit
- [x] Skills de design (`scripts/setup-design.sh`), instaladas na segunda tentativa: Emil Kowalski (inclui `review-animations` e `break-ui`), Taste Skill, **Impeccable** (com o detector `impeccable detect`) e Frontend Design. `detect` com navegador real (22/10/2026): os alertas de "fonte muito usada" e "fundo creme" foram corrigidos (par A e fundo Gesso), e o detector ficou sem alertas
- [x] shadcn/ui: `components.json` (registros do kit) e `lib/utils.ts`; `shadcn add` e o registro **@spell** funcionam (testados com `--dry-run`). @cult-ui e @componentry não respondem neste ambiente (não são necessários: biblioteca principal = Spell UI). Candidatos do Spell para o DESIGN.md: `signature` (assinatura animada) e `copy-button` (copiar o número do WhatsApp)
- [x] Prévia em artefato: `scripts/preview.mjs` (build → `.preview/`); prints: `scripts/prints.mjs` (375/768/1280 + rolagem horizontal)
- Pronto quando: página em branco roda localmente com Host Grotesk, Libre Caslon e as cores Tinta/Gesso; `npm run build` gera a pasta estática sem erro; código sincronizado com a sua pasta

## Etapa 2 — Layout base
- [x] Cabeçalho "liquid glass" com os dois estados (sobre o hero escuro e sobre seções claras), alternativas sem `backdrop-filter` e com `prefers-reduced-transparency`; menu do celular em folha cheia (`<dialog>`: prende o foco, fecha com Esc e devolve o foco ao botão)
- [x] Rodapé com bloco de identificação R1 ("Dra. Mariana Passos Santiago" / "MÉDICA: CRM-SP 227636", tipografia uniforme), endereço, horários, links legais, "Gerenciar cookies" e redes. "Gerenciar cookies" leva a /privacidade/#cookies até o banner da Etapa 11
- [x] CTA fixo no celular ("Agendar consulta", WhatsApp) que some quando o CTA da seção ou o rodapé está visível
- [x] Página 404 e página de erro genérica (APP_FLOW); `lang="pt-BR"`; HTML semântico; link "pular para o conteúdo"; foco visível (anel Bronze no claro e Ouro no escuro, porque o Ouro sobre Gesso não chega a 3:1)
- [x] Prints com Playwright em 375, 768 e 1280px; teste de interação em `scripts/teste-layout.mjs` (17 verificações)
- [x] Páginas provisórias (RASCUNHO) nas rotas do menu e do rodapé, para a navegação funcionar até as etapas de cada uma
- Pronto quando: a navegação funciona, uma URL inexistente mostra a 404, o cabeçalho troca de estado ao rolar e passa pelo teclado

## Etapa 3 — Componentes de assinatura
- [x] **Régua do tempo** (horizontal e vertical; desenho animado só na entrada da home; estática com `prefers-reduced-motion`). Lista ordenada; no celular a linha termina no último marcador
- [x] Botão principal (sólido e de vidro), link secundário, pílula de vidro (`components/marca/botao.tsx`)
- [x] Card grande de procedimento (retrato 3:4, 4:5 no celular, faixa de dados, legenda, pílula; o card inteiro é clicável) e card compacto (`components/marca/cards.tsx`). Contraste do texto sobre a foto medido por pixel com `npm run contraste` (pior caso 4,55:1 com o gradiente provisório; **repetir na Etapa 10 com as fotos reais**)
- [x] Acordeão do FAQ (`<details>` nativo, texto no HTML); bloco de identificação R1; bloco "voz da Dra." (Libre Caslon itálico) (`components/marca/blocos.tsx`). Rodapé e menu passam a usar o mesmo bloco R1
- [x] Página interna `/componentes` (noindex, **removida antes da prévia**) para revisar tudo junto; `review-animations` nas animações (corrigido: altura do acordeão deixou de ser animada; hover limitado a mouse com `pointer: fine`)
- Pronto quando: todos os componentes aparecem em `/componentes` nos 3 tamanhos, com contraste AA conferido e prints revisados

## Etapa 4 — Copy (documento, sem código)
- [x] `docs/COPY.md` com o texto de todas as páginas, a partir de BRIEF, PERSONAS (crenças e banco de copy) e DESIGN, **marcado RASCUNHO**
- [x] Páginas de procedimento na estrutura obrigatória: indicação · como é feito · régua do tempo (faixas + "varia de pessoa para pessoa" + fonte) · o que esperar depois · possíveis efeitos e complicações · "Na consulta, eu…" · perguntas
- [x] Decidir os 🟡 pendentes (22/10/2026, registrados no Anexo D do harness v1.4): menção à residência; redação do retorno ("retorno de avaliação em 15 dias incluído"); frase de fechamento; link para o perfil do Google (registrar no Anexo D do harness)
- [x] Rodar o harness linha a linha (léxico A2 + R1–R11) e listar o resultado (nenhum 🔴; fontes dos prazos em `docs/FONTES_PROCEDIMENTOS.md`)
- Pronto quando: COPY.md aprovado por você, sem nenhum 🔴 e com todos os 🟡 decididos e registrados

## Etapa 5 — Home
- [x] Hero: título, apoio, CTA (WhatsApp), link "Ver horários disponíveis", identificação R1, horários. **Imagem de capa provisória em CSS** (feixe de luz sobre Tinta), porque não há gerador de imagem gratuito neste ambiente; a imagem gerada e o vídeo entram na Etapa 10
- [x] Seções na ordem do DESIGN.md: Como eu trabalho (desenhada sobre a régua do tempo, decisão da crítica) · Procedimentos (3 grandes em carrossel até 1024px + 3 compactos) · Planejamento no tempo (com "Conversar sobre uma data") · FAQ (5) · Onde e quando (sem mapa estático por enquanto: link "Abrir no mapa" pelo endereço) · Fechamento com assinatura provisória em Libre Caslon. **Foto da Dra.: pendente** — o post de apresentação do Instagram tem textos vedados ("Dermatologia estética", "melhor versão"); o código já aceita uma foto limpa só na prévia (`NEXT_PUBLIC_FOTO_DRA_PREVIA`)
- [x] Link opcional "Ver no Google" em Onde e quando e no rodapé, ligado a `NEXT_PUBLIC_GOOGLE_PERFIL_URL` (vazio = não aparece; decisão 4)
- [x] Ordem própria no celular (faixa de horários logo depois do hero; no fechamento, a foto vem antes da frase)
- [x] `/impeccable critique` (duas avaliações isoladas: design 24/28; detector 0 achados na página real) e `review-animations`; corrigidos: cards cortados a 768px, R1 e horário fora da primeira dobra no celular, CTA fixo invisível sobre fundo escuro, régua desalinhada, repetição da assinatura, alvos de toque do rodapé, contraste do rótulo do card no celular
- [x] Prints com Playwright em 375, 768 e 1280px
- Pronto quando: home completa no desktop e no celular, com o texto do COPY.md, CTA visível na primeira tela, sem rolagem horizontal, prints conferidos
- **Fora desta etapa:** os links dos cards levam a páginas que só existem na Etapa 7 (hoje mostram a 404)

## Etapa 6 — Como funciona a consulta
- [x] Página com as etapas (conversa → avaliação → plano → decisão sua → procedimento → retorno) sobre a régua vertical, índice fixo no desktop, "Se algo fugir do esperado", a régua do planejamento e informações práticas; crenças U2, U3, U5 e U7 (PERSONAS 7.1). Itens `[A CONFIRMAR]` da Dra. listados em `lib/conteudo.ts`
- [x] Prints nos 3 tamanhos; detector sem achados (1280 e 375)
- Pronto quando: a página responde "o que acontece na consulta", "quanto vou gastar antes de decidir" e "e se eu não precisar de nada", sem prometer resultado

## Etapa 7 — Procedimentos
- [x] `/procedimentos` (índice) + modelo de página + 6 páginas (toxina botulínica, preenchimento labial, contorno facial, bioestimuladores de colágeno, skinbooster, peelings). Os textos saem do COPY.md por `scripts/copy-procedimentos.py` (gera `lib/procedimentos.json`; o COPY.md continua a fonte da verdade)
- [x] Régua do tempo de cada uma com as faixas e as fontes do COPY.md (fontes com link, só sem marca comercial)
- [x] Prints nos 3 tamanhos de 4 páginas (índice, toxina, preenchimento labial, contorno facial, bioestimuladores) + teste de textos longos (nome mais longo, "Contorno facial com ácido hialurônico", e régua de 5 marcos a 768px): sem rolagem horizontal nem corte; detector sem achados
- Pronto quando: as 7 páginas existem, seguem a estrutura obrigatória e passam no léxico do harness

## Etapa 8 — Sobre, Perguntas frequentes e Guia
- [x] `/sobre` (formação factual, CRM verificável com link para a busca do CFM, método; residência não citada, decisão 1 do harness). Foto e cursos pendentes da Dra.
- [x] `/perguntas-frequentes` (18 perguntas do COPY.md, em 3 temas, com atalhos) com dados estruturados FAQPage (mesmo texto visível); abre e fecha com Enter e Espaço (testado)
- [x] `/guias/pele-na-menopausa` (educativo, com fontes; terapia hormonal encaminhada ao ginecologista; sem oferta de tratamento de doença). Link no rodapé
- Pronto quando: as 3 páginas estão completas, com CTA, e o FAQ abre e fecha pelo teclado

## Etapa 9 — Agendar e Obrigado
- [x] `/agendar`: botão principal do WhatsApp (mensagem neutra) + "Ver horários disponíveis" com o **Calendly incorporado só depois do clique**, carregamento com esqueleto, falha → link em nova aba + WhatsApp
- [x] Escuta do evento `calendly.event_scheduled` → `/obrigado?origem=agenda`; WhatsApp → `/obrigado?origem=whatsapp`; plano B quando o WhatsApp não abre (número + copiar + link do WhatsApp Web)
- [x] `/obrigado` (noindex) com os próximos passos
- [x] Teste de todos os caminhos do APP_FLOW: **Calendly simulado** (decisão do responsável em 22/10/2026: sem conta conectada no protótipo). Com `NEXT_PUBLIC_CALENDLY_URL` vazio, `/agendar` mostra uma agenda de **demonstração** que não pede nem guarda dado nenhum; `?simular=erro|sem-horarios|ocupado|lento` força cada estado. `npm run teste-agendar`: 22 de 22 verificações OK
- [ ] Quando houver o link do Calendly: preencher `NEXT_PUBLIC_CALENDLY_URL` e repetir o teste do caminho real (evento `calendly.event_scheduled`, idioma, nome do evento "Consulta")
- Pronto quando: todos os caminhos e estados do APP_FLOW (carregando, erro, sem horário, horário ocupado, obrigado) foram testados no Playwright

## Etapa 10 — Imagens e vídeos
- [ ] Gerar ou receber as imagens dos 3 cards e a capa do hero (prompts do DESIGN.md); **vídeos do Higgsfield gerados por você** (pelo combinado, no final)
- [ ] Comprimir (WebM/MP4 abaixo de cerca de 2 MB por vídeo; AVIF/WebP no tamanho exibido), extrair capas, `preload="none"`, tocar só quando visível, imagem de capa no celular e com `prefers-reduced-motion`
- [ ] Registrar cada imagem e vídeo em `docs/LICENCAS.md` (ferramenta, data; foto do Instagram como "só prévia privada")
- Pronto quando: nenhuma imagem acima de cerca de 200 KB sem motivo, vídeos com capa e pausa fora da tela, LICENCAS.md completo

## Etapa 11 — Páginas legais e cookies
- [ ] `/privacidade` a partir do SCHEMA.md (7 itens, retenção de **12 meses a partir do último contato**, transferência internacional, operadores)
- [ ] `/termos`
- [ ] Banner de cookies com aceitar e recusar no mesmo nível; bloqueio de GA4 antes do aceite; "Gerenciar cookies"
- Pronto quando: os textos estão prontos para revisão jurídica (você, como advogado, e depois a Dra.) e nenhum script não essencial carrega antes do aceite (conferido na aba de rede)

## Etapa 12 — SEO, IA e analytics
- [ ] Title e description por página, Open Graph (imagem 1200×630 com identificação R1), favicons, `sitemap.xml`, canonical, `alt` em todas as imagens
- [ ] JSON-LD `Physician` (sem `medicalSpecialty` indevida; `identifier` CRM-SP), `FAQPage`, `BreadcrumbList`
- [ ] Verificar os nomes atuais dos robôs de IA (prompt do PROMPTS.md), **aprovar a tabela**, gerar `robots.txt` e `llms.txt` (sem "dermatologista")
- [ ] GA4 (conta de demonstração) com modo de consentimento, eventos do APP_FLOW e grupo de canais de IA
- [ ] Na **prévia: `noindex` em tudo**; indexação só na publicação definitiva
- Pronto quando: Lighthouse acima de 90 em SEO e acessibilidade e PageSpeed no celular acima de 90 (medido na prévia)

## Etapa 13 — Auditorias do protótipo
- [ ] `/impeccable polish` e `/impeccable audit`; `npx impeccable detect` sem achados críticos; `break-ui`
- [ ] `checklists/producao.md`, `seguranca.md` e `seo-ia.md` (itens de domínio, contas e indexação marcados "pós-aceite")
- [ ] **4ª auditoria: Anexo A do harness** (26 itens)
- [ ] Remover `/componentes`; conferir o `LICENCAS.md`
- Pronto quando: todos os itens aplicáveis ao protótipo estão OK; os pendentes estão listados como "pós-aceite"

## Etapa 14 — Prévia privada e oferta
- [ ] Deploy de **prévia privada** na Cloudflare (conta do João), com `noindex` e acesso restrito (link não divulgado; avaliar senha via Cloudflare Access) `[confirmar]`
- [ ] **Artefatos do Google Perfil da Empresa corrigido** (pendência 11a do harness): como ficaria o perfil (nome, categoria, descrição, horários, fotos) em comparação com o atual
- [ ] Material de oferta a partir de `claude/argumentos-venda.md`: diagnóstico (site atual, Maps, IA), o site novo, o reteste de IA como métrica, oportunidades futuras
- Pronto quando: você aprova a prévia e o material, e a lead recebe o link

## Etapa 15 — Publicação definitiva (só depois do aceite)
- [ ] Reunião de briefing (ROTEIRO_BRIEFING.md) para validar as premissas; prompt "Mudança no brief" se algo mudar
- [ ] Sessão de fotos, foto do Instagram substituída, assinatura real escaneada, valor da consulta, prazos da régua validados pela Dra.
- [ ] Contas no nome da Dra.: domínio (titularidade de `dramarianasantiago.com.br`), Cloudflare, GA4, Search Console, Bing, Calendly (plano pago, sincronizado com a agenda da sala); repositório transferido
- [ ] Correções nos outros canais (pendências 3, 4 e 11b do harness): Google Perfil da Empresa, tipos de agendamento da Clinovi, bio e posts do Instagram
- [ ] Remover `noindex`, publicar no domínio, HTTPS e redirecionamentos, conferir os robôs de IA da Cloudflare, enviar o sitemap
- [ ] Reverificar o Anexo B do harness (R20) antes de publicar; reteste das 7 perguntas de IA após 60 a 90 dias
- Pronto quando: todos os itens aplicáveis dos três checklists e do Anexo A estão OK no site publicado
