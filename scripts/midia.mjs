// Comprime as imagens e vídeos de midia-original/ para public/midia/ e gera lib/midia.json.
// Uso: npm run midia   (precisa de ffmpeg para vídeo)
// Nomes esperados em midia-original/ (qualquer extensão de imagem jpg/png/webp/avif e de vídeo mp4/mov/webm):
//   hero.*  hero-video.*  planejamento.*  planejamento-video.*  fechamento-video.* (opcional)
//   card-toxina-botulinica.*  card-bioestimuladores-de-colageno.*  card-preenchimento-labial.*
//   dra-previa.*  (foto da Dra. só para a prévia privada; fica fora do git)
import sharp from "sharp";
import { execFileSync } from "node:child_process";
import { readdir, mkdir, writeFile, stat, rm } from "node:fs/promises";
import { join, parse } from "node:path";

const RAIZ = new URL("..", import.meta.url).pathname;
const ORIG = join(RAIZ, "midia-original");
const SAIDA = join(RAIZ, "public/midia");
const LIMITE_VIDEO = 2 * 1024 * 1024;
const PINGPONG = "[0:v]scale='min(1280,iw)':-2,fps=24,split[a][b];[b]reverse[r];[a][r]concat=n=2:v=1:a=0[v]";

const SLOTS = {
  hero: { larguras: [828, 1280, 1920, 2560], video: "hero-video" },
  planejamento: { larguras: [640, 960], video: "planejamento-video" },
  fechamento: { larguras: [560, 840], video: "fechamento-video", loop: "fusao" },
  "card-toxina-botulinica": { larguras: [400, 600, 800] },
  "card-bioestimuladores-de-colageno": { larguras: [400, 600, 800] },
  "card-preenchimento-labial": { larguras: [400, 600, 800] },
  "dra-previa": { larguras: [560, 840] },
};
const IMG = [".jpg", ".jpeg", ".png", ".webp", ".avif"];
const VID = [".mp4", ".mov", ".webm", ".m4v"];

await mkdir(SAIDA, { recursive: true });
const arquivos = await readdir(ORIG).catch(() => []);
const achar = (nome, exts) => arquivos.find((a) => parse(a).name === nome && exts.includes(parse(a).ext.toLowerCase()));
const kb = async (f) => Math.round((await stat(f)).size / 1024);

const manifesto = {};
const relatorio = [];

async function processaImagem(slot, origem, larguras) {
  const meta = await sharp(origem).metadata();
  const saida = { larguras: [], largura: meta.width, altura: meta.height };
  for (const w of larguras) {
    if (w > meta.width) continue;
    const base = sharp(origem).rotate().resize({ width: w, withoutEnlargement: true });
    const avif = join(SAIDA, `${slot}-${w}.avif`);
    const webp = join(SAIDA, `${slot}-${w}.webp`);
    await base.clone().avif({ quality: 50, effort: 5 }).toFile(avif);
    await base.clone().webp({ quality: 72 }).toFile(webp);
    saida.larguras.push(w);
    relatorio.push({ arquivo: `${slot}-${w}`, avifKB: await kb(avif), webpKB: await kb(webp) });
  }
  // original entre duas larguras pedidas (ex.: 1536 px quando o maior pedido é 1920): usa também o tamanho original
  const maiorPedida = Math.max(...larguras);
  if (meta.width < maiorPedida && !saida.larguras.includes(meta.width) && saida.larguras.length) {
    const w = meta.width;
    await sharp(origem).rotate().avif({ quality: 50, effort: 5 }).toFile(join(SAIDA, `${slot}-${w}.avif`));
    await sharp(origem).rotate().webp({ quality: 72 }).toFile(join(SAIDA, `${slot}-${w}.webp`));
    saida.larguras.push(w);
    relatorio.push({ arquivo: `${slot}-${w}`, avifKB: await kb(join(SAIDA, `${slot}-${w}.avif`)), webpKB: await kb(join(SAIDA, `${slot}-${w}.webp`)) });
  }
  if (!saida.larguras.length) {
    // imagem menor que a menor largura: usa o tamanho original
    const w = meta.width;
    await sharp(origem).rotate().avif({ quality: 50 }).toFile(join(SAIDA, `${slot}-${w}.avif`));
    await sharp(origem).rotate().webp({ quality: 72 }).toFile(join(SAIDA, `${slot}-${w}.webp`));
    saida.larguras.push(w);
  }
  return saida;
}

