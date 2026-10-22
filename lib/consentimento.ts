// Preferência de cookies (LGPD, R15). Guardada só no navegador; vale 12 meses (SCHEMA.md).
export type Escolha = "aceito" | "recusado";
const CHAVE = "dra-ms-cookies";
const VERSAO = 1;
const VALIDADE_MS = 365 * 24 * 60 * 60 * 1000;
export const EVENTO_MUDOU = "cookies-mudou";
export const EVENTO_ABRIR = "preferencias-cookies";

export function lerEscolha(): Escolha | null {
  try {
    const v = JSON.parse(localStorage.getItem(CHAVE) || "null");
    if (!v || v.versao !== VERSAO || Date.now() - v.data > VALIDADE_MS) return null;
    return v.escolha === "aceito" || v.escolha === "recusado" ? v.escolha : null;
  } catch {
    return null;
  }
}

export function salvarEscolha(escolha: Escolha) {
  try {
    localStorage.setItem(CHAVE, JSON.stringify({ escolha, data: Date.now(), versao: VERSAO }));
  } catch {
    // navegador sem armazenamento: a escolha vale só para esta visita
  }
  window.dispatchEvent(new CustomEvent(EVENTO_MUDOU, { detail: escolha }));
}
