// Testa os headers de segurança (public/_headers) servidos por scripts/servidor-gzip.mjs: presença dos headers,
// nenhuma violação de CSP no console nas páginas, no fluxo de cookies/GA4 e na agenda. Uso: BASE=http://localhost:4181 node scripts/teste-headers.mjs
import { chromium } from "playwright-core";
const base = process.env.BASE || "http://localhost:4181";
const r = []; const ok = (t, c, d = "") => r.push({ teste: t, resultado: c ? "OK" : "FALHA", detalhe: String(d).slice(0, 90) });
const resp = await fetch(base + "/");
for (const h of ["content-security-policy", "x-frame-options", "x-content-type-options", "referrer-policy", "permissions-policy", "strict-transport-security"]) ok(`header ${h}`, !!resp.headers.get(h));
ok("_headers não é servido como arquivo", (await fetch(base + "/_headers")).status === 404);
ok("cache imutável em /_next/static", /immutable/.test((await fetch(base + (await resp.text()).match(/\/_next\/static\/css\/[^"]+/)[0])).headers.get("cache-control") || ""));
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const ctx = await b.newContext({ viewport: { width: 1280, height: 800 } });
const violacoes = [];
const p = await ctx.newPage();
p.on("console", (m) => { if (/Content Security Policy|Refused to/.test(m.text())) violacoes.push(m.text().slice(0, 160)); });
for (const rota of ["/", "/procedimentos/toxina-botulinica/", "/sobre/", "/perguntas-frequentes/", "/privacidade/", "/agendar/", "/obrigado/"]) { await p.goto(base + rota, { waitUntil: "networkidle" }); await p.waitForTimeout(300); }
ok("Nenhuma violação de CSP nas páginas", violacoes.length === 0, violacoes[0]);
await p.goto(base + "/", { waitUntil: "networkidle" });
await p.locator(".banner-cookies button", { hasText: "Aceitar" }).click(); await p.waitForTimeout(1500);
ok("Nenhuma violação de CSP com o GA4 aceito (vale num build com NEXT_PUBLIC_GA4_ID)", violacoes.length === 0, violacoes[0]);
await p.goto(base + "/agendar/", { waitUntil: "networkidle" });
await p.locator("button", { hasText: "Ver horários disponíveis" }).click(); await p.waitForTimeout(2500);
ok("Nenhuma violação de CSP ao abrir a agenda (demonstração ou Calendly)", violacoes.length === 0, violacoes[0]);
await b.close(); console.table(r); console.log(r.every((x) => x.resultado === "OK") ? "TODOS OK" : "HÁ FALHAS");
