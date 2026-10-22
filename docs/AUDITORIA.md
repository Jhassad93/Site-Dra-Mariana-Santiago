# Auditorias do protótipo (Etapa 13)

Data: 22/10/2026. Build estático (`npm run build`), servido por `npm run servir` (compressão, cache e `public/_headers`, como a Cloudflare). Testes automáticos: `npm run auditoria-a11y` (axe-core em 18 rotas × 375 e 1280 px, alvos de toque, foco por teclado, rolagem horizontal), `npm run break-ui`, `npm run teste-headers`, `npm run teste-cookies`, `npm run teste-layout`, `npm run teste-agendar`, `npm run teste-midia`, `npm run prints`, detector do Impeccable em todas as rotas (desktop e 375 px) e Lighthouse 12 (celular).

Legenda: **OK** · **falha** (corrigida nesta etapa, salvo indicação) · **n/a** (não se aplica) · **pós-aceite** (depende de domínio, contas ou publicação; fica para a Etapa 15).

## O que foi corrigido nesta etapa

| Achado | Onde | Correção |
| --- | --- | --- |
| Nome acessível do logo diferente do texto visível (axe, sério) | `components/layout/site-header.tsx` | `aria-label` trocado por texto oculto dentro do link |
| CTA fixo do celular fora de qualquer marco (axe, moderado) | `components/layout/cta-fixo.tsx` | Virou `<aside aria-label="Atalho para agendar">` |
| Tabelas com rolagem sem acesso por teclado (axe, sério) | `app/privacidade/page.tsx`, `globals.css` | `tabIndex=0`, rótulo e anel de foco |
| Links soltos com 20 px de altura no toque (WCAG 2.5.8) | FAQ, fontes das páginas de procedimento e do guia, caminho "Procedimentos" | Classe `.link-solto`: 44 px de altura em telas de toque, sem mudar o visual |
| Zoom de texto 200% em 375 px criava rolagem horizontal (cabeçalho, botões, títulos longos em grade, acordeão, lista de procedimentos) | cabeçalho, `botao.tsx`, `cards.tsx`, `blocos.tsx`, `procedimentos/page.tsx`, `globals.css` | Marca encurta com reticências; botões com altura mínima e texto que quebra; `overflow-wrap: anywhere` em títulos e termos; link "Pular para o conteúdo" limitado à largura da tela |
| JSON-LD da FAQ injetado sem escape de `<` | `app/perguntas-frequentes/page.tsx` | Usa o componente `JsonLd` (escapa `<`) |
| Sem headers de segurança (item 18 da segurança) | `public/_headers` (novo) | CSP, HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy, COOP e cache; testado sem violação de CSP com GA4 e agenda |
| Data de atualização não visível (item 11 de SEO e IA) | páginas de procedimento e guia | "Texto revisado em 22 de outubro de 2026" na seção Fontes |
| Página interna `/componentes` ainda no build | `app/componentes/` | Removida; `robots.txt` e `sitemap` ajustados |

## 1. Impeccable (`detect`, `audit`, `polish`, `break-ui`)

- **Detector:** 0 achados críticos em 16 rotas, desktop e 375 px. Avisos não críticos: 2 "stragglers" (última linha com uma palavra) em /procedimentos/toxina-botulinica/ e /privacidade/, que dependem do motor de texto do navegador (`text-wrap: pretty` já está ativo).
- **Audit (nota técnica):** acessibilidade 4/4 (axe sem violações nas 18 rotas depois das correções; contraste AA inclusive sobre fotos, medido por pixel na Etapa 10), desempenho 4/4 (Lighthouse celular 93–98, imagens AVIF/WebP ≤ 200 KB, vídeos só no desktop e sob demanda), temas 4/4 (6 tokens, nenhuma cor fora deles; o site tem um único tema, sem modo escuro por decisão do DESIGN.md), responsivo 4/4 (320, 375, 768, 1280; zoom 200%; texto 200%; alvos de 44 px), integridade 4/4 (régua do tempo como único elemento memorável; nada do kit genérico). **Total 20/20.**
- **break-ui:** 19 casos (texto 200%, 320 px, zoom 200%, títulos e perguntas longos injetados). Depois das correções: "Nada quebrou".
- **Falso positivo registrado:** nos cards de procedimento da home o anel de foco aparece no card inteiro (`.card-procedimento:has(:focus-visible)`), não no link interno; conferido com Tab.

