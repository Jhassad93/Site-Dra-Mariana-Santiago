"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { calendlyUrl, whatsappHref } from "@/lib/site";

/**
 * Agenda online em /agendar (APP_FLOW, "Agendamento online").
 * - Nada carrega antes do clique em "Ver horários disponíveis" (sem cookies de terceiros antes da escolha: R15).
 * - Com NEXT_PUBLIC_CALENDLY_URL preenchido: incorpora o Calendly e escuta `calendly.event_scheduled` → /obrigado?origem=agenda.
 * - Vazio (protótipo): agenda de DEMONSTRAÇÃO, sem campos e sem coletar dado nenhum.
 *   Para testar os estados: ?simular=erro | sem-horarios | ocupado | lento
 */
type Estado = "inicial" | "carregando" | "calendly" | "demo" | "erro" | "sem-horarios";
type Simular = "" | "erro" | "sem-horarios" | "ocupado" | "lento";

const LIMITE_MS = 12000;

export function AgendaOnline() {
  const router = useRouter();
  const [estado, setEstado] = useState<Estado>("inicial");
  const simular = useRef<Simular>("");
  const area = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get("simular") ?? "";
    simular.current = (["erro", "sem-horarios", "ocupado", "lento"].includes(s) ? s : "") as Simular;
  }, []);

  // Evento do Calendly: agendamento concluído
  useEffect(() => {
    const ouvir = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return;
      const ev = (e.data as { event?: string })?.event;
      if (ev === "calendly.event_type_viewed") setEstado("calendly");
      if (ev === "calendly.event_scheduled") router.push("/obrigado/?origem=agenda");
    };
    window.addEventListener("message", ouvir);
    return () => window.removeEventListener("message", ouvir);
  }, [router]);

  const abrir = () => {
    setEstado("carregando");
    const sim = simular.current;
    if (!calendlyUrl || sim) {
      const atraso = sim === "lento" ? LIMITE_MS + 500 : 700;
      window.setTimeout(() => {
        if (sim === "erro" || sim === "lento") setEstado("erro");
        else if (sim === "sem-horarios") setEstado("sem-horarios");
        else setEstado("demo");
      }, atraso);
      return;
    }
    // Calendly real: script carregado só agora
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    s.onerror = () => setEstado("erro");
    document.body.appendChild(s);
    window.setTimeout(() => setEstado((atual) => (atual === "carregando" ? "erro" : atual)), LIMITE_MS);
  };

  useEffect(() => {
    if (estado !== "inicial") area.current?.focus();
  }, [estado]);

  return (
    <div className="grid gap-6">
      {estado === "inicial" ? (
        <div className="grid gap-4">
          <button
            type="button"
            onClick={abrir}
            data-evento="clique_agenda_online"
            data-origem="agendar"
            className="botao inline-flex h-12 items-center justify-center justify-self-start rounded-full border border-tinta/25 px-6 text-[1rem] font-medium text-tinta hover:bg-areia/40"
          >
            Ver horários disponíveis
          </button>
          <p className="max-w-[56ch] text-sm text-muted-foreground">
            A agenda é de um serviço externo (Calendly), que guarda seus dados fora do Brasil. Ela só carrega depois que você
            clicar. Saiba mais na{" "}
            <Link href="/privacidade/" className="text-bronze underline decoration-1 underline-offset-4">
              Política de privacidade
            </Link>
            .
          </p>
        </div>
      ) : null}

      <div ref={area} tabIndex={-1} aria-live="polite" className="outline-none">
        {estado === "carregando" ? <Esqueleto /> : null}

        {estado === "calendly" || (estado === "carregando" && calendlyUrl && !simular.current) ? (
          <div
            className="calendly-inline-widget min-h-[680px] w-full overflow-hidden rounded-[var(--radius-card)]"
            data-url={`${calendlyUrl}${calendlyUrl.includes("?") ? "&" : "?"}hide_gdpr_banner=1&locale=pt`}
            hidden={estado === "carregando"}
          />
        ) : null}

        {estado === "erro" ? (
          <Aviso>
            A agenda não carregou. Você pode{" "}
            <a
              href={calendlyUrl || "#agenda"}
              target={calendlyUrl ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-bronze underline decoration-1 underline-offset-4"
            >
              abri-la em outra aba
            </a>{" "}
            ou{" "}
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-bronze underline decoration-1 underline-offset-4">
              falar pelo WhatsApp
            </a>
            .
          </Aviso>
        ) : null}

        {estado === "sem-horarios" ? (
          <Aviso>
            Não há horários livres nas próximas semanas.{" "}
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-bronze underline decoration-1 underline-offset-4">
              Mande uma mensagem pelo WhatsApp
            </a>
            , que encontramos um horário.
          </Aviso>
        ) : null}

        {estado === "demo" ? <AgendaDemo ocupado={simular.current === "ocupado"} onConfirmar={() => router.push("/obrigado/?origem=agenda")} /> : null}
      </div>
    </div>
  );
}

