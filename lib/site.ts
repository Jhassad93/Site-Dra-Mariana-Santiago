// Dados do consultório usados no cabeçalho, no rodapé e nos CTAs.
// Projeto de portfólio: consultório fictício (dados reais do cliente original removidos em 25/10/2026).

export const identificacao = {
  nome: "Dra. Helena Duarte",
  registro: "MÉDICA: CRM-SP 123456*", // R1: mesma fonte, tamanho e cor do nome, sem negrito. * = fictício (nota no rodapé)
  marca: "Dra. Helena Duarte",
};

// Projeto de portfólio: pessoa, consultório, registro e contatos são fictícios. Aparece no rodapé de todas as páginas.
export const notaPortfolio =
  "* Projeto de portfólio. A médica, o consultório, o registro no CRM, o telefone e os horários são fictícios. Nenhuma consulta é marcada por este site.";

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
  linha1: "Av. Paulista",
  linha2: "Bela Vista, São Paulo/SP",
};

export const horarios = [
  { dias: "Terça e sexta", horas: "13h às 21h" },
  { dias: "Sábado", horas: "8h às 14h" },
] as const;

// Portfólio: sem perfis em redes sociais (perfis inventados poderiam existir de verdade).
export const redes: readonly { href: string; rotulo: string }[] = [];

// Data da última revisão dos textos educativos (visível nas páginas de procedimento e no guia: AEO, item 11).
export const revisaoTextos = "22 de outubro de 2026";

export const telefoneVisivel = "(11) 1234-5678"; // fictício

// WhatsApp: número e mensagem neutra vêm do ambiente (não são segredos). R12: a mensagem não pede queixa.
// Sem número (portfólio): modo demonstração; os botões levam a /agendar e o "Abrir o WhatsApp" simula o envio.
const numero = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
const mensagem =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? "Olá! Vim pelo site e gostaria de agendar uma consulta.";

export const whatsappDemo = !numero;

export const whatsappHref = numero
  ? `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
  : "/agendar/";

// Plano B do WhatsApp (APP_FLOW): WhatsApp Web, para computador sem o aplicativo.
export const whatsappWebHref = numero
  ? `https://web.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`
  : "/agendar/";

// Agenda online (Calendly). Vazio = modo demonstração (simulação, sem coletar dados).
export const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "";
