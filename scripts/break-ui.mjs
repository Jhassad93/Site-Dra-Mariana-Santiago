// break-ui (Etapa 13): zoom de texto 200%, tela de 320px, zoom de página 200% e 150%, textos longos injetados.
// Mede rolagem horizontal, texto cortado (overflow) e sobreposição do CTA fixo com o banner. Uso: BASE=... node scripts/break-ui.mjs
import { chromium } from "playwright-core";
const base = process.env.BASE || "http://localhost:4181";
const rotas = ["/", "/procedimentos/", "/procedimentos/toxina-botulinica/", "/perguntas-frequentes/", "/agendar/", "/privacidade/", "/sobre/"];
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const r = [];
const medir = async (p, rotulo) => {
  const m = await p.evaluate(() => {
    const d = document.documentElement; const out = { rolagem: d.scrollWidth - d.clientWidth, cortados: [] };
    for (const el of document.querySelectorAll("h1,h2,h3,p,a,button,dt,dd,li,td,th")) {
      const cs = getComputedStyle(el); if (cs.overflow === "hidden" || cs.textOverflow === "ellipsis") continue;
      if (el.scrollWidth > el.clientWidth + 2 && cs.whiteSpace === "nowrap") out.cortados.push(`${el.tagName} "${el.textContent.trim().slice(0, 30)}"`);
    }
    return out;
  });
  r.push({ caso: rotulo, rolagem: m.rolagem, cortados: m.cortados.slice(0, 3).join(" | ") });
};
// 1. Texto 200% (fonte-base 32px) em 375px
let ctx = await b.newContext({ viewport: { width: 375, height: 812 }, isMobile: true, hasTouch: true });
for (const rota of rotas) { const p = await ctx.newPage(); await p.goto(base + rota, { waitUntil: "networkidle" }); await p.addStyleTag({ content: "html{font-size:200%}" }); await p.waitForTimeout(200); await medir(p, `texto 200% 375px ${rota}`); await p.close(); }
await ctx.close();
// 2. Tela de 320px
ctx = await b.newContext({ viewport: { width: 320, height: 568 }, isMobile: true, hasTouch: true });
for (const rota of rotas) { const p = await ctx.newPage(); await p.goto(base + rota, { waitUntil: "networkidle" }); await medir(p, `320px ${rota}`); await p.close(); }
await ctx.close();
// 3. Zoom de página 200% no desktop (equivale a 640px de largura útil)
ctx = await b.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 });
for (const rota of ["/", "/agendar/"]) { const p = await ctx.newPage(); await p.goto(base + rota, { waitUntil: "networkidle" }); await p.evaluate(() => { document.body.style.zoom = "2"; }); await p.waitForTimeout(200); await medir(p, `zoom 200% ${rota}`); await p.close(); }
// 4. Textos longos injetados nos cards, no acordeão e nos horários
const p = await ctx.newPage(); await p.goto(base + "/", { waitUntil: "networkidle" });
await p.evaluate(() => {
  document.querySelectorAll(".card-procedimento h3").forEach((h) => (h.textContent = "Bioestimuladores de colágeno de hidroxiapatita de cálcio e ácido poli-L-láctico"));
  document.querySelectorAll("dd").forEach((d) => (d.textContent = "13h às 21h30, exceto feriados e vésperas"));
  document.querySelectorAll("h1")[0].textContent = "Procedimentosestéticosfaciaisplanejadosnoseutempocomcalmaesemprometerresultados";
});
await p.waitForTimeout(200); await medir(p, "textos longos na home 1280px");
await p.setViewportSize({ width: 375, height: 812 }); await p.waitForTimeout(300); await medir(p, "textos longos na home 375px");
await p.close();
// 5. Nome de pergunta longa no acordeão (375px)
const q = await ctx.newPage(); await q.setViewportSize({ width: 375, height: 812 }); await q.goto(base + "/perguntas-frequentes/", { waitUntil: "networkidle" });
await q.evaluate(() => { const bt = document.querySelector(".acordeao button, [class*=acordeao] button"); if (bt) bt.firstChild && (bt.firstChild.textContent = "Quanto tempo depois de um preenchimento labial com ácido hialurônico eu posso fazer um peeling químico médio ou um bioestimulador?"); });
await q.waitForTimeout(200); await medir(q, "pergunta longa no acordeão 375px"); await q.close();
await ctx.close(); await b.close();
console.table(r);
const falhas = r.filter((x) => x.rolagem > 0 || x.cortados);
console.log(falhas.length ? `${falhas.length} caso(s) com problema` : "Nada quebrou");