function Aviso({ children }: { children: React.ReactNode }) {
  return <p className="max-w-[56ch] rounded-[var(--radius-compact)] bg-areia/40 p-5">{children}</p>;
}

function Esqueleto() {
  return (
    <div aria-hidden="true" className="esqueleto grid gap-3 rounded-[var(--radius-card)] border border-border p-6">
      <span className="h-5 w-40 rounded bg-tinta/10" />
      <span className="grid grid-cols-5 gap-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="h-11 rounded-[var(--radius-field)] bg-tinta/[0.06]" />
        ))}
      </span>
      <span className="h-12 w-48 rounded-full bg-tinta/10" />
    </div>
  );
}

// ---------- Agenda de demonstração (protótipo) ----------

const DIAS_ATENDIMENTO: Record<number, string[]> = {
  2: ["13:00", "14:00", "16:00", "18:00", "19:00", "20:00"], // terça
  5: ["13:00", "15:00", "17:00", "19:00", "20:00"], // sexta
  6: ["08:00", "09:00", "10:00", "12:00"], // sábado
};

function proximosDias(n: number) {
  const dias: { data: Date; horarios: string[] }[] = [];
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  while (dias.length < n) {
    d.setDate(d.getDate() + 1);
    const h = DIAS_ATENDIMENTO[d.getDay()];
    if (h) {
      // horários "ocupados" fictícios, para a grade não parecer vazia demais
      const livres = h.filter((_, i) => (i + d.getDate()) % 3 !== 0);
      dias.push({ data: new Date(d), horarios: livres });
    }
  }
  return dias;
}

const fmt = new Intl.DateTimeFormat("pt-BR", { weekday: "long", day: "numeric", month: "long" });
const fmtDia = { format: (d: Date) => fmt.format(d).replace(/^./, (c) => c.toUpperCase()) };

function AgendaDemo({ ocupado, onConfirmar }: { ocupado: boolean; onConfirmar: () => void }) {
  const [dias] = useState(() => proximosDias(6));
  const [diaSel, setDiaSel] = useState(0);
  const [hora, setHora] = useState<string | null>(null);
  const [erroOcupado, setErroOcupado] = useState(false);
  const [tomados, setTomados] = useState<string[]>([]);
  const dia = dias[diaSel];
  const chave = (h: string) => `${diaSel}-${h}`;

  const confirmar = () => {
    if (!hora) return;
    if (ocupado && tomados.length === 0) {
      setTomados([chave(hora)]);
      setHora(null);
      setErroOcupado(true);
      return;
    }
    onConfirmar();
  };

  return (
    <div className="grid gap-6 rounded-[var(--radius-card)] border border-border p-5 md:p-8">
      <p className="text-sm text-muted-foreground">Agenda de demonstração: nenhum horário marcado aqui é real.</p>

      <fieldset className="grid gap-3">
        <legend className="mb-3 font-medium">Escolha o dia</legend>
        <div className="flex flex-wrap gap-2">
          {dias.map((d, i) => (
            <button
              key={d.data.toISOString()}
              type="button"
              aria-pressed={i === diaSel}
              onClick={() => {
                setDiaSel(i);
                setHora(null);
                setErroOcupado(false);
              }}
              className="dia min-h-11 rounded-[var(--radius-field)] border border-border px-3 text-sm aria-pressed:border-tinta aria-pressed:bg-tinta aria-pressed:text-gesso"
            >
              {fmtDia.format(d.data)}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="grid gap-3">
        <legend className="mb-3 font-medium">Escolha o horário</legend>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
          {dia.horarios.map((h) => {
            const tomado = tomados.includes(chave(h));
            return (
              <button
                key={h}
                type="button"
                disabled={tomado}
                aria-pressed={hora === h}
                onClick={() => {
                  setHora(h);
                  setErroOcupado(false);
                }}
                className="min-h-11 rounded-[var(--radius-field)] border border-border text-sm aria-pressed:border-tinta aria-pressed:bg-tinta aria-pressed:text-gesso disabled:line-through disabled:opacity-40"
              >
                {h.replace(":00", "h")}
              </button>
            );
          })}
        </div>
      </fieldset>

      {erroOcupado ? (
        <p role="alert" className="rounded-[var(--radius-compact)] bg-areia/40 p-4">
          Esse horário acabou de ser reservado. Escolha outro.
        </p>
      ) : null}

      <div className="grid gap-3 border-t border-border pt-5">
        <p className="text-sm text-muted-foreground">
          Na agenda real, depois de escolher o horário você informa só nome, celular e e-mail. Nesta demonstração nenhum dado é
          pedido nem guardado.
        </p>
        <button
          type="button"
          onClick={confirmar}
          disabled={!hora}
          className="botao inline-flex min-h-12 items-center justify-center justify-self-start rounded-full bg-tinta px-6 py-2 text-left text-[1rem] font-medium text-gesso disabled:cursor-not-allowed disabled:opacity-40"
        >
          {hora ? `Confirmar ${fmt.format(dia.data)}, ${hora.replace(":00", "h")}` : "Escolha um horário"}
        </button>
      </div>
    </div>
  );
}