## 2. Checklist de produção (31 itens)

| # | Item | Resultado | Onde foi verificado |
| --- | --- | --- | --- |
| 1 | Página 404 personalizada | OK | `app/not-found.tsx`; `out/404.html` com o visual do site e links para a home e para agendar |
| 2 | CTA acima da dobra | OK | Prints 375/768/1280 (`.verificacao/`): "Agendar consulta" visível sem rolar; repetido no cabeçalho, no fechamento e no CTA fixo |
| 3 | Meta title por página | **falha leve, aguarda decisão** | 16 títulos únicos, mas 12 passam de 60 caracteres (64–87) porque o sufixo aprovado no COPY.md é longo. Proposta abaixo; só muda com aprovação, porque os títulos estão no COPY.md aprovado |
| 4 | Meta description por página | **falha leve, aguarda decisão** | Únicas, mas 13 passam de 155 caracteres (156–190). Mesma situação do item 3 |
| 5 | Imagem Open Graph | OK | `public/og.png` 1200×630 com identificação R1; `og:image` e `twitter:card` em todas as páginas (`lib/seo.ts`). Teste no WhatsApp/LinkedIn só com URL pública: pós-aceite |
| 6 | Favicons | OK | `app/favicon.ico` (16/32/48), `app/icon.png` (512), `app/apple-icon.png` (180) |
| 7 | robots.txt | OK | `out/robots.txt`; na prévia fecha tudo; com `NEXT_PUBLIC_INDEXAR=1` aplica a política aprovada e aponta para o sitemap |
| 8 | sitemap.xml | OK | `app/sitemap.ts`: 16 páginas públicas; sem /obrigado e 404 |
| 9 | Texto alternativo | OK | Nenhuma `<img>` sem `alt` no build; as 7 imagens de ambiente são decorativas (`alt=""`) e o OG tem `alt` com a identificação |
| 10 | Celular desenhado para o celular | OK | `npm run prints` sem rolagem horizontal em 375/768/1280; no celular: ordem das seções muda (horários sobem), carrossel de procedimentos, menu em folha, CTA fixo |
| 11 | CTA fixo no celular | OK | `components/layout/cta-fixo.tsx`; `teste-layout` confirma que some quando o CTA do hero está visível |
| 12 | Estados de carregamento | OK | Agenda online com estados carregando, erro, sem horários e lento (`teste-agendar`, 22 verificações) |
| 13 | Estados de erro em formulários | n/a | O site não tem formulário próprio (SCHEMA.md) |
| 14 | Página de agradecimento | OK | `/obrigado` (texto por origem) + eventos `view_obrigado` e `agendamento_concluido` |
| 15 | Política de privacidade | OK (rascunho jurídico) | `app/privacidade/page.tsx`; pendentes com a Dra.: e-mail do canal do titular e enquadramento como agente de pequeno porte |
| 16 | Termos de uso | OK (rascunho jurídico) | `app/termos/page.tsx`; link no rodapé |
| 17 | Banner de cookies | OK | `teste-cookies` 13 verificações: recusa equivalente, nada de terceiros antes do aceite |
| 18 | Analytics instalado | OK no código; conta pós-aceite | 4 eventos testados com ID de teste; painel (canal IA, retenção, conversões) em `docs/ANALYTICS.md` |
| 19 | Endereço de contato real | OK, com pendência | Endereço e telefone do consultório (BRIEF); sem e-mail no site até a Dra. definir um no domínio |
| 20 | HTTPS forçado | pós-aceite | Cloudflare: redirecionamento de http e www na publicação; `_headers` já traz HSTS |
| 21 | Imagens comprimidas | OK | `teste-midia`: AVIF/WebP ≤ 200 KB, `srcset` por largura, `loading="lazy"` fora do hero, vídeos ≤ 2 MB só no desktop |
| 22 | Velocidade medida | OK local; PSI pós-aceite | Lighthouse 12 celular: desempenho 93–98, acessibilidade 100, boas práticas 100, SEO 100 no build indexável |
| 23 | Contraste de cores | OK | axe `color-contrast` sem violação nas 18 rotas; medição por pixel sobre fotos (`npm run contraste`); modo escuro n/a |
| 24 | Nenhum link quebrado | OK | Varredura do build: nenhum link interno quebrado, nenhum `#` solto, nenhum texto de exemplo. Links externos (fontes científicas) conferidos na Etapa 4 (`FONTES_PROCEDIMENTOS.md`) |
| 25 | Proteção contra spam | n/a | Sem formulário próprio; a agenda externa tem a própria proteção |
| 26 | Sem cara de site gerado por IA | OK | Detector sem achados críticos em todas as rotas; audit 20/20; régua do tempo, paleta e tipografia do DESIGN.md |
| 27 | Verificação visual registrada | OK, pendente a conferência humana | 16 rotas × 3 larguras em `.verificacao/` + folha de contato enviada ao responsável; `review-animations` feito na Etapa 6 (acordeão, régua, hero) |
| 28 | Direção visual definida e seguida | OK | DESIGN.md: "fim de tarde na Paulista"; todas as páginas usam a mesma régua, paleta e ritmo |
| 29 | Tipografia e paleta | OK | Host Grotesk (informação) + Libre Caslon (voz da Dra.); 6 cores com papel fixo |
| 30 | Imagens com intenção e direito de uso | OK | Imagens e vídeos gerados no Runway com os prompts do DESIGN.md; `docs/LICENCAS.md` atualizado (inclui OG e ícones). Foto real da Dra.: pós-aceite |
| 31 | Teclado e HTML semântico | OK | Tab alcança todos os controles com anel visível (`auditoria-a11y`); um H1 por página, sem salto de nível; `header`, `nav`, `main`, `footer`, `aside`; `lang="pt-BR"` |

