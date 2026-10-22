// Dados do consultório usados no cabeçalho, no rodapé e nos CTAs.
// Fonte: docs/BRIEF.md (premissas de 22/10/2026). Itens [A CONFIRMAR] lá continuam pendentes.

export const identificacao = {
  nome: "Dra. Mariana Passos Santiago",
  registro: "MÉDICA: CRM-SP 227636", // R1: mesma fonte, tamanho e cor do nome, sem negrito
  marca: "Dra. Mariana Santiago",
};

export const navegacao = [
  { href: "/como-funciona/", rotulo: "Como funciona" },
  { href: "/procedimentos/", rotulo: "Procedimentos" },
  { href: "/sobre/", rotulo: "Sobre" },
  { href: "/perguntas-frequentes/", rotulo: "Perguntas" },
] as const;

export const legais = [
  { href: "/privacidade/", rotulo: "Política de privacidade" },
  { href: "/termos/", rotulo: "Termos de uso" },
] as const;

export const endereco = {
  linha1: "Av. Paulista, 1048, 18º andar",
  linha2: "Bela Vista, São Paulo/SP, 01310-100",
};

export const horarios = [
  { dias: "Terça e sexta", horas: "13h às 21h" },
  { dias: "Sábado", horas: "8h às 14h" },
] as const;

export const redes = [
  { href: "https://www.instagram.com/dra.marianapsantiago/", rotulo: "Instagram" },
  { href: "https://www.tiktok.com/@dra.marianapsantiago", rotulo: "TikTok" },
] as const;

export const telefoneVisivel = "(11) 3192-2635";

// WhatsApp: número e mensagem neutra vêm do ambiente (não são segredos). R12: a mensagem não pede queixa.
const numero = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
const mensagem =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? "Olá! Vim pelo site e gostaria de agendar uma consulta.";

export const whatsappHref = numero
  ? `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
  : "/agendar/";

// Plano B do WhatsApp (APP_FLOW): WhatsApp Web, para computador sem o aplicativo.
export const whatsappWebHref = numero
  ? `https://web.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`
  : "/agendar/";

// Agenda online (Calendly). Vazio = modo demonstração (simulação, sem coletar dados).
export const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "";
