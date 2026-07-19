import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Persepolis Circular OS™ | Direito ao Futuro",
  description:
    "Infraestrutura circular para transformar ativos tecnológicos em aprendizagem, trabalho e desenvolvimento territorial.",
  keywords: [
    "infraestrutura circular",
    "economia circular",
    "ESG",
    "ativos tecnológicos",
    "recondicionamento",
    "inclusão produtiva",
    "Persepolis",
  ],
  openGraph: {
    title: "Persepolis Circular OS™",
    description:
      "O futuro é uma infraestrutura. Transformamos ativos tecnológicos em novos ciclos de aprendizagem, trabalho e desenvolvimento territorial.",
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