**Proposta para os itens 3 e 4 (aguarda aprovação):** trocar o sufixo "| Dra. Mariana Santiago, médica na Av. Paulista" por "| Dra. Mariana Santiago" nos títulos internos (a palavra "médica" e "Av. Paulista" continuam no título da home, no Sobre e nas descriptions) e cortar as descriptions para até 155 caracteres mantendo as palavras-chave do BRIEF. Ex.: "Toxina botulínica | Dra. Mariana Santiago" (41) e "Para que serve a toxina botulínica, como é feita, quando começa a agir, quanto dura, cuidados e possíveis complicações. Médica na Av. Paulista." (149).

## 3. Checklist de segurança (19 itens)

| # | Item | Resultado | Onde foi verificado |
| --- | --- | --- | --- |
| 1 | Proteger as chaves de API | OK | Nenhuma chave no projeto; as 8 variáveis `NEXT_PUBLIC_*` são configuração pública (número do WhatsApp, link da agenda, ID do GA4, URL do site, flags) |
| 2 | Nunca expor o `.env` | OK | `.gitignore` ignora `.env` e `.env.*`; só `.env.example` (sem valores) está no Git; site estático não serve `.env` |
| 3 | Nenhum segredo no código | OK | `detect-secrets` em todos os arquivos: só hashes de conteúdo em `skills-lock.json` e `tsconfig.tsbuildinfo` (falsos positivos, fora do site) |
| 4 | Login de verdade | n/a | Sem login |
| 5 | Permissões no servidor | n/a | Sem rotas de API |
| 6 | Usuário não vê dados de outro | n/a | Sem dados de usuário |
| 7 | Travar permissões do banco | n/a | Sem banco (SCHEMA.md) |
| 8 | Regras de Storage | n/a | Sem arquivos de usuário |
| 9 | Proteger páginas de admin | n/a | Sem painel |
| 10 | Modo debug desligado | OK | Build de produção (`next build`), sem React DevTools nem sourcemaps expostos |
| 11 | Sem erro detalhado | OK | `app/error.tsx` mostra mensagem genérica e o WhatsApp; não exibe `error.message` |
| 12 | Validar tudo no servidor | n/a | Sem formulário; o único parâmetro lido (`?origem`) só escolhe um texto |
| 13 | Limpar conteúdo do usuário | OK | Único `dangerouslySetInnerHTML` é o JSON-LD gerado do código, com `<` escapado |
| 14 | Proteger upload | n/a | Sem upload |
| 15 | Evitar injeção de SQL | n/a | Sem banco |
| 16 | Limite de tentativas | n/a | Sem login nem formulário |
| 17 | Histórico do Git sem segredos | OK | O binário do gitleaks foi bloqueado pelo ambiente; substituído por `detect-secrets` + varredura dos 23 commits (`git log -p --all`) por padrões de chave (AWS, OpenAI, GitHub, Google, JWT, Supabase, chaves privadas, `senha=`): nenhum achado; nenhum `.env` jamais commitado |
| 18 | Headers de segurança e CORS | OK (nota A esperada) | `public/_headers`: CSP, HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy, COOP; `teste-headers` sem violação de CSP. Nota do securityheaders.com só com URL pública: pós-aceite |
| 19 | Testar como um estranho | pós-aceite (pessoa) | Sem área restrita; na publicação, abrir em janela anônima e conferir `/robots.txt`, `/_headers` (deve dar 404) e o banner |

