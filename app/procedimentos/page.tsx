import type { Metadata } from "next";
import { PaginaProvisoria } from "@/components/layout/pagina-provisoria";

export const metadata: Metadata = { title: "Procedimentos · Dra. Mariana Santiago" };

export default function Page() {
  return <PaginaProvisoria titulo="Procedimentos" etapa={7} />;
}
