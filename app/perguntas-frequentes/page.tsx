import type { Metadata } from "next";
import { PaginaProvisoria } from "@/components/layout/pagina-provisoria";

export const metadata: Metadata = { title: "Perguntas frequentes · Dra. Mariana Santiago" };

export default function Page() {
  return <PaginaProvisoria titulo="Perguntas frequentes" etapa={8} />;
}
