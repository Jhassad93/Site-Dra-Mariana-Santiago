import type { Metadata } from "next";
import { PaginaProvisoria } from "@/components/layout/pagina-provisoria";

export const metadata: Metadata = { title: "Política de privacidade · Dra. Mariana Santiago" };

export default function Page() {
  return <PaginaProvisoria titulo="Política de privacidade" etapa={11} />;
}
