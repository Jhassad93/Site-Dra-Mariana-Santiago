# Analytics (GA4)

Fonte: APP_FLOW.md (eventos) e SCHEMA.md (dados). Harness R13 e R15: nada carrega antes do aceite no banner, e nenhum evento leva nome de procedimento.

## Como está no código

- `components/consentimento/analytics.tsx`: carrega o GA4 (`@next/third-parties`) só com `NEXT_PUBLIC_GA4_ID` preenchido **e** a escolha "aceito". Se a pessoa recusar depois de aceitar, apaga os cookies `_ga` e recarrega a página.
- **Modo de consentimento** (`lib/eventos.ts`), enviado antes do script: `analytics_storage` permitido; `ad_storage`, `ad_user_data` e `ad_personalization` sempre negados. Os sinais do Google e a personalização de anúncios ficam desligados.
- Teste automático: `npm run teste-cookies`. Para testar com o GA4, gere um build com `NEXT_PUBLIC_GA4_ID=G-TESTE00000` e rode `COM_GA=1 npm run teste-cookies`.

## Eventos

| Evento | Quando | Parâmetro `origem` |
| --- | --- | --- |
| `clique_whatsapp` | Clique em qualquer link do WhatsApp ou no botão "Abrir o WhatsApp" de /agendar | `cta_fixo`, `cabecalho`, `rodape`, `agendar` ou `<página>_<seção>` (ex.: `home_titulo_hero`). Página de procedimento vira `pagina_procedimento`, **sem o nome** |
| `clique_agenda_online` | Clique em "Ver horários disponíveis" (abre a agenda) | `agendar` |
| `view_obrigado` | Carregamento de /obrigado | `whatsapp` ou `agenda` |
| `agendamento_concluido` | /obrigado vindo da agenda online (`?origem=agenda`) | — |

Para adicionar um novo ponto de clique, use `data-evento="clique_whatsapp"` ou `data-evento="clique_agenda_online"` no elemento e, se quiser, `data-origem="..."`.

## Configuração no painel do GA4 (na conta da Dra., depois do aceite)

Não dá para fazer pelo código. A conta de demonstração do protótipo ainda não existe e fica para quando a lead pedir a demonstração dos números.

1. **Retenção de dados:** Administrador > Coleta e retenção de dados > Retenção de dados > **14 meses** (SCHEMA.md).
2. **Sinais do Google:** desligados.
3. **Eventos principais (conversões):** marcar `clique_whatsapp` e `agendamento_concluido`.
4. **Grupo de canais "IA"** (checklist SEO e IA, item 15). Administrador > Exibição de dados > Grupos de canais:
   - Copie o grupo padrão e crie o canal **"IA"**.
   - Condição: *Origem* corresponde à regex `(chatgpt\.com|chat\.openai\.com|perplexity\.ai|gemini\.google\.com|claude\.ai|copilot\.microsoft\.com)`.
   - Coloque o canal **acima de "Referência"**, porque o GA4 aplica a primeira regra que bate.
5. **Dimensão personalizada:** `origem`, com escopo de evento, para os relatórios por ponto de clique.
