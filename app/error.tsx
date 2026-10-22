"use client";

import { whatsappHref } from "@/lib/site";

// RASCUNHO — erro genérico (APP_FLOW). Diz o que aconteceu e o que fazer, sem pedir desculpas.
export default function Erro({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-32 pt-40 sm:px-6 lg:pt-48">
      <h1 className="max-w-[16ch] text-[clamp(2.5rem,6vw,4.0625rem)]">Esta página não carregou</h1>
      <div className="mt-8 flex max-w-[640px] items-center" aria-hidden="true">
        <span className="size-2 bg-ouro" />
        <span className="h-px flex-1 bg-ouro" />
      </div>
      <p className="mt-8 max-w-[52ch] text-lg text-muted-foreground">
        Tente carregar de novo. Se continuar assim, fale com o consultório pelo WhatsApp.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
        <button type="button" onClick={reset} className="inline-flex h-12 items-center rounded-full bg-tinta px-6 font-medium text-gesso">
          Carregar de novo
        </button>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-bronze underline underline-offset-4">
          Falar pelo WhatsApp
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
      </div>
    </section>
  );
}
