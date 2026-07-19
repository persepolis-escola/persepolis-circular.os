import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Persepolis Circular OS™ | Infraestrutura Circular para Empresas",
  description:
    "Gestão de ativos tecnológicos, rastreabilidade, recondicionamento, indicadores ESG e desenvolvimento territorial em uma única operação.",
  keywords: [
    "infraestrutura circular",
    "gestão de ativos tecnológicos",
    "economia circular",
    "ESG",
    "rastreabilidade",
    "recondicionamento",
    "Persepolis Circular OS",
  ],
  openGraph: {
    title: "Persepolis Circular OS™",
    description:
      "Tecnologia não é resíduo. É infraestrutura. Conheça o sistema que conecta ativos, dados, ESG e territórios.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

