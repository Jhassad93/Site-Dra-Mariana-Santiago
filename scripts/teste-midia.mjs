// Testa o comportamento dos vídeos de ambiente e das imagens (Etapa 10). Uso: node scripts/teste-midia.mjs (servidor em :4180)
import { chromium } from "playwright-core";
const base = process.env.BASE || "http://localhost:4180";
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome", args: ["--autoplay-policy=no-user-gesture-required"] });
const r = [];
const ok = (t, c, d = "") => r.push({ teste: t, resultado: c ? "OK" : "FALHA", detalhe: String(d).slice(0, 60) });

let p = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const pedidos = [];
p.on("request", (q) => { if (/\.(mp4|webm)$/.test(q.url())) pedidos.push(q.url()); });
await p.goto(base + "/", { waitUntil: "networkidle" });
await p.waitForTimeout(1500);
const v = p.locator("video.video-ambiente").first();
ok("Desktop: vídeo do hero existe", (await v.count()) === 1);
ok("Desktop: preload=none", (await v.getAttribute("preload")) === "none");
ok("Desktop: toca quando visível", await v.evaluate((el) => !el.paused));
await p.evaluate(() => window.scrollTo(0, 3000));
await p.waitForTimeout(800);
ok("Desktop: pausa fora da tela", await v.evaluate((el) => el.paused));
ok("Imagem de capa com AVIF e WebP", (await p.locator("picture source[type='image/avif']").count()) > 0);
await p.close();

p = await browser.newPage({ viewport: { width: 375, height: 760 } });
const pedidosCel = [];
p.on("request", (q) => { if (/\.(mp4|webm)$/.test(q.url())) pedidosCel.push(q.url()); });
await p.goto(base + "/", { waitUntil: "networkidle" });
await p.waitForTimeout(800);
ok("Celular: sem vídeo, só a capa", (await p.locator("video").count()) === 0);
ok("Celular: nenhum vídeo baixado", pedidosCel.length === 0, pedidosCel.join(" "));
await p.close();

p = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await p.emulateMedia({ reducedMotion: "reduce" });
await p.goto(base + "/", { waitUntil: "networkidle" });
await p.waitForTimeout(800);
ok("Movimento reduzido: sem vídeo", (await p.locator("video").count()) === 0);
await p.close();

await browser.close();
console.table(r);
console.log(r.every((x) => x.resultado === "OK") ? "TODOS OK" : "HÁ FALHAS");
