// Servidor estático com gzip, cache e o public/_headers aplicado (como a Cloudflare serve). Uso: node scripts/servidor-gzip.mjs out 4181
import http from "node:http"; import fs from "node:fs"; import path from "node:path"; import zlib from "node:zlib";
const [raiz, porta] = [path.resolve(process.argv[2] || "out"), +(process.argv[3] || 4181)];
// _headers da Cloudflare: blocos "caminho" seguidos de linhas "  Nome: valor"; * casa qualquer sufixo
const regras = []; const hf = path.join(raiz, "_headers");
if (fs.existsSync(hf)) { let atual; for (const l of fs.readFileSync(hf, "utf8").split("\n")) { if (!l.trim() || l.startsWith("#")) continue; if (!l.startsWith(" ")) { atual = { re: new RegExp("^" + l.trim().replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*") + "$"), h: [] }; regras.push(atual); } else { const i = l.indexOf(":"); atual.h.push([l.slice(0, i).trim(), l.slice(i + 1).trim()]); } } }
const tipos = {".html":"text/html; charset=utf-8",".js":"text/javascript",".css":"text/css",".json":"application/json",".xml":"application/xml",".txt":"text/plain",".svg":"image/svg+xml",".png":"image/png",".ico":"image/x-icon",".woff2":"font/woff2",".avif":"image/avif",".webp":"image/webp",".mp4":"video/mp4",".webm":"video/webm"};
http.createServer((req, res) => {
  let u = decodeURIComponent(req.url.split("?")[0]);
  let f = path.join(raiz, u);
  if (u.endsWith("/")) f = path.join(f, "index.html");
  else if (!path.extname(u)) { res.writeHead(308, { Location: u + "/" }); return res.end(); }
  if (path.basename(f) === "_headers" || !fs.existsSync(f)) { f = path.join(raiz, "404.html"); res.statusCode = 404; }
  const ext = path.extname(f); const corpo = fs.readFileSync(f);
  res.setHeader("Content-Type", tipos[ext] ?? "application/octet-stream");
  for (const r of regras) if (r.re.test(u)) for (const [k, v] of r.h) res.setHeader(k, v);
  if (/\.(html|js|css|json|xml|txt|svg)$/.test(ext) && /gzip/.test(req.headers["accept-encoding"] ?? "")) {
    res.setHeader("Content-Encoding", "gzip"); return res.end(zlib.gzipSync(corpo));
  }
  res.end(corpo);
}).listen(porta);
