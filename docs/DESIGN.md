# DESIGN.md — Dra. Mariana Santiago

> Fonte da verdade visual do site. As skills de design trabalham dentro deste arquivo, nunca no lugar dele.
> **Harness regulatório v1.3 aplicado** (seções "Imagens" e "Regras do harness para o visual").
> Gerado em 22/10/2026, em modo protótipo. Insumos: referências escolhidas pelo responsável (Reset, Felix, MyHealthPrac, Odyssée), identidade observada no Instagram da Dra., `PERSONAS.md` e `CONCORRENTES.md`.

## Direção visual
- **Em uma frase:** *fim de tarde na Paulista*. Luz dourada sobre matéria quieta (linho, gesso, papel) e informação precisa: uma consulta médica sem pressa, traduzida em página.
- **Por que combina com o público e o tom:** a persona principal (Carolina, 39, profissional da Paulista) chega cansada do excesso, e o medo nº 1 do público é "ficar artificial" (67%). Uma página calma, quente e honesta, sem rostos "perfeitos" e com prazos e riscos visíveis, mostra o método em vez de prometer resultado. O tom acolhedor e feminino do Instagram dela continua, um grau mais sóbrio, como pede o CFM.
- **O elemento memorável (a única ousadia):** a **régua do tempo**. É uma linha fina dourada com um marcador quadrado, que vem da arte do Instagram dela e do detalhe do Reset, e mostra em cada procedimento os marcos dia 0 → início do efeito → efeito pleno → manutenção. Ela aparece no hero (como linha), nos cards (como faixa de dados) e na seção "Planejamento no tempo" (completa). Tudo ao redor dela é silencioso.