## 4. Checklist de SEO e IA (16 itens)

| # | Item | Resultado | Onde foi verificado |
| --- | --- | --- | --- |
| 1 | Conteúdo renderizado no servidor | OK | Texto completo no HTML de `out/` sem JavaScript (home, procedimentos, FAQ, Sobre) |
| 2 | Um H1 por página | OK | 17 páginas: 1 H1 cada, sem salto de nível |
| 3 | HTML semântico e idioma | OK | `header`, `nav`, `main`, `section`, `footer`; `lang="pt-BR"` |
| 4 | URLs legíveis | OK | `/como-funciona/`, `/procedimentos/toxina-botulinica/`, `/guias/pele-na-menopausa/` |
| 5 | Tag canônica | OK | `rel="canonical"` absoluta em todas as páginas indexáveis (`lib/seo.ts`) |
| 6 | Palavra-chave por página | OK (rascunho do BRIEF) | Home: "médica", "procedimentos estéticos", "Av. Paulista" no title, H1 e primeiro bloco; procedimentos: nome + "São Paulo/Paulista" no title e H1. Pesquisa de volume: `[A CONFIRMAR]` no BRIEF |
| 7 | Dados estruturados | OK (validação local) | `Physician` + `WebSite` em todas as páginas, `BreadcrumbList` nas internas, `FAQPage` com o mesmo texto visível; campos obrigatórios do Google conferidos por script. Teste de pesquisa aprimorada: pós-aceite |
| 8 | Search Console e Bing | pós-aceite | Contas no nome da Dra. |
| 9 | Perfil da Empresa no Google | pós-aceite | Ajuste completo previsto no BRIEF (artefatos na Etapa 14) |
| 10 | Conteúdo em formato de resposta | OK | FAQ (18 perguntas), páginas de procedimento com "para que serve" na primeira frase, guia |
| 11 | Fatos verificáveis | OK, com pendência | Prazos (régua), horários, endereço e "Texto revisado em" visíveis; valor da consulta: `[A CONFIRMAR]` com a Dra. |
| 12 | Entidade consistente | OK no site; pós-aceite fora | Nome, endereço, telefone e redes iguais no rodapé, no JSON-LD (`sameAs`) e no `llms.txt`; Google e redes dependem da correção do perfil |
| 13 | Política para robôs de IA | OK | Tabela aprovada em 22/10/2026; `robots.txt` gerado; teste após o deploy: pós-aceite |
| 14 | Autoria e credenciais | OK | `/sobre` com formação, CRM-SP e link de verificação no CFM; sem residência (decisão do Anexo D) |
| 15 | Tráfego vindo de IA | pós-aceite | Grupo de canais "IA" descrito em `docs/ANALYTICS.md`; precisa da conta |
| 16 | llms.txt | OK | `/llms.txt` gerado dos dados do site, sem termos vedados |

## 5. Anexo A do harness regulatório (26 itens)

