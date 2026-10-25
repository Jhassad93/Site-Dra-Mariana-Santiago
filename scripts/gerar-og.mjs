// Gera a imagem de compartilhamento (public/og.png, 1200×630) e os ícones (app/icon.png, app/apple-icon.png,
// app/favicon.ico) a partir das fontes e cores do DESIGN.md. Rodar: npm run og
// R1: nome e "MÉDICA: CRM-SP" na mesma fonte, tamanho e cor, sem negrito.
import { chromium } from "playwright-core";
import { execFileSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const raiz = resolve(import.meta.dirname, "..");
const fonte = (f) => `url(data:font/woff2;base64,${readFileSync(resolve(raiz, "app/fonts", f)).toString("base64")})`;
const fundo = resolve(raiz, "public/midia/hero-1280.webp");
const fundoUrl = existsSync(fundo) ? `data:image/webp;base64,${readFileSync(fundo).toString("base64")}` : "";

const css = `
@font-face{font-family:Host;src:${fonte("host-grotesk-latin-400-normal.woff2")};font-weight:400}
@font-face{font-family:Host;src:${fonte("host-grotesk-latin-300-normal.woff2")};font-weight:300}
@font-face{font-family:Caslon;font-style:italic;src:${fonte("libre-caslon-text-latin-400-italic.woff2")}}
*{margin:0;box-sizing:border-box}
body{background:#1c1813;color:#efeeea;font-family:Host,sans-serif;-webkit-font-smoothing:antialiased}`;

const og = `<style>${css}
.og{width:1200px;height:630px;position:relative;overflow:hidden;padding:72px 80px;display:flex;flex-direction:column;justify-content:space-between}
.foto{position:absolute;inset:0;background:url(${fundoUrl}) center/cover}
.veu{position:absolute;inset:0;background:linear-gradient(90deg,#1c1813 0%,rgba(28,24,19,.9) 42%,rgba(28,24,19,.2) 100%)}
.og>*:not(.foto):not(.veu){position:relative}
h1{font-weight:300;font-size:64px;line-height:1.06;letter-spacing:-.02em;max-width:15ch}
.regua{display:flex;align-items:center;width:420px;margin-top:36px}.regua i{width:10px;height:10px;background:#c9a35f}.regua b{flex:1;height:1px;background:#c9a35f}
.id{font-size:26px;line-height:1.4;font-weight:400}
.onde{font-size:22px;color:#ebd4ad;margin-top:14px}
.nota{font-size:18px;color:#efeeea;opacity:.75;margin-top:10px}
</style>
<div class="og"><div class="foto"></div><div class="veu"></div>
<div><h1>Procedimentos estéticos faciais, planejados no seu&nbsp;tempo</h1><div class="regua"><i></i><b></b></div></div>
<div><p class="id">Dra. Helena Duarte<br>MÉDICA: CRM-SP 123456*</p><p class="onde">Consultório na Av. Paulista, São Paulo</p><p class="nota">* Projeto de portfólio: médica e consultório fictícios</p></div>
</div>`;

// Mesmo monograma do cabeçalho: "H" em Libre Caslon itálico.
const icone = (lado) => `<style>${css}
.ic{width:${lado}px;height:${lado}px;background:#1c1813;display:grid;place-items:center}
.ic span{font-family:Caslon,serif;font-style:italic;color:#efeeea;font-size:${lado * 0.66}px;line-height:1;transform:translate(-${lado * 0.01}px,${lado * 0.03}px)}
</style><div class="ic"><span>H</span></div>`;

const navegador = await chromium.launch({
  executablePath: process.env.CHROMIUM ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});
const foto = async (html, w, h, saida) => {
  const p = await navegador.newPage({ viewport: { width: w, height: h } });
  await p.setContent(html);
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: resolve(raiz, saida) });
  await p.close();
};
await foto(og, 1200, 630, "public/og.png");
await foto(icone(512), 512, 512, "app/icon.png");
await foto(icone(180), 180, 180, "app/apple-icon.png");
await navegador.close();

// favicon.ico (16, 32, 48) com Pillow
execFileSync("python3", [
  "-c",
  `from PIL import Image; Image.open("${resolve(raiz, "app/icon.png")}").save("${resolve(raiz, "app/favicon.ico")}", sizes=[(16,16),(32,32),(48,48)])`,
]);
console.log("og.png, icon.png, apple-icon.png e favicon.ico gerados");
