// RASCUNHO — Etapa 1 (setup). Folha de tokens para conferir fontes e cores.
// Será substituída pela home na Etapa 5.

const cores = [
  { nome: "Tinta", hex: "#1C1813", papel: "Texto, seções escuras e botão principal", classe: "bg-tinta text-linho" },
  { nome: "Linho", hex: "#F7F2EA", papel: "Fundo da página", classe: "bg-linho text-tinta ring-1 ring-border" },
  { nome: "Areia", hex: "#EBD4AD", papel: "Texto sobre escuro e painéis", classe: "bg-areia text-tinta" },
  { nome: "Ouro", hex: "#C9A35F", papel: "Só ornamento: régua, marcadores, linhas", classe: "bg-ouro text-tinta" },
  { nome: "Bronze", hex: "#7A5A2B", papel: "Links e destaques de texto sobre Linho", classe: "bg-bronze text-linho" },
];

const escala = [
  { px: 81, classe: "text-6xl" },
  { px: 65, classe: "text-5xl" },
  { px: 52, classe: "text-4xl" },
  { px: 41.5, classe: "text-3xl" },
  { px: 33, classe: "text-2xl" },
  { px: 26.5, classe: "text-xl" },
  { px: 21, classe: "text-lg" },
  { px: 17, classe: "text-base" },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-[1200px] px-5 py-16 md:px-10 md:py-24">
      <section className="rounded-[var(--radius-card)] bg-tinta px-6 py-14 text-areia md:px-14 md:py-20">
        <h1 className="text-[clamp(2.75rem,7vw,5.25rem)] font-light">
          Fim de tarde na Paulista
        </h1>
        <div className="mt-8 flex items-center gap-0" aria-hidden="true">
          <span className="h-2 w-2 bg-ouro" />
          <span className="h-px flex-1 bg-ouro" />
        </div>
        <p className="mt-8 max-w-[56ch] text-lg text-linho">
          Folha de tokens da Etapa 1. Confere as fontes, as cores e a escala antes de construir as
          páginas.
        </p>
        <p className="mt-10 font-voz text-3xl italic text-areia">Mariana Santiago</p>
        <p className="mt-2 text-sm text-linho">Dra. Mariana Passos Santiago</p>
        <p className="text-sm text-linho">MÉDICA: CRM-SP 227636</p>
      </section>

      <section className="mt-20" aria-labelledby="cores">
        <h2 id="cores" className="text-3xl">Cores</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {cores.map((c) => (
            <li key={c.nome} className={`${c.classe} flex min-h-40 flex-col justify-end rounded-[var(--radius-compact)] p-5`}>
              <span className="text-lg">{c.nome}</span>
              <span className="text-sm">{c.hex}</span>
              <span className="mt-2 text-sm">{c.papel}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-[68ch] text-muted-foreground">
          Ouro sobre Linho tem contraste de 2,12:1. Por isso o Ouro nunca é usado para texto em fundo
          claro, só para linhas e marcadores. Links usam{" "}
          <a href="#cores" className="text-bronze underline underline-offset-4">Bronze</a>.
        </p>
      </section>

      <section className="mt-20" aria-labelledby="tipografia">
        <h2 id="tipografia" className="text-3xl">Tipografia</h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm text-muted-foreground">Geist: informação</p>
            <p className="mt-3 text-4xl font-light">Planejamento no tempo certo</p>
            <p className="mt-4 max-w-[68ch]">
              Corpo de texto em Geist 400, 17px, entrelinha 1,55. Antes de qualquer procedimento, uma
              avaliação individual.
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Instrument Serif: a voz da Dra.</p>
            <p className="mt-3 max-w-[56ch] font-voz text-3xl italic leading-[1.35]">
              Antes de qualquer procedimento, eu quero entender o que incomoda você.
            </p>
          </div>
        </div>
        <ul className="mt-12 space-y-3 border-t border-border pt-8">
          {escala.map((e) => (
            <li key={e.px} className="flex items-baseline gap-6">
              <span className="w-16 shrink-0 text-xs text-muted-foreground">{e.px}px</span>
              <span className={`${e.classe} min-w-0 font-light leading-tight [overflow-wrap:anywhere]`}>Avenida Paulista</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