function ffmpeg(args) {
  execFileSync("ffmpeg", ["-y", "-loglevel", "error", ...args]);
}

// Loop por fusão: o último segundo se dissolve no primeiro (para cenas que não podem andar para trás, como alguém escrevendo)
function fusao(origem) {
  const d = parseFloat(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", origem]).toString());
  return `[0:v]scale='min(1280,iw)':-2,fps=24,split[a][b];[a]trim=1:${d},setpts=PTS-STARTPTS[x];[b]trim=0:1,setpts=PTS-STARTPTS[y];[x][y]xfade=transition=fade:duration=1:offset=${(d - 2).toFixed(3)}[v]`;
}

async function processaVideo(slot, origem, loop = "idaevolta") {
  const pronto = await stat(join(SAIDA, `${slot}.webm`)).then((s) => s.mtimeMs > 0).catch(() => false);
  if (pronto && process.argv.includes("--rapido")) return { mp4: `/midia/${slot}.mp4`, webm: `/midia/${slot}.webm` };
  const FILTRO = loop === "fusao" ? fusao(origem) : PINGPONG;
  const mp4 = join(SAIDA, `${slot}.mp4`);
  const webm = join(SAIDA, `${slot}.webm`);
  // mudo, até 1280 px (sem ampliar), 24 fps, início rápido; ida e volta para o loop não dar salto;
  // aumenta a compressão até caber em ~2 MB
  for (const crf of [26, 30, 34]) {
    ffmpeg(["-i", origem, "-an", "-filter_complex", FILTRO, "-map", "[v]", "-c:v", "libx264", "-preset", "slow", "-crf", String(crf), "-pix_fmt", "yuv420p", "-movflags", "+faststart", mp4]);
    if ((await stat(mp4)).size <= LIMITE_VIDEO) break;
  }
  for (const crf of [36, 42, 48]) {
    ffmpeg(["-i", origem, "-an", "-filter_complex", FILTRO, "-map", "[v]", "-c:v", "libvpx-vp9", "-b:v", "0", "-crf", String(crf), "-row-mt", "1", webm]);
    if ((await stat(webm)).size <= LIMITE_VIDEO) break;
  }
  relatorio.push({ arquivo: slot, mp4KB: await kb(mp4), webmKB: await kb(webm) });
  return { mp4: `/midia/${slot}.mp4`, webm: `/midia/${slot}.webm` };
}

for (const [slot, cfg] of Object.entries(SLOTS)) {
  const img = achar(slot, IMG);
  const vid = cfg.video ? achar(cfg.video, VID) : undefined;
  if (!img && !vid) continue;
  manifesto[slot] = {};
  let origemImagem = img ? join(ORIG, img) : undefined;
  if (!origemImagem && vid) {
    // sem imagem: a capa sai do primeiro segundo do vídeo
    origemImagem = join(SAIDA, `_capa-${slot}.png`);
    ffmpeg(["-ss", "1", "-i", join(ORIG, vid), "-frames:v", "1", origemImagem]);
  }
  if (origemImagem && cfg.larguras.length) manifesto[slot].imagem = await processaImagem(slot, origemImagem, cfg.larguras);
  if (origemImagem && !img) await rm(origemImagem);
  if (vid) manifesto[slot].video = await processaVideo(slot, join(ORIG, vid), cfg.loop);
}

await writeFile(join(RAIZ, "lib/midia.json"), JSON.stringify(manifesto, null, 2) + "\n");
console.table(relatorio);
console.log("Slots:", Object.keys(manifesto).join(", ") || "(nenhum: coloque os arquivos em midia-original/)");
