import Link from "next/link";

// RASCUNHO — página provisória do protótipo. Existe só para a navegação funcionar até a etapa indicada.
export function PaginaProvisoria({ titulo, etapa }: { titulo: string; etapa: number }) {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-32 pt-40 sm:px-6 lg:pt-48">
      <h1 className="max-w-[18ch] text-[clamp(2.5rem,6vw,4.0625rem)]">{titulo}</h1>
      <div className="mt-8 flex max-w-[640px] items-center" aria-hidden="true">
        <span className="size-2 bg-ouro" />
        <span className="h-px flex-1 bg-ouro" />
      </div>
      <p className="mt-8 max-w-[56ch] text-lg text-muted-foreground">
        Esta página do protótipo é construída na etapa {etapa}.
      </p>
      <p className="mt-6">
        <Link href="/" className="text-bronze underline underline-offset-4">
          Voltar para o início
        </Link>
      </p>
    </section>
  );
}
