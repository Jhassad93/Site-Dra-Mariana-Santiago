import Link from "next/link";
import { endereco, horarios, identificacao, legais, navegacao, redes, telefoneVisivel, whatsappHref } from "@/lib/site";
import { GerenciarCookies } from "./gerenciar-cookies";
import { IdentificacaoR1 } from "@/components/marca/blocos";

// Rodapé de todas as páginas. R1: identificação com nome e registro na mesma fonte, tamanho e cor, sem negrito.
export function SiteFooter() {
  const ano = 2026;
  return (
    <footer data-tema="escuro" data-cta className="tema-escuro bg-tinta text-areia">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-4 pb-[max(64px,env(safe-area-inset-bottom))] pt-20 sm:px-6 lg:grid-cols-12 lg:gap-6 lg:px-6">
        <div className="grid content-start gap-6 lg:col-span-4">
          <p className="font-voz text-2xl italic leading-[1.35] text-areia">Mariana Santiago</p>
          <IdentificacaoR1 sobre="escuro" />
        </div>

        <div className="grid content-start gap-3 text-sm lg:col-span-3">
          <h2 className="text-sm font-normal tracking-normal text-areia">Onde e quando</h2>
          <p className="text-gesso">
            {endereco.linha1}
            <br />
            {endereco.linha2}
          </p>
          <dl className="grid gap-1 text-gesso">
            {horarios.map((h) => (
              <div key={h.dias} className="flex flex-wrap gap-x-2">
                <dt>{h.dias}</dt>
                <dd>{h.horas}</dd>
              </div>
            ))}
          </dl>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="link-escuro justify-self-start">
            WhatsApp {telefoneVisivel}
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </div>

        <nav aria-label="Rodapé" className="grid content-start gap-3 text-sm lg:col-span-2">
          <h2 className="text-sm font-normal tracking-normal text-areia">Páginas</h2>
          <ul className="grid gap-2">
            {navegacao.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-escuro">
                  {item.rotulo}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/agendar/" className="link-escuro">
                Agendar
              </Link>
            </li>
          </ul>
        </nav>

        <div className="grid content-start gap-3 text-sm lg:col-span-3">
          <h2 className="text-sm font-normal tracking-normal text-areia">Redes</h2>
          <ul className="grid gap-2">
            {redes.map((r) => (
              <li key={r.href}>
                <a href={r.href} target="_blank" rel="noopener noreferrer" className="link-escuro">
                  {r.rotulo}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 border-t border-areia/20 pt-6 text-sm text-gesso sm:flex-row sm:flex-wrap sm:items-center sm:justify-between lg:col-span-12">
          <p>© {ano} {identificacao.nome}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legais.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-escuro">
                  {l.rotulo}
                </Link>
              </li>
            ))}
            <li>
              <GerenciarCookies />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
