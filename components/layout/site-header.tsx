"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { IdentificacaoR1 } from "@/components/marca/blocos";
import { endereco, horarios, identificacao, navegacao, whatsappHref } from "@/lib/site";

type Tema = "escuro" | "claro";

/**
 * Cabeçalho "liquid glass" (docs/DESIGN.md, Componentes).
 * Escuro quando passa sobre uma seção marcada com data-tema="escuro" (hero, planejamento); claro no resto.
 * Sem backdrop-filter ou com prefers-reduced-transparency, vira fundo sólido (regras .cabecalho no globals.css).
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [tema, setTema] = useState<Tema>("claro");
  const barra = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    let quadro = 0;
    const medir = () => {
      quadro = 0;
      const el = barra.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const y = r.top + r.height / 2;
      const escuro = Array.from(document.querySelectorAll<HTMLElement>('[data-tema="escuro"]')).some((s) => {
        const b = s.getBoundingClientRect();
        return b.top <= y && b.bottom >= y;
      });
      setTema(escuro ? "escuro" : "claro");
    };
    const agendar = () => {
      if (!quadro) quadro = requestAnimationFrame(medir);
    };
    medir();
    window.addEventListener("scroll", agendar, { passive: true });
    window.addEventListener("resize", agendar);
    return () => {
      window.removeEventListener("scroll", agendar);
      window.removeEventListener("resize", agendar);
      cancelAnimationFrame(quadro);
    };
  }, [pathname]);

  const abrir = () => menu.current?.showModal();
  const fechar = () => menu.current?.close();

  const atual = (href: string) => pathname === href || pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-40 lg:top-3 lg:px-3">
      <div
        ref={barra}
        data-tema={tema === "escuro" ? "vidro-escuro" : "vidro-claro"}
        className={cn(
          "cabecalho mx-auto flex h-16 max-w-[1248px] items-center justify-between gap-6 border-b px-4 sm:px-6 lg:rounded-[var(--radius-header)] lg:border lg:pr-2.5",
          tema === "escuro" ? "text-gesso" : "text-tinta",
        )}
      >
        <Link href="/" className="flex min-h-11 items-center gap-3 rounded-md" aria-label={`${identificacao.marca}, página inicial`}>
          <Monograma />
          <span className="text-base tracking-[-0.005em]">{identificacao.marca}</span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navegacao.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={atual(item.href) ? "page" : undefined}
                  className="link-cabecalho inline-flex min-h-11 items-center rounded-full px-3.5 text-[0.9375rem]"
                >
                  {item.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hidden h-11 items-center rounded-full px-5 text-[0.9375rem] font-medium md:inline-flex",
              tema === "escuro" ? "botao-vidro" : "bg-tinta text-gesso",
            )}
          >
            Agendar consulta
            <span className="sr-only"> pelo WhatsApp (abre em nova aba)</span>
          </a>
          <button
            type="button"
            onClick={abrir}
            aria-haspopup="dialog"
            className="botao-menu grid size-11 place-items-center rounded-[12px] lg:hidden"
          >
            <span className="sr-only">Abrir menu</span>
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
              <path d="M4 9h16M4 15h16" />
            </svg>
          </button>
        </div>
      </div>

      <dialog
        ref={menu}
        aria-label="Menu"
        className="folha-menu m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto overscroll-contain bg-gesso p-0 text-tinta"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) fechar();
        }}
      >
        <div className="mx-auto flex min-h-full max-w-[640px] flex-col px-4 pb-[max(24px,env(safe-area-inset-bottom))] sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex min-h-11 items-center gap-3 rounded-md">
              <Monograma />
              <span className="text-base">{identificacao.marca}</span>
            </Link>
            <button type="button" onClick={fechar} className="grid size-11 place-items-center rounded-[12px] border border-border">
              <span className="sr-only">Fechar menu</span>
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav aria-label="Menu principal" className="mt-6">
            <ul className="border-t border-border">
              {[{ href: "/", rotulo: "Início" }, ...navegacao, { href: "/agendar/", rotulo: "Agendar" }].map((item) => (
                <li key={item.href} className="border-b border-border">
                  <Link
                    href={item.href}
                    aria-current={(item.href === "/" ? pathname === "/" : atual(item.href)) ? "page" : undefined}
                    className="link-folha flex min-h-16 items-center text-2xl font-light tracking-[-0.015em]"
                  >
                    {item.rotulo}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-tinta px-6 font-medium text-gesso"
          >
            Agendar consulta pelo WhatsApp
            <span className="sr-only"> (abre em nova aba)</span>
          </a>

          <div className="mt-auto grid gap-5 pt-10 text-sm text-muted-foreground">
            <dl className="grid gap-1">
              {horarios.map((h) => (
                <div key={h.dias} className="flex gap-2">
                  <dt>{h.dias}</dt>
                  <dd>{h.horas}</dd>
                </div>
              ))}
            </dl>
            <p>
              {endereco.linha1}
              <br />
              {endereco.linha2}
            </p>
            <IdentificacaoR1 />
          </div>
        </div>
      </dialog>
    </header>
  );
}

function Monograma() {
  return (
    <span aria-hidden="true" className="monograma grid size-9 place-items-center rounded-[10px] border font-voz text-xl italic leading-none">
      M
    </span>
  );
}