## Estilo-base
- **Referência:** composição das referências do responsável, no lugar de um estilo do Refero (decisão de 22/10/2026):
  - **Hero:** [Reset](https://resetwellness.framer.website/) (template Framer pago). Usamos só a linguagem visual; nenhum layout, imagem ou texto copiado.
  - **Cards de procedimento:** [MyHealthPrac](https://www.myhealthprac.com/) (faixa de dados) + [Felix](https://www.felixforyou.ca/) (pílula de vidro e cards compactos).
  - **Seção com a médica e assinatura:** Felix (versão capturada pela land-book).
  - **Ritmo de imagem e vídeo:** [Odyssée](https://www.odysseeclinic.com.au/).
- **Paleta:** definida abaixo e conferida por cálculo de contraste WCAG. O link do Realtime Colors será gerado na etapa 1 da construção, ao aplicar os tokens no tema shadcn.
- Nenhum nome, logo ou elemento de identidade das referências entra no site.

## Cores

| Papel | Nome | Valor | Uso |
| --- | --- | --- | --- |
| Texto | Tinta | `#1C1813` | Texto corrido, títulos sobre fundo claro, seções escuras (fundo), botão principal |
| Fundo | Gesso | `#EFEEEA` | Fundo da página e texto sobre fundos escuros. Off-white mineral, levemente frio: a página é a parede e o dourado é a luz do fim de tarde batendo nela. Substituiu o Linho `#F7F2EA`, que o Impeccable marcava como fundo creme típico de IA |
| Primária | Tinta | `#1C1813` | CTA principal ("Agendar consulta"): fundo Tinta com texto Gesso em seções claras; no hero, vidro escuro com texto Gesso |
| Secundária | Areia | `#EBD4AD` | Títulos e textos sobre o hero e as seções escuras; painéis e fundos de cards compactos |
| Destaque | Ouro | `#C9A35F` | **Só ornamento e marcação**: régua do tempo, marcador quadrado, linhas finas, ícones. Nunca texto sobre fundo claro |
| Destaque de texto | Bronze | `#7A5A2B` | Links e pequenos destaques de texto sobre Gesso |

Texto secundário: Tinta a 72% de opacidade sobre Gesso (6,49:1). Não é uma cor nova.

**Contrastes calculados (WCAG 2.x):**

| Par | Razão | Uso permitido |
| --- | --- | --- |
| Tinta sobre Gesso | 15,21 | Qualquer texto |
| Bronze sobre Gesso | 5,44 | Texto normal (AA) e links |
| Areia sobre Tinta | 12,24 | Qualquer texto |
| Ouro sobre Tinta | 7,47 | Texto e ornamento em seções escuras |
| Gesso sobre Tinta | 15,21 | Botão principal |
| Bronze sobre Areia | 4,38 | **Não usar para texto normal** (só ≥ 24px ou ícone) |
| **Ouro sobre Gesso** | **2,04** | **Proibido para texto.** Só linhas e marcadores |

Sobre foto ou vídeo: o texto fica sempre sobre um véu de Tinta (gradiente de 0% a 55% de opacidade na área do texto), para manter AA em qualquer quadro. Conferir nos prints.

Regras: 5 cores, cada uma sempre no mesmo papel; nada fora desta tabela. Sem modo escuro dedicado no protótipo: as seções escuras são parte do layout. Se o modo escuro entrar depois, inverter Tinta e Gesso e manter Ouro só como ornamento.

## Tipografia
> **Revisado em 22/10/2026** (par A "Carta", escolhido pelo responsável). Geist e Instrument Serif foram trocadas porque o Impeccable as marca como "fontes muito usadas", típicas de páginas geradas por IA. As novas foram testadas no detector, que não as sinalizou.

- **Host Grotesk** (sans, SIL OFL, servida pelo próprio site), pesos 300, 400 e 500. Faz o trabalho de informação: títulos, corpo, botões, dados da régua do tempo e menus. Grotesca precisa, levemente técnica, coerente com "médica que explica com calma". Títulos grandes em 300 com espaçamento levemente negativo (−0,02em).
- **Libre Caslon Text** (serifada, SIL OFL), regular e itálico. Tem **um único papel: a voz da Dra.**, no itálico. O Caslon é a letra clássica de livros e cartas: o nome dela, a assinatura, a frase da seção de fechamento e as citações dela nas páginas ("Na consulta, eu…"). **Nunca** é usada como título grande do hero (o Impeccable marca serifada itálica grande no hero como clichê de IA) nem para destacar uma palavra solta num título.
- **Escala:** terça maior (1,25), base 17px: 17 · 21 · 26,5 · 33 · 41,5 · 52 · 65 · 81. O hero usa `clamp(2.75rem, 7vw, 5.25rem)` em Host Grotesk 300.
- **Entrelinha:** 1,55 no corpo; 1,35 nas citações em Libre Caslon (a serifada pede um pouco mais de ar); 1,05 nos títulos grandes.
- **Medida de linha:** até 68 caracteres no corpo; citações até 56.
- **Sem caixa-alta em rótulos.** Sem rótulos ("eyebrows") acima dos títulos. Botões em caixa de frase ("Agendar consulta"), sem seta "→" no texto.
- **Bloco de identificação (R1):** "Dra. Mariana Passos Santiago" e "MÉDICA: CRM-SP 227636" em Host Grotesk 400, **mesmo tamanho e mesma cor, sem negrito** (manual da Codame). No rodapé e na seção de assinatura, 15px.
- **Tamanho mínimo:** 15px para qualquer texto (13px só em rótulos curtos da régua do tempo, sempre com contraste AA).

## Layout

**Largura e grade:** conteúdo até 1200px; grade de 12 colunas com 24px de calha; textos alinhados à esquerda (nunca justificados nem centralizados em blocos longos). Seções separadas por 128px no desktop e 80px no celular.

**Home: desktop**
```
┌──────────────────────────────────────────────────────────────┐
│ [M] Dra. Mariana Santiago   Como funciona  Procedimentos …  [Agendar consulta] │ ← cabeçalho de vidro
│                                                              │
│  Título em Host Grotesk 300, Areia, 2 linhas, alinhado à esquerda   │  VÍDEO 1 em tela cheia
│  ───────────────────■───────────────  (régua, Ouro)          │  (luz no linho), véu Tinta
│  Apoio curto em Gesso          [Agendar consulta]  Ver horários │
│  Mariana Santiago (Libre Caslon itálico) · MÉDICA: CRM-SP… │
│  Ter e sex até 21h · Sáb de manhã · Av. Paulista, 1048        │
├──────────────────────────────────────────────────────────────┤
│ Como eu trabalho: 4 colunas com linha fina, ícone de traço   │  fundo Gesso
│ Conversa │ Avaliação │ Plano │ Retorno   (sequência real, numerada) │
├──────────────────────────────────────────────────────────────┤
│ Procedimentos                                                │
│ ┌────────┐ ┌────────┐ ┌────────┐   cards retrato 3:4         │
│ │~14 dias│ │~30 dias│ │48 h–7 d│ ← faixa de dados (régua)    │
│ │ foto   │ │ foto   │ │ foto   │                             │
│ │Toxina  │ │Bioest. │ │Lábios  │  pílula de vidro            │
│ └────────┘ └────────┘ └────────┘                             │
│ [Contorno facial  ›] [Skinbooster ›] [Peelings ›]  compactos │
├──────────────────────────────────────────────────────────────┤
│ Planejamento no tempo (fundo Tinta)                          │
│ Régua completa: hoje → 2 semanas → 1 mês → 3 meses → 6 meses │  VÍDEO 2 (luz no gesso)
│ texto curto à esquerda                                       │  à direita, assimétrico
├──────────────────────────────────────────────────────────────┤
│ Perguntas frequentes (5) — acordeão com linhas finas         │
├──────────────────────────────────────────────────────────────┤
│ Onde e quando: mapa estático + horários + metrô              │
├──────────────────────────────────────────────────────────────┤
│ Fechamento (gradiente Areia→Gesso)                           │
│ "Frase dela" (Libre Caslon itálico)      [foto da Dra.   │
│  assinatura                                    recortada]    │
│  Dra. Mariana Passos Santiago                                │
│  MÉDICA: CRM-SP 227636         [Agendar consulta]            │
├──────────────────────────────────────────────────────────────┤
│ Rodapé: identificação R1, endereço, horários, legais, redes  │
└──────────────────────────────────────────────────────────────┘
```

**Página de procedimento (modelo):** título + resumo em uma frase → **régua do tempo do procedimento** (dia 0 → início → efeito pleno → manutenção, em faixas e com "varia de pessoa para pessoa") → "Para quem costuma ser indicado" → "Como é feito" → "O que esperar depois" → "Possíveis efeitos e complicações" → "Na consulta, eu…" (voz da Dra., em Libre Caslon) → perguntas do procedimento → CTA.

## Componentes
- **Biblioteca principal:** **Spell UI** (site sóbrio e institucional, conforme a tabela do kit), com shadcn/ui na base. Outras bibliotecas só para lacunas, registradas em `LICENCAS.md`.
- **Cabeçalho de vidro ("liquid glass"):**
  - Sobre o hero: `background: rgb(28 24 19 / 0.22)`, `backdrop-filter: blur(16px) saturate(140%)`, borda de 1px `rgb(235 212 173 / 0.24)`, brilho interno no topo `inset 0 1px 0 rgb(255 255 255 / 0.12)`, texto Gesso.
  - Depois do hero (seções claras): `background: rgb(239 238 234 / 0.72)`, texto Tinta, borda `rgb(28 24 19 / 0.08)`.
  - Desktop: cabeçalho flutuante com margem de 12px e raio de 16px. Celular: barra encostada no topo.
  - Alternativas: `@supports not (backdrop-filter: blur(1px))` → fundo sólido (Tinta 92% ou Gesso 96%); `prefers-reduced-transparency: reduce` → fundo sólido.
  - O estado é escolhido pela seção que está sob o cabeçalho: seções escuras levam `data-tema="escuro"`.
- **Botão principal:** fundo Tinta, texto Gesso, Host Grotesk 500 a 16px, altura 48px, raio 999px, foco visível com anel de 2px e afastamento de 2px: **Bronze** sobre fundo claro (5,44:1) e **Ouro** sobre fundo escuro (7,47:1). O Ouro sobre Gesso (2,04:1) não chega aos 3:1 exigidos para indicadores de foco. No hero, versão de vidro (mesma receita do cabeçalho) com texto Gesso.
- **Botão secundário / link "Ver horários disponíveis":** texto Bronze sublinhado (sobre Gesso) ou Areia (sobre escuro).
- **Card de procedimento grande:** retrato 3:4, raio de 20px, foto em tela cheia, **faixa de dados no topo** (número em Host Grotesk 300 a 33px + rótulo a 13px, separados por linha fina Areia), legenda de indicação embaixo (Gesso sobre véu Tinta), pílula de vidro "Entender o procedimento". Sem sombra; no hover só a foto escala 1,02 em 300ms.
- **Card compacto:** fundo Areia a 40% sobre Gesso, raio de 14px, nome + seta em traço desenhado como ícone (não o caractere "→"), altura de 72px.
- **Régua do tempo:** linha de 1px Ouro, marcadores quadrados de 8px, rótulos em Host Grotesk 13px (Tinta 72% ou Areia). No celular, fica vertical.
- **Acordeão do FAQ:** linhas finas Tinta a 12%, ícone "+" que vira "−", abertura com altura animada em 200ms.
- **Seção de assinatura:** gradiente Areia → Gesso, foto recortada à direita, frase em Libre Caslon itálico a 33px, assinatura (SVG) e bloco de identificação R1.
- **Raios por hierarquia:** cards grandes 20px · cabeçalho 16px · cards compactos 14px · campos 10px · botões 999px. Não é um raio único para tudo.
- **Ícones:** traço de 1,25px em Ouro ou Tinta, desenhados como SVG. Sem pacotes de ícone preenchido.

## Imagens

| Uso | Origem no protótipo | Versão final | Direito de uso |
| --- | --- | --- | --- |
| Foto da Dra. (seção de assinatura e Sobre) | **Foto do Instagram dela** (post de apresentação, fundo claro e roupa preta), **só na prévia privada** | Sessão de fotos profissional no consultório, com a mesma luz quente | Registrar em `LICENCAS.md`: "uso exclusivo na prévia privada apresentada à retratada; substituir antes de publicar" |
| Vídeo 1, hero | **Higgsfield** (prompt abaixo) | Mantém ou troca por filmagem do consultório | Termos da ferramenta, registrados em LICENCAS.md |
| Vídeo 2, planejamento | Higgsfield (prompt abaixo) | Idem | Idem |
| Vídeo 3 (opcional), assinatura | Higgsfield (prompt abaixo) | Idem | Idem |
| Fotos dos cards de procedimento | Geradas por IA, só matéria, luz e mãos (prompts abaixo) | Fotos reais do consultório e de detalhes, se a sessão incluir | Termos da ferramenta |
| Imagem Open Graph (1200×630) | Capa do vídeo 1 + bloco de identificação R1 | Idem | — |

**Estilo:** luz natural quente e lateral (fim de tarde), sombras longas e suaves, tons de Areia, Ouro e Tinta, grão de filme leve, profundidade de campo curta. Matérias: linho, gesso, papel, cerâmica, madeira clara, vidro.

**Nunca (harness):**
- rosto de modelo ou "pele perfeita" ao lado de procedimento;
- antes e depois;
- foto de paciente;
- seringa ou agulha em close;
- frasco ou produto com marca;
- banco de imagem genérico;
- imagem que sugira transformação (R4, R6, R9, R11).

**Prompts de vídeo (Higgsfield), em inglês, 16:9, 6 a 8 s, mudos e em loop:**

Vídeo 1, hero:
```
Slow cinematic dolly-in toward a sheer linen curtain gently moving in late-afternoon golden-hour light, inside a minimalist, elegant medical consultation room. Warm palette of soft black, sand beige and muted gold; dust particles floating in a diagonal light beam; a blurred armchair and a small table with a ceramic vase in the background. Shallow depth of field, 35mm film look, soft grain, calm and premium mood. No people, no faces, no skin, no text, no logos, no medical products or brands. Seamless loop, 8 seconds, 16:9.
```
Vídeo 2, planejamento no tempo:
```
Static macro shot of warm golden sunlight slowly sweeping across a textured cream plaster wall, the soft shadow of a window frame and a leafy plant drifting as time passes, like a sundial. Warm sand, cream and soft black tones, gentle film grain, quiet and contemplative mood. No people, no faces, no text, no logos, no clocks. Seamless loop, 8 seconds, 16:9.
```
Vídeo 3 (opcional), assinatura:
```
Close-up of a woman's hands (no face visible) writing with a fountain pen in a linen-covered notebook on a light oak desk, warm side light from a window, a cup of tea and dried flowers softly out of focus. Slow, subtle camera movement. Warm sand, cream and soft black palette, 35mm film look. No faces, no medical instruments, no syringes, no products, no text legible on the page, no logos. Seamless loop, 6 seconds, 16:9.
```

**Prompts de imagem (cards grandes, retrato 3:4, 1600×2133):**
- Toxina botulínica, "expressão":
```
Editorial still life: a crumpled-then-smoothed sheet of fine cream paper on a light oak surface, raking golden-hour side light revealing gentle texture, long soft shadows, warm sand and muted gold tones, 35mm film grain, minimal and calm. No people, no faces, no text, no logos, no syringes. Portrait 3:4.
```
- Bioestimuladores de colágeno, "firmeza e tempo":
```
Editorial still life: folds of heavy natural linen fabric gathered and draped, warm late-afternoon light emphasizing structure and volume, soft black background fading to sand beige, muted gold highlights, 35mm film grain, quiet premium mood. No people, no faces, no text, no logos. Portrait 3:4.
```
- Preenchimento labial, "contorno sutil":
```
Editorial macro: a single drop of clear gel resting on a smooth cream ceramic surface, warm golden side light creating a soft highlight and a delicate shadow, sand and muted gold palette, shallow depth of field, 35mm film grain. No people, no faces, no lips, no text, no logos, no product packaging. Portrait 3:4.
```
Os cards compactos (contorno facial, skinbooster, peelings) não levam foto.

## Movimento
- **Um momento orquestrado só:** na entrada da home, o título do hero aparece em 600ms com opacidade e deslocamento de 8px, e a régua do tempo se desenha da esquerda para a direita em 900ms. Mais nada anima sozinho.
- **Movimento como resposta:** hover dos cards (só a foto, escala 1,02, 300ms), acordeão (200ms) e o cabeçalho que vira vidro claro ao passar do hero (200ms).
- Só `transform` e `opacity`. Curva `cubic-bezier(0.22, 1, 0.36, 1)` nas entradas.
- `prefers-reduced-motion: reduce`: sem entrada animada, régua já desenhada, **vídeos trocados pela imagem de capa**.
- Vídeos: `muted`, `playsinline`, `loop`, `preload="none"`, tocam só quando visíveis e pausam fora da tela. Até 2 por página (limite do kit).

## Celular
- **Hero:** o vídeo dá lugar à **imagem de capa** (economia de dados). O título vai a cerca de 44px em 3 linhas, e o CTA fica na primeira dobra. Logo abaixo do hero, a faixa **"Onde e quando"** (horários e metrô), que sobe de posição (crença U6).
- **CTA fixo no rodapé da tela:** "Agendar consulta", em Tinta com texto Gesso, sempre visível, com área de toque de 48px. Some quando o CTA da seção está visível, para não duplicar.
- **Cards de procedimento:** carrossel horizontal com deslize (os 3 grandes) e lista dos 3 compactos. Fotos recortadas em 4:5.
- **Régua do tempo:** vertical.
- **Menu:** botão quadrado em vidro escuro que abre uma folha cheia em Gesso com os links e o CTA.
- **Seção de assinatura:** foto em cima (recorte vertical), frase e identificação embaixo.
- **Tipografia:** corpo de 17px no celular (nunca menor) e citações a 26px.

## Espaçamento e forma
- **Largura máxima:** 1200px de conteúdo; o hero e as seções escuras vão de ponta a ponta.
- **Espaço entre seções:** 128px no desktop e 80px no celular. Respiro interno dos cards: 20px.
- **Raio de borda:** por hierarquia (ver Componentes).
- **Sombras:** nenhuma. Profundidade vem de luz, vidro e sobreposição.

## Parâmetros da Taste Skill (proposta)
- Variação de layout: **média** (assimetria editorial em 2 seções, hero e planejamento; o resto em grade calma).
- Intensidade de movimento: **baixa** (um momento orquestrado + respostas a ações).
- Densidade visual: **baixa** (muito respiro; a informação fica concentrada na régua e nas páginas de procedimento).

## Regras do harness para o visual
- Bloco de identificação R1 no hero (versão curta), na seção de assinatura e no rodapé, com tipografia uniforme e sem negrito.
- Nenhuma imagem sugere resultado; nenhum antes e depois; nenhum depoimento ou nota de avaliação exibida (R4, R6, R7).
- Pílulas e botões nunca dizem "grátis", "promoção" ou "vagas limitadas" (R5, R8).
- Números da régua do tempo sempre em faixa, com "varia de pessoa para pessoa" visível junto da régua e com fonte registrada na copy. Validação da Dra. depois do aceite (🟡).
- Nenhum ícone ou ilustração de seringa em close, nem de produto com marca (R9).

## Faça
- Deixar a luz e o espaço trabalharem: uma ideia por seção.
- Usar a régua do tempo sempre que houver um prazo real.
- Escrever os botões pelo que acontece: "Agendar consulta", "Ver horários disponíveis", "Entender o procedimento".
- Manter a voz da Dra. (Libre Caslon) rara, para que ela pese.
- Conferir contraste de texto sobre vídeo em quadros claros e escuros.

## Não faça
- Usar Ouro em texto sobre fundo claro.
- Destacar uma palavra solta em itálico num título.
- Usar rótulos em caixa-alta acima dos títulos, ou "→" no texto dos botões.
- Usar cards idênticos com a mesma sombra para tudo.
- Animar cada seção ao rolar a página.
- Usar rostos de modelo, pele "perfeita", closes de lábios ou de agulhas.
- Copiar layout, imagens ou textos das referências.
