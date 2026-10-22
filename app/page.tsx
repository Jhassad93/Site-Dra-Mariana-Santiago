import type { Metadata } from "next";
import { metadados } from "@/lib/seo";
import {
  ComoTrabalho,
  Fechamento,
  Hero,
  OndeQuando,
  OndeQuandoCelular,
  PerguntasHome,
  Planejamento,
  Procedimentos,
} from "@/components/home/secoes";

export const metadata: Metadata = metadados({
  titulo: "Dra. Mariana Santiago | Médica, procedimentos estéticos faciais na Av. Paulista",
  descricao:
    "Médica (CRM-SP 227636) com consultório na Av. Paulista. Consulta de avaliação e plano antes de qualquer procedimento estético facial: o que fazer, quando, cuidados e riscos.",
  caminho: "/",
});

// Home (Etapa 5). Ordem do DESIGN.md; no celular, a faixa de horários sobe para logo depois do hero.
export default function Home() {
  return (
    <>
      <Hero />
      <OndeQuandoCelular />
      <ComoTrabalho />
      <Procedimentos />
      <Planejamento />
      <PerguntasHome />
      <OndeQuando />
      <Fechamento />
    </>
  );
}
