// Teste de interação do layout base (Etapa 2): cabeçalho, CTA fixo, menu, teclado e 404.
// Uso: node scripts/teste-layout.mjs  (depois de npm run build)
import { chromium } from "playwright-core";
import http from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { extname, join } from "node:path";

const OUT = new URL("../out/", import.meta.url).pathname;
const DEST = new URL("../.verificacao/", import.meta.url).pathname;
const tipos = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".woff2": "font/woff2" };
const server = http.createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (!p.endsWith("/") && !extname(p)) { res.writeHead(308, { location: p + "/" }); return res.end(); } // como a Cloudflare
  if (p.endsWith("/")) p += "index.html";
  try { const b = await readFile(join(OUT, p)); res.writeHead(200, { "content-type": tipos[extname(p)] || "application/octet-stream" }); res.end(b); }
  catch { res.writeHead(404, { "content-type": "text/html" }); res.end(await readFile(join(OUT, "404.html"))); }
}).listen(4174);
const base = "http://localhost:4174";
await mkdir(DEST, { recursive: true });
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const r = [];
const ok = (teste, cond, detalhe = "") => r.push({ teste, resultado: cond ? "OK" : "FALHA", detalhe });
const espera = (p, ms = 350) => p.waitForTimeout(ms);
const tema = (p) => p.getAttribute(".cabecalho", "data-tema");

// Desktop
let page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto(base + "/", { waitUntil: "networkidle" });
ok("Cabeçalho escuro sobre a faixa escura", (await tema(page)) === "vidro-escuro", await tema(page));
await page.screenshot({ path: join(DEST, "cabecalho-escuro-1280.png") });
await page.mouse.wheel(0, 900); await espera(page);
ok("Cabeçalho claro sobre o Gesso", (await tema(page)) === "vidro-claro", await tema(page));
await page.screenshot({ path: join(DEST, "cabecalho-claro-1280.png") });
await page.keyboard.press("Home"); await espera(page);
await page.evaluate(() => window.scrollTo(0, 0)); await espera(page);
await page.keyboard.press("Tab");
ok("Primeiro Tab = pular para o conteúdo", (await page.evaluate(() => document.activeElement?.textContent?.trim())) === "Pular para o conteúdo");
await page.screenshot({ path: join(DEST, "pular-1280.png"), clip: { x: 0, y: 0, width: 1280, height: 120 } });
const ordem = [];
for (let i = 0; i < 8; i++) { await page.keyboard.press("Tab"); ordem.push(await page.evaluate(() => (document.activeElement?.textContent || document.activeElement?.getAttribute("aria-label") || "").trim().slice(0, 40))); }
ok("Ordem do Tab no cabeçalho", ordem.slice(1, 6).join(" | ").includes("Como funciona"), ordem.join(" | "));
await page.screenshot({ path: join(DEST, "foco-1280.png"), clip: { x: 0, y: 0, width: 1280, height: 120 } });
await page.close();

// 404
page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto(base + "/nao-existe/", { waitUntil: "networkidle" });
ok("URL inexistente mostra a 404", (await page.textContent("h1")) === "Esta página não existe");
await page.click("text=Ir para o início"); await page.waitForURL(base + "/"); ok("404 volta ao início", page.url() === base + "/");
await page.click('nav[aria-label="Principal"] >> text=Sobre'); await page.waitForURL(/sobre/);
await page.waitForSelector("h1:has-text('Sobre a Dra. Mariana')", { timeout: 5000 }).catch(() => {}); await espera(page);
ok("Navegação do cabeçalho", (await page.textContent("h1")) === "Sobre a Dra. Mariana", page.url() + " " + (await page.locator("h1").allTextContents()).join("/"));
ok("aria-current na página atual", (await page.getAttribute('nav[aria-label="Principal"] a[href="/sobre/"]', "aria-current")) === "page");
await page.close();

// Celular
page = await browser.newPage({ viewport: { width: 375, height: 760 }, hasTouch: true, isMobile: true });
await page.goto(base + "/", { waitUntil: "networkidle" }); await espera(page);
ok("CTA fixo some com o CTA do hero visível", (await page.getAttribute(".cta-fixo", "data-oculto")) !== null);
await page.evaluate(() => window.scrollTo(0, 1100)); await espera(page, 500);
ok("CTA fixo aparece no meio da página", (await page.getAttribute(".cta-fixo", "data-oculto")) === null);
await page.screenshot({ path: join(DEST, "cta-fixo-375.png") });
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight)); await espera(page, 500);
ok("CTA fixo some no rodapé", (await page.getAttribute(".cta-fixo", "data-oculto")) !== null);
await page.evaluate(() => window.scrollTo(0, 0)); await espera(page);
await page.click(".botao-menu"); await espera(page);
ok("Menu abre", await page.evaluate(() => document.querySelector(".folha-menu").open));
ok("Rolagem travada com o menu aberto", (await page.evaluate(() => getComputedStyle(document.documentElement).overflow)) === "hidden");
await page.screenshot({ path: join(DEST, "menu-375.png") });
await page.keyboard.press("Escape"); await espera(page);
ok("Esc fecha o menu", !(await page.evaluate(() => document.querySelector(".folha-menu").open)));
ok("Foco volta ao botão do menu", await page.evaluate(() => document.activeElement?.classList.contains("botao-menu")));
await page.click(".botao-menu"); await espera(page);
await page.click('.folha-menu >> text=Perguntas'); await page.waitForURL(/perguntas/);
await page.waitForSelector("h1:has-text('Perguntas frequentes')", { timeout: 5000 }).catch(() => {}); await espera(page);
ok("Link do menu navega e fecha", !(await page.evaluate(() => document.querySelector(".folha-menu").open)) && (await page.textContent("h1")) === "Perguntas frequentes");
await page.close();

// Sem transparência
page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.emulateMedia({ reducedMotion: "reduce" });
await page.goto(base + "/sobre/", { waitUntil: "networkidle" });
const fundo = await page.evaluate(() => getComputedStyle(document.querySelector(".cabecalho")).backgroundColor);
ok("Cabeçalho claro nas páginas internas", (await tema(page)) === "vidro-claro", fundo);
await page.close();

await browser.close(); server.close();
console.table(r);
