import type { NextConfig } from "next";

// Exportação estática (APP_FLOW/SCHEMA: o site não precisa de servidor).
// A prévia em artefato reescreve os caminhos em scripts/preview.mjs.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
