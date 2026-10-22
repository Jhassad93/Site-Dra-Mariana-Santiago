// Prints de verificação visual (CLAUDE.md do kit): 375, 768 e 1280px.
// Uso: node scripts/prints.mjs [rota ...]  — serve a pasta out/ numa porta local.
import { chromium } from "playwright-core";
import http from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { extname, join } from "node:path";

const OUT = new URL("../out/", import.meta.url).pathname;
const DEST = new URL("../.verificacao/", import.meta.url).pathname;
const tipos = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".woff2": "font/woff2", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".avif": "image/avif", ".mp4": "video/mp4", ".webm": "video/webm", ".txt": "text/plain", ".xml": "application/xml", ".json": "application/json", ".ico": "image/x-icon" };

const server = http.createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p.endsWith("/")) p += "index.html";
  try {
    const body = await readFile(join(OUT, p));
    res.writeHead(200, { "content-type": tipos[extname(p)] || "application/octet-stream" });
    res.end(body);
  } catch {
    try {
      res.writeHead(404, { "content-type": "text/html" });
      res.end(await readFile(join(OUT, "404.html")));
    } catch { res.writeHead(404); res.end(); }
  }
}).listen(4173);

const rotas = process.argv.slice(2).length ? process.argv.slice(2) : ["/"];
const larguras = [375, 768, 1280];
await mkdir(DEST, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROME || "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const relatorio = [];
for (const rota of rotas) {
  for (const w of larguras) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    await page.goto(`http://localhost:4173${rota}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(1200); // deixa as animações de entrada terminarem
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    const nome = `${rota.replace(/\//g, "_") || "_"}-${w}.png`;
    await page.screenshot({ path: join(DEST, nome), fullPage: true });
    relatorio.push({ rota, largura: w, rolagemHorizontalPx: overflow, arquivo: nome });
    await page.close();
  }
}
await browser.close();
server.close();
console.table(relatorio);
