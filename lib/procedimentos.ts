import dados from "./procedimentos.json";

// Páginas de procedimento. Textos gerados de docs/COPY.md por scripts/copy-procedimentos.py (não editar o JSON à mão).
// Fontes: docs/FONTES_PROCEDIMENTOS.md. Só links sem marca comercial (R9).

export type Procedimento = (typeof dados)[number] & { umaLinha: string; fontes: { texto: string; href: string }[] };

const NCBI = (id: string) => `https://www.ncbi.nlm.nih.gov/books/${id}/`;
const FDA_PREENCHEDORES = {
  texto: "FDA, Dermal Fillers (Soft Tissue Fillers)",
  href: "https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-soft-tissue-fillers",
};

const extras: Record<string, { umaLinha: string; fontes: { texto: string; href: string }[] }> = {
  "toxina-botulinica": {
    umaLinha: "Suaviza linhas de expressão relaxando músculos específicos. Efeito temporário.",
    fontes: [
      { texto: "StatPearls, Botulinum Toxin Treatment of the Upper Face", href: NCBI("NBK574523") },
      { texto: "StatPearls, Botulinum Toxin", href: NCBI("NBK557387") },
    ],
  },
  "preenchimento-labial": {
    umaLinha: "Ácido hialurônico para contorno, volume discreto e hidratação dos lábios.",
    fontes: [
      { texto: "Czumbel et al., 2021, meta-análise sobre preenchimento labial com ácido hialurônico", href: "https://www.frontiersin.org/journals/surgery/articles/10.3389/fsurg.2021.681028/full" },
      { texto: "StatPearls, Hyaluronic Acid", href: NCBI("NBK482440") },
      { texto: "StatPearls, Hyaluronidase", href: NCBI("NBK545163") },
      FDA_PREENCHEDORES,
    ],
  },
  "contorno-facial": {
    umaLinha: "Ácido hialurônico em áreas como maçãs do rosto, mandíbula, queixo e olheiras, em etapas.",
    fontes: [
      { texto: "Alam et al., 2021, complicações de curto prazo do preenchimento com ácido hialurônico", href: "https://jamanetwork.com/journals/jamadermatology/fullarticle/2774505" },
      { texto: "Doyon et al., 2024, revisão sobre perda de visão associada a preenchedores", href: "https://academic.oup.com/asj/article/44/10/1091/7649223" },
      { texto: "StatPearls, Hyaluronic Acid", href: NCBI("NBK482440") },
      FDA_PREENCHEDORES,
    ],
  },
  "bioestimuladores-de-colageno": {
    umaLinha: "Estimulam a produção de colágeno; a mudança é gradual, ao longo de meses.",
    fontes: [
      { texto: "StatPearls, Poly-L-Lactic Acid", href: NCBI("NBK507871") },
      { texto: "de Almeida et al., 2019, consenso sobre hidroxiapatita de cálcio diluída", href: "https://doaj.org/article/0a38664c1bff4b05a608a952e17e97b2" },
      { texto: "ASDS, Injectable Poly-L-lactic Acid", href: "https://www.asds.net/Skin-Experts/Skin-Treatments/Injectables/Injectable-Poly-l-lactic-Acid" },
    ],
  },
  skinbooster: {
    umaLinha: "Ácido hialurônico para hidratação e qualidade da pele, sem criar volume.",
    fontes: [
      { texto: "StatPearls, Hyaluronic Acid", href: NCBI("NBK482440") },
      { texto: "Nikolis e Enright, 2018, série de casos sobre ácido hialurônico para qualidade da pele", href: "https://www.dovepress.com/article/download/41313" },
      FDA_PREENCHEDORES,
    ],
  },
  peelings: {
    umaLinha: "Renovação controlada da camada superficial da pele para textura e uniformidade.",
    fontes: [
      { texto: "StatPearls, Chemical Peels", href: NCBI("NBK547752") },
      { texto: "AAD, perguntas frequentes sobre peelings químicos", href: "https://www.aad.org/public/cosmetic/younger-looking/chemical-peels-faqs" },
      { texto: "Vemula et al., 2018, segurança de peelings superficiais em peles mais escuras", href: "https://research.bidmc.org/eric-secemsky/publications/assessing-safety-superficial-chemical-peels-darker-skin-retrospective-study" },
    ],
  },
};

// Ordem do índice (COPY.md): toxina, lábio, contorno, bioestimuladores, skinbooster, peelings
export const procedimentos: Procedimento[] = dados.map((d) => ({ ...d, ...extras[d.slug] }));

export const porSlug = (slug: string) => procedimentos.find((p) => p.slug === slug);

export const maiuscula = (t: string) => (t ? t.charAt(0).toUpperCase() + t.slice(1) : t);
