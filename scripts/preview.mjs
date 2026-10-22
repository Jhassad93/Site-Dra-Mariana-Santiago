// Gera a prévia em artefato a partir da exportação estática.
// Uso: npm run build && node scripts/preview.mjs
// Saída: .preview/index.html (conteúdo sem <html>/<head>/<body>, que o artefato adiciona)
//        + .preview/_next/** e demais arquivos, publicados ao lado.
import { readFile, writeFile, mkdir, cp, rm, readdir } from "node:fs/promises";
import { join, relative } from "node:path";

const raiz = new URL("..", import.meta.url).pathname;
const out = join(raiz, "out");
const dest = join(raiz, ".preview");

await rm(dest, { recursive: true, force: true });
await mkdir(dest, { recursive: true });
// O serviço de artefatos reserva nomes iniciados por "_": _next vira assets.
await cp(join(out, "_next"), join(dest, "assets"), { recursive: true });

// Caminhos absolutos (/_next/...) viram relativos, porque o artefato não fica na raiz do domínio.
async function relativizar(dir) {
  for (const i of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, i.name);
    if (i.isDirectory()) await relativizar(p);
    else if (/\.(css)$/.test(i.name)) {
      const t = await readFile(p, "utf8");
      await writeFile(p, t.replaceAll("url(/_next/static/media/", "url(../media/"));
    } else if (/^polyfills-/.test(i.name)) {
      // Só para navegadores antigos (nomodule) e não é UTF-8 válido: fica fora da prévia.
      await rm(p);
    } else if (/\.(js)$/.test(i.name)) {
      const t = await readFile(p, "utf8");
      if (t.includes("/_next/")) await writeFile(p, t.replaceAll("/_next/", "./assets/"));
    }
  }
}
await relativizar(join(dest, "assets"));

const html = (await readFile(join(out, "index.html"), "utf8")).replaceAll("./_next/", "./assets/").replaceAll("/_next/", "./assets/").replace(/<script src="[^"]*polyfills-[^"]*"[^>]*><\/script>/, "");
const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1] ?? "";
const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/)?.[1] ?? "";
const htmlClass = html.match(/<html[^>]*class="([^"]*)"/)?.[1] ?? "";
const titulo = head.match(/<title>[\s\S]*?<\/title>/)?.[0] ?? "<title>Site Dra. Mariana Santiago</title>";
const resto = head
  .replace(/<title>[\s\S]*?<\/title>/, "")
  .replace(/<meta charSet="utf-8"\/>/, "")
  .replace(/<meta name="viewport"[^>]*\/>/, "");

// Mantém as classes de fonte que o Next coloca em <html>.
const pagina = `${titulo}
${resto}
<script>document.documentElement.className += " ${htmlClass}"; document.documentElement.lang = "pt-BR";</script>
${body}
`;
await writeFile(join(dest, "index.html"), pagina);

async function listar(dir) {
  const itens = await readdir(dir, { withFileTypes: true });
  const arquivos = [];
  for (const i of itens) {
    const p = join(dir, i.name);
    if (i.isDirectory()) arquivos.push(...(await listar(p)));
    else arquivos.push(p);
  }
  return arquivos;
}
const arquivos = (await listar(join(dest, "assets"))).map((p) => relative(dest, p));
await writeFile(join(dest, "files.json"), JSON.stringify(arquivos, null, 2));
console.log(`index.html + ${arquivos.length} arquivos em .preview/`);
