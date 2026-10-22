import type { Metadata } from "next";
import { PaginaProvisoria } from "@/components/layout/pagina-provisoria";

export const metadata: Metadata = { title: "Agendar consulta · Dra. Mariana Santiago" };

export default function Page() {
  return <PaginaProvisoria titulo="Agendar consulta" etapa={9} />;
}
