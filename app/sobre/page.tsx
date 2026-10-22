import type { Metadata } from "next";
import { PaginaProvisoria } from "@/components/layout/pagina-provisoria";

export const metadata: Metadata = { title: "Sobre a Dra. Mariana · Dra. Mariana Santiago" };

export default function Page() {
  return <PaginaProvisoria titulo="Sobre a Dra. Mariana" etapa={8} />;
}
