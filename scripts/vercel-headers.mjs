// Gera vercel.json a partir de public/_headers (fonte única dos headers). Uso: npm run vercel-headers
import { readFileSync, writeFileSync } from "node:fs";
const blocos = []; let atual;
for (const l of readFileSync("public/_headers", "utf8").split("\n")) {
  if (!l.trim() || l.startsWith("#")) continue;
  if (!l.startsWith(" ")) { atual = { source: l.trim() === "/*" ? "/(.*)" : l.trim().replace("/*", "/(.*)"), headers: [] }; blocos.push(atual); }
  else { const i = l.indexOf(":"); atual.headers.push({ key: l.slice(0, i).trim(), value: l.slice(i + 1).trim() }); }
}
const cfg = { $schema: "https://openapi.vercel.sh/vercel.json", headers: blocos, redirects: [{ source: "/_headers", destination: "/404/", permanent: false }] };
writeFileSync("vercel.json", JSON.stringify(cfg, null, 2) + "\n");
console.log("vercel.json gerado:", blocos.map((b) => b.source).join(", "));
