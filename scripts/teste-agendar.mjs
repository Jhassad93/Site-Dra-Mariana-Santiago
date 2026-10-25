// Testa os caminhos do APP_FLOW em /agendar e /obrigado (Etapa 9). Uso: node scripts/teste-agendar.mjs (servidor em :4180)
import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";
const base = process.env.BASE || "http://localhost:4180";
const DEST = new URL("../.verificacao/", import.meta.url).pathname;
await mkdir(DEST, { recursive: true });
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const r = [];
const ok = (teste, cond, detalhe = "") => r.push({ teste, resultado: cond ? "OK" : "FALHA", detalhe: String(detalhe).slice(0, 70) });
const h1 = (p) => p.locator("h1").first().textContent();

// 1. WhatsApp abre em nova aba → obrigado (whatsapp)
let ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
let externos = [];
ctx.on("request", (q) => { if (/calendly\.com/.test(q.url())) externos.push(q.url()); });
let page = await ctx.newPage();
await page.goto(base + "/agendar/", { waitUntil: "networkidle" });
ok("Nada do Calendly carrega antes do clique", externos.length === 0, externos.length);
await ctx.route(/wa\.me|whatsapp\.com/, (rt) => rt.fulfill({ status: 200, body: "whatsapp" }));
const [popup] = await Promise.all([ctx.waitForEvent("page"), page.click("text=Abrir o WhatsApp")]);
ok("WhatsApp abre em nova aba com mensagem neutra", new RegExp(`wa\\.me/${process.env.TESTE_WHATS || "5500000000000"}\\?text=Ol`).test(popup.url()), popup.url());
ok("Estado carregando: 'Abrindo o WhatsApp…'", (await page.locator("button", { hasText: "Abrindo o WhatsApp" }).count()) === 1);
await page.waitForURL(/obrigado\/\?origem=whatsapp/, { timeout: 5000 });
await page.waitForTimeout(300);
ok("Vai para /obrigado?origem=whatsapp", (await h1(page)) === "Sua mensagem está a caminho", await h1(page));
await ctx.close();

// 2. Nova aba bloqueada → plano B
ctx = await browser.newContext({ viewport: { width: 375, height: 760 } });
await ctx.addInitScript(() => { window.open = () => null; });
page = await ctx.newPage();
await page.goto(base + "/agendar/", { waitUntil: "networkidle" });
await page.click("text=Abrir o WhatsApp");
await page.waitForTimeout(300);
ok("Plano B aparece com o número", await page.locator("text=Não conseguimos abrir o WhatsApp").isVisible());
ok("Plano B: botão Copiar número", await page.locator("button", { hasText: "Copiar número" }).isVisible());
ok("Plano B: link do WhatsApp Web", new RegExp(`web\\.whatsapp\\.com/send\\?phone=${process.env.TESTE_WHATS || "5500000000000"}`).test(await page.locator("text=Abrir o WhatsApp Web").getAttribute("href")));
ok("Continua na página /agendar (sem obrigado falso)", page.url().includes("/agendar"));
await page.screenshot({ path: DEST + "agendar-planoB-375.png", fullPage: false });
await ctx.close();

// 3. Agenda de demonstração: esqueleto → horários → confirmar → obrigado (agenda)
ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
page = await ctx.newPage();
await page.goto(base + "/agendar/#agenda", { waitUntil: "networkidle" });
await page.click("text=Ver horários disponíveis");
ok("Estado carregando: esqueleto", await page.locator(".esqueleto").isVisible());
await page.waitForSelector("text=Agenda de demonstração");
ok("Agenda de demonstração com aviso", true);
ok("Confirmar fica desabilitado sem horário", await page.locator("button", { hasText: "Escolha um horário" }).isDisabled());
await page.locator("fieldset").nth(1).locator("button:not([disabled])").first().click();
await page.screenshot({ path: DEST + "agendar-demo-1280.png", fullPage: false });
await page.locator("button", { hasText: "Confirmar" }).click();
await page.waitForURL(/obrigado\/\?origem=agenda/, { timeout: 5000 });
await page.waitForTimeout(300);
ok("Vai para /obrigado?origem=agenda", (await h1(page)) === "Sua consulta está marcada", await h1(page));
await ctx.close();

// 4. Estados simulados
const estado = async (sim, espera, texto, nome) => {
  const c = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const p = await c.newPage();
  await p.goto(`${base}/agendar/?simular=${sim}#agenda`, { waitUntil: "networkidle" });
  await p.click("text=Ver horários disponíveis");
  if (sim === "lento") {
    await p.waitForTimeout(3000);
    ok("Lento: esqueleto continua enquanto carrega", await p.locator(".esqueleto").isVisible());
  }
  await p.waitForTimeout(espera);
  ok(nome, await p.locator(`text=${texto}`).first().isVisible());
  await p.close(); await c.close();
};
await estado("erro", 1200, "A agenda não carregou", "Falha ao carregar: link em outra aba + WhatsApp");
await estado("sem-horarios", 1200, "Não há horários livres", "Sem horários: convite para o WhatsApp");
await estado("lento", 10500, "A agenda não carregou", "Lento demais (12 s): vira erro com saída");

ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
page = await ctx.newPage();
await page.goto(base + "/agendar/?simular=ocupado#agenda", { waitUntil: "networkidle" });
await page.click("text=Ver horários disponíveis");
await page.waitForSelector("text=Agenda de demonstração");
const horario = page.locator("fieldset").nth(1).locator("button:not([disabled])").first();
const rotulo = await horario.textContent();
await horario.click();
await page.locator("button", { hasText: "Confirmar" }).click();
ok("Horário ocupado: aviso para escolher outro", await page.locator("[role=alert]", { hasText: "acabou de ser reservado" }).isVisible());
ok("Horário ocupado fica indisponível", await page.locator("fieldset").nth(1).locator("button", { hasText: rotulo }).isDisabled());
await page.locator("fieldset").nth(1).locator("button:not([disabled])").first().click();
await page.locator("button", { hasText: "Confirmar" }).click();
await page.waitForURL(/obrigado\/\?origem=agenda/, { timeout: 5000 });
ok("Depois de outro horário, conclui", true);
await ctx.close();

// 5. Obrigado com acesso direto
ctx = await browser.newContext();
page = await ctx.newPage();
await page.goto(base + "/obrigado/", { waitUntil: "networkidle" });
ok("Obrigado direto mostra a versão WhatsApp", (await h1(page)) === "Sua mensagem está a caminho");
ok("Obrigado é noindex", /noindex/.test(await page.locator('meta[name="robots"]').getAttribute("content")));
ok("Obrigado volta para o início", (await page.locator("a", { hasText: "Voltar para o início" }).getAttribute("href")) === "/");
await ctx.close();

await browser.close();
console.table(r);
console.log(r.every((x) => x.resultado === "OK") ? "TODOS OK" : "HÁ FALHAS");
