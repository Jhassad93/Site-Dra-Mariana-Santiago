import type { Metadata } from "next";
import Link from "next/link";

// RASCUNHO — 404 (APP_FLOW: volta à home e ao agendar).
export const metadata: Metadata = { title: "Página não encontrada · Dra. Mariana Santiago" };

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-32 pt-40 sm:px-6 lg:pt-48">
      <h1 className="max-w-[16ch] text-[clamp(2.5rem,6vw,4.0625rem)]">Esta página não existe</h1>
      <div className="mt-8 flex max-w-[640px] items-center" aria-hidden="true">
        <span className="size-2 bg-ouro" />
        <span className="h-px flex-1 bg-ouro" />
      </div>
      <p className="mt-8 max-w-[52ch] text-lg text-muted-foreground">
        O endereço pode ter mudado ou ter sido digitado com algum erro.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
        <Link href="/" className="inline-flex h-12 items-center rounded-full bg-tinta px-6 font-medium text-gesso">
          Ir para o início
        </Link>
        <Link href="/agendar/" className="text-bronze underline underline-offset-4">
          Agendar consulta
        </Link>
      </div>
    </section>
  );
}
