"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { whatsappHref } from "@/lib/site";

/**
 * CTA fixo no celular (docs/DESIGN.md, Celular). Some quando algo marcado com data-cta está visível
 * (o CTA de uma seção ou o rodapé, que tem o WhatsApp), para não duplicar.
 * Escondido a partir de 768px, onde o cabeçalho já mostra o botão.
 */
export function CtaFixo() {
  const pathname = usePathname();
  const [oculto, setOculto] = useState(false);

  useEffect(() => {
    const alvos = Array.from(document.querySelectorAll("[data-cta]"));
    if (!alvos.length) {
      setOculto(false);
      return;
    }
    const visiveis = new Set<Element>();
    const obs = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) visiveis.add(e.target);
          else visiveis.delete(e.target);
        }
        setOculto(visiveis.size > 0);
      },
      // Ignora a faixa de baixo, onde o próprio CTA fica.
      { rootMargin: "0px 0px -88px 0px" },
    );
    alvos.forEach((a) => obs.observe(a));
    return () => obs.disconnect();
  }, [pathname]);

  return (
    <div
      className="cta-fixo fixed inset-x-0 bottom-0 z-30 px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 md:hidden"
      data-oculto={oculto ? "" : undefined}
      aria-hidden={oculto ? true : undefined}
      inert={oculto}
    >
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-full items-center justify-center rounded-full bg-tinta font-medium text-gesso"
      >
        Agendar consulta
        <span className="sr-only"> pelo WhatsApp (abre em nova aba)</span>
      </a>
    </div>
  );
}
