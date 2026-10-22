#!/usr/bin/env python3
"""Gera lib/procedimentos.json a partir das páginas de procedimento do docs/COPY.md.
O COPY.md é a fonte da verdade dos textos: editar lá e rodar `python3 scripts/copy-procedimentos.py`.
Marcações [A CONFIRMAR …] saem do texto do site e vão para o campo `pendencias`."""
import json, re, pathlib

raiz = pathlib.Path(__file__).resolve().parent.parent
copy = (raiz / "docs/COPY.md").read_text()
bloco = copy.split("## Páginas de procedimento", 1)[1].split("\n## Guia", 1)[0]
partes = re.split(r"\n### ", bloco)[1:]

def limpa(t, pend):
    for m in re.findall(r"`?\[A CONFIRMAR[^\]]*\]`?", t):
        pend.append(m.strip("`"))
        t = t.replace(m, "")
    t = t.replace("**", "").strip()
    t = re.sub(r"^\*(.*)\*$", r"\1", t)
    return re.sub(r"\s{2,}", " ", t).strip()

def item_rotulado(l, pend):
    m = re.match(r"- \*\*(.+?)\*\*\s*(.*)", l)
    if not m:
        return {"rotulo": "", "texto": limpa(l[2:], pend)}
    r = m.group(1).rstrip(":").strip()
    return {"rotulo": r, "texto": limpa(m.group(2), pend)}

dados = []
for p in partes:
    linhas = p.strip().split("\n")
    cab = linhas[0]
    m = re.match(r"(.+?) `(/procedimentos/([^/]+)/)`", cab)
    if not m:
        continue
    pend = []
    d = {"slug": m.group(3), "href": m.group(2), "nome": "", "pendencias": pend}
    secao, buf = None, {}
    for l in linhas[1:]:
        if l.startswith("**Title:**"): d["title"] = limpa(l[10:], pend)
        elif l.startswith("**Description:**"): d["description"] = limpa(l[16:], pend)
        elif l.startswith("**H1:**"): d["nome"] = limpa(l[7:], pend)
        elif l.startswith("**Resumo:**"): d["resumo"] = limpa(l[11:], pend)
        elif l.startswith("**Dados do card:**"):
            q = re.findall(r'"([^"]+)"', l)
            leg = re.search(r"legenda:\s*(.+)$", l)
            d["card"] = {"valor": q[0], "rotulo": q[1], "legenda": leg.group(1).strip() if leg else ""}
        elif l.startswith("**Card compacto:**"): d["compacto"] = True
        elif l.startswith("**Fontes:**"): d["fontesTexto"] = limpa(l[11:], pend)
        elif l.startswith("#### "):
            secao = l[5:].strip()
            buf[secao] = []
        elif l.startswith("`[A CONFIRMAR"): pend.append(l.strip("`"))
        elif secao and l.strip() and not l.startswith("---"):
            buf[secao].append(l)
    def paras(nome):
        return [limpa(x, pend) for x in buf.get(nome, []) if not x.startswith("- ") and limpa(x, pend)]
    def itens(nome):
        return [x for x in buf.get(nome, []) if x.startswith("- ")]
    d["paraQueServe"] = paras("Para que serve")
    d["comoEFeito"] = paras("Como é feito")
    regua = itens("Quanto tempo leva")
    d["regua"] = [{"quando": i["rotulo"], "oQue": i["texto"]} for i in (item_rotulado(x, pend) for x in regua)]
    nota = [x for x in buf.get("Quanto tempo leva", []) if x.startswith("*")]
    d["reguaNota"] = limpa(nota[0], pend) if nota else ""
    d["depois"] = [limpa(x[2:], pend) for x in itens("O que esperar depois")]
    efs = [item_rotulado(x, pend) for x in itens("Possíveis efeitos e complicações")]
    d["avisar"] = next((e["texto"] for e in efs if e["rotulo"].lower().startswith("quando avisar")), "")
    d["efeitos"] = [e for e in efs if not e["rotulo"].lower().startswith("quando avisar")]
    d["desfazer"] = paras("Dá para desfazer?")
    d["contraindicacoes"] = paras("Quando não é indicado")
    voz = paras("Na consulta, eu…")
    d["naConsulta"] = " ".join(voz).lstrip("…").strip()
    d["perguntas"] = []
    for x in itens("Perguntas"):
        mm = re.match(r"- \*\*(.+?)\*\*\s*(.*)", x)
        d["perguntas"].append({"pergunta": mm.group(1).strip(), "resposta": limpa(mm.group(2), pend)})
    d["pendencias"] = list(dict.fromkeys(pend))
    dados.append(d)

(raiz / "lib/procedimentos.json").write_text(json.dumps(dados, ensure_ascii=False, indent=2) + "\n")
print(len(dados), "procedimentos;", [ (x["slug"], len(x["regua"]), len(x["perguntas"]), len(x["pendencias"])) for x in dados])