| # | Item | Regra | Resultado | Onde foi verificado |
| --- | --- | --- | --- | --- |
| 1 | Identificação R1 na página principal e no rodapé | R1 | OK | `IdentificacaoR1` (`blocos.tsx`): nome e "MÉDICA: CRM-SP 227636" na mesma classe (`text-sm font-normal`), em todas as 17 páginas |
| 2 | OG e peças com identificação | R1 | OK | `og.png` e `og:image:alt` |
| 3 | Nenhuma ocorrência de termos vedados | R2 | OK, com 1 nota | Varredura de todo o build (HTML sem tags, alt, slugs, JSON-LD, llms.txt, robots, sitemap): zero. Única ocorrência: a URL de uma fonte científica (`jamanetwork.com/journals/jamadermatology/...`), citada como referência, com texto visível "Alam et al., 2021" |
| 4 | Pós-graduação com NÃO ESPECIALISTA | R2 | n/a | Nenhuma pós citada |
| 5 | JSON-LD sem `medicalSpecialty` | R2 | OK | `lib/seo.ts`: `Physician` com `identifier` CRM-SP e sem especialidade |
| 6 | Nenhuma oferta de tratamento de doença | R3 | OK | Varredura "tratamento de acne/melasma/rosácea/queda": zero; menções só educativas |
| 7 | Nenhuma promessa de resultado | R4 | OK | "garantir" só em negativas ("ninguém pode garantir"); cada procedimento com indicação individual, prazos como faixas e complicações |
| 8 | Sem superlativo, prêmio, exclusivo ou gratuidade | R5 | OK | "melhor" só como comparativo em frases ("a melhor opção pode ser esperar"); "grátis" zero; retorno redigido como "já faz parte do procedimento" (Anexo D) |
| 9 | Sem antes e depois | R6 | OK | "antes e depois" só em "cuidados antes e depois" |
| 10 | Imagens sem paciente; licenças | R6 | OK | Só ambiente e mãos (Runway); `LICENCAS.md` |
| 11 | Sem depoimentos nem avaliações | R7 | OK | Zero |
| 12 | Só valor de consulta; sem preço de procedimento | R8 | OK | Nenhum "R$" no site; "valor informado no agendamento" |
| 13 | Só nomes genéricos | R9 | OK | Zero marcas (Botox, Juvederm, Sculptra, Radiesse etc.) |
| 14 | Equipamentos conforme Anvisa | R9 | n/a | Nenhum equipamento citado |
| 15 | Nenhum método não reconhecido | R10 | OK | Procedimentos com fontes (`FONTES_PROCEDIMENTOS.md`) |
| 16 | Sem quiz, diagnóstico ou análise de foto | R11 | OK | Zero; política pede para não enviar fotos |
| 17 | Chatbot | R11 | n/a | Não há |
| 18 | Textos aprovados pela Dra. | R11 | **pendente** | Marcação RASCUNHO fica até a revisão dela (reunião de briefing) |
| 19 | Formulário mínimo | R12 | OK | Sem formulário próprio; agenda só nome, celular e e-mail |
| 20 | Mensagem do WhatsApp neutra | R12 | OK | `lib/site.ts` |
| 21 | GA4 só após consentimento; eventos sem procedimento | R13, R15 | OK | `teste-cookies`: origem `pagina_procedimento`, sem nome |
| 22 | Banner com recusa equivalente; política completa; canal do encarregado | R15 | OK, com pendência | Canal hoje é o WhatsApp; e-mail `[A CONFIRMAR]` |
| 23 | Acessibilidade | R16 | OK | Seções 1 e 2 (axe, contraste, teclado, alt, semântica) |
| 24 | Fotos e informações correspondem à realidade | R17 | **🟡 pós-aceite** | As imagens são de ambiente gerado por IA, não do consultório real; os Termos avisam. Antes de publicar: fotos reais ou manter o aviso visível. Horários, endereço e telefone são os do BRIEF (`[A CONFIRMAR]` na reunião) |
| 25 | Clínica (PJ) | R18 | n/a | Pessoa física (decisão do harness) |
| 26 | Anexo B reverificado; CRM reconsultado | R20 | OK / pós-aceite | Anexo B verificado em 22/10/2026 (menos de 90 dias); reconsultar o CRM antes de publicar |

## Pendências que saem desta etapa

- Decidir os títulos e descriptions encurtados (itens 3 e 4 de produção).
- Conferência humana dos prints (item 27).
- Pós-aceite: HTTPS/redirecionamentos, PageSpeed e securityheaders.com em URL pública, Search Console e Bing, Perfil do Google, teste dos robôs liberados, conta do GA4, fotos reais, reconsulta do CRM.
- Com a Dra.: aprovação dos textos, e-mail do canal do titular, valor da consulta, política de robôs.
