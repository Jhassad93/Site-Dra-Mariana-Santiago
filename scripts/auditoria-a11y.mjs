// Auditoria técnica (Etapa 13): axe-core em todas as páginas (375 e 1280), alvos de toque, foco visível, rolagem horizontal.
// Uso: BASE=http://localhost:4181 node scripts/auditoria-a11y.mjs
import { chromium } from "playwright-core";
import { readFileSync } from "node:fs";
const base = process.env.BASE || "http://localhost:4181";
const axe = readFileSync("node_modules/axe-core/axe.min.js", "utf8");
const rotas = ["/", "/como-funciona/", "/procedimentos/", "/procedimentos/toxina-botulinica/", "/procedimentos/preenchimento-labial/", "/procedimentos/contorno-facial/", "/procedimentos/bioestimuladores-de-colageno/", "/procedimentos/skinbooster/", "/procedimentos/peelings/", "/guias/pele-na-menopausa/", "/sobre/", "/perguntas-frequentes/", "/agendar/", "/obrigado/", "/obrigado/?origem=agenda", "/privacidade/", "/termos/", "/nao-existe/"];
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const problemas = [];
for (const [w, h, touch] of [[375, 812, true], [1280, 800, false]]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, hasTouch: touch, isMobile: touch });
  for (const r of rotas) {
    const p = await ctx.newPage();
    await p.goto(base + r, { waitUntil: "networkidle" });
    await p.evaluate(() => { try { localStorage.setItem("consultorio-cookies", JSON.stringify({ escolha: "recusado", data: new Date().toISOString(), versao: 1 })); } catch {} });
    // fecha o banner para auditar a página; depois audita o banner à parte na home
    await p.evaluate(() => document.querySelector(".banner-cookies button")?.click());
    await p.waitForTimeout(300);
    await p.addScriptTag({ content: axe });
    const res = await p.evaluate(async () => await window.axe.run(document, { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"] } }));
    for (const v of res.violations) problemas.push({ rota: r, vp: w, tipo: "axe:" + v.id, impacto: v.impact, n: v.nodes.length, ex: v.nodes[0]?.html.slice(0, 90), ajuda: v.help });
    // rolagem horizontal
    const sw = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    if (sw > 0) problemas.push({ rota: r, vp: w, tipo: "rolagem-horizontal", n: sw });
    // alvos de toque < 44px (visíveis) no celular
    if (touch) {
      const pequenos = await p.evaluate(() => {
        const out = [];
        for (const el of document.querySelectorAll("a, button, [role=button], input, select, textarea, summary")) {
          const r = el.getBoundingClientRect(); const cs = getComputedStyle(el);
          if (r.width === 0 || r.height === 0 || cs.visibility === "hidden" || el.closest("[inert], [aria-hidden=true]")) continue;
          if (r.height < 44 && r.width < 44 || r.height < 24) out.push(`${el.tagName.toLowerCase()} "${(el.textContent || el.getAttribute("aria-label") || "").trim().slice(0, 30)}" ${Math.round(r.width)}x${Math.round(r.height)}`);
        }
        return out;
      });
      for (const s of pequenos) problemas.push({ rota: r, vp: w, tipo: "alvo<44", ex: s });
    }
    // foco visível: percorre com Tab e checa outline/box-shadow
    if (!touch) {
      const semFoco = await p.evaluate(async () => {
        const out = []; const focaveis = [...document.querySelectorAll("a[href], button, input, select, textarea, [tabindex]:not([tabindex='-1'])")].filter((e) => { const r = e.getBoundingClientRect(); return r.width > 0 && !e.closest("[inert]"); });
        for (const el of focaveis) {
          el.focus({ focusVisible: true });
          const cs = getComputedStyle(el);
          const vis = (cs.outlineStyle !== "none" && parseFloat(cs.outlineWidth) > 0) || cs.boxShadow !== "none";
          if (!vis && document.activeElement === el) out.push(`${el.tagName.toLowerCase()} "${(el.textContent || "").trim().slice(0, 30)}"`);
        }
        return out;
      });
      for (const s of semFoco) problemas.push({ rota: r, vp: w, tipo: "foco-invisivel", ex: s });
    }
    await p.close();
  }
  await ctx.close();
}
// Banner de cookies isolado
const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
const p = await ctx.newPage(); await p.goto(base + "/", { waitUntil: "networkidle" }); await p.addScriptTag({ content: axe });
const res = await p.evaluate(async () => await window.axe.run(".banner-cookies", { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa", "best-practice"] } }));
for (const v of res.violations) problemas.push({ rota: "banner", vp: 375, tipo: "axe:" + v.id, impacto: v.impact, n: v.nodes.length, ex: v.nodes[0]?.html.slice(0, 90) });
await browser.close();
console.log(`${rotas.length} rotas × 2 tamanhos. Problemas: ${problemas.length}`);
console.table(problemas);
