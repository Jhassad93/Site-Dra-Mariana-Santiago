// Contraste do texto sobre fotos/gradientes: esconde o texto, fotografa o fundo e mede o pior pixel atrás de cada linha.
// Uso: node scripts/contraste-fotos.mjs [rota] [seletor]   (servidor estático em :4180)
import { chromium } from "playwright-core";
const rota = process.argv[2] || "/";
const seletor = process.argv[3] || ".card-procedimento";
const lum = ([r, g, b]) => [r, g, b].map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }).reduce((a, v, i) => a + v * [0.2126, 0.7152, 0.0722][i], 0);
const razao = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const resultados = [];
for (const largura of [375, 1280]) {
  const page = await browser.newPage({ viewport: { width: largura, height: 900 } });
  await page.goto("http://localhost:4180" + rota, { waitUntil: "networkidle" });
  const alvos = await page.evaluate((sel) => {
    const out = [];
    document.querySelectorAll(sel).forEach((card, c) => {
      card.querySelectorAll("h1, h2, h3, p, span, a, dt, dd").forEach((el) => {
        if (!el.childNodes.length || [...el.childNodes].every((n) => n.nodeType !== 3 || !n.textContent.trim())) return;
        const cs = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        out.push({ card: c, texto: el.textContent.trim().slice(0, 28), cor: cs.color, x: r.x + scrollX, y: r.y + scrollY, w: r.width, h: r.height, fs: cs.fontSize });
      });
    });
    document.querySelectorAll(sel + " *").forEach((el) => (el.style.color = "transparent"));
    document.querySelectorAll(sel + " .pilula-vidro").forEach((el) => (el.style.visibility = "hidden"));
    return out;
  }, seletor);
  const buf = await page.screenshot({ fullPage: true, type: "png" });
  const { PNG } = await import("pngjs").catch(() => ({ PNG: null }));
  if (!PNG) { console.log("instale pngjs"); process.exit(1); }
  const img = PNG.sync.read(buf);
  for (const a of alvos) {
    const m = a.cor.match(/\d+(\.\d+)?/g).map(Number);
    let pior = 99, px;
    for (let y = Math.floor(a.y); y < a.y + a.h; y += 2) for (let x = Math.floor(a.x); x < a.x + a.w; x += 2) {
      const i = (y * img.width + x) * 4; const c = [img.data[i], img.data[i + 1], img.data[i + 2]];
      const k = razao(m, c); if (k < pior) { pior = k; px = c; }
    }
    resultados.push({ largura, card: a.card, texto: a.texto, fonte: a.fs, pior: pior.toFixed(2), fundo: px?.join(",") });
  }
  await page.close();
}
await browser.close();
console.table(resultados);
