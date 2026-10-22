// Eventos do GA4 (APP_FLOW, "Eventos de analytics"). Só saem depois do aceite (R13, R15):
// sem aceite, enviarEvento não faz nada. Nunca enviar nome de procedimento (evita inferir interesse de saúde).
import { lerEscolha } from "@/lib/consentimento";

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

export type NomeEvento = "clique_whatsapp" | "clique_agenda_online" | "agendamento_concluido" | "view_obrigado";

/** Mesma fila que o gtag.js usa; eventos enviados antes do script carregar são processados quando ele chega. */
function gtag(): Gtag {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
  return window.gtag;
}

/**
 * Modo de consentimento, chamado antes do script do GA4 carregar (só depois do aceite):
 * análise permitida; publicidade sempre negada (o site não faz anúncio nem remarketing).
 */
export function prepararConsentimento() {
  const g = gtag();
  g("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  g("set", { allow_google_signals: false, allow_ad_personalization_signals: false });
}

export function enviarEvento(nome: NomeEvento, parametros?: Record<string, string>) {
  if (typeof window === "undefined" || !process.env.NEXT_PUBLIC_GA4_ID || lerEscolha() !== "aceito") return;
  gtag()("event", nome, parametros ?? {});
}

/** Página sem dado de saúde: procedimento vira "pagina_procedimento", sem o nome. */
export function paginaAtual(caminho: string) {
  if (caminho === "/") return "home";
  if (caminho.startsWith("/procedimentos/") && caminho !== "/procedimentos/") return "pagina_procedimento";
  return caminho.replace(/^\/|\/$/g, "").replace(/[/-]/g, "_") || "home";
}

/** Origem do clique: data-origem explícito; senão página + área (cabeçalho, rodapé, CTA fixo ou seção). */
export function origemDoClique(alvo: Element) {
  const explicita = alvo.closest("[data-origem]")?.getAttribute("data-origem");
  if (explicita) return explicita;
  const pagina = paginaAtual(location.pathname);
  if (alvo.closest(".cta-fixo")) return "cta_fixo";
  if (alvo.closest("header")) return "cabecalho";
  if (alvo.closest("footer")) return "rodape";
  const secao = alvo.closest("section[aria-labelledby]")?.getAttribute("aria-labelledby")?.replace(/-/g, "_");
  return secao ? `${pagina}_${secao}` : pagina;
}
