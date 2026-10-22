import type { Metadata } from "next";
import { PaginaProvisoria } from "@/components/layout/pagina-provisoria";

export const metadata: Metadata = { title: "Como funciona a consulta · Dra. Mariana Santiago" };

export default function Page() {
  return <PaginaProvisoria titulo="Como funciona a consulta" etapa={6} />;
}
