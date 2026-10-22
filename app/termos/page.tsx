import type { Metadata } from "next";
import { PaginaProvisoria } from "@/components/layout/pagina-provisoria";

export const metadata: Metadata = { title: "Termos de uso · Dra. Mariana Santiago" };

export default function Page() {
  return <PaginaProvisoria titulo="Termos de uso" etapa={11} />;
}
