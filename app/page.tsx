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
