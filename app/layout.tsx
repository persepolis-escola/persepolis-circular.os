import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Persepolis Circular OS",
  description:
    "Infraestrutura circular para transformar ativos tecnológicos em aprendizagem, trabalho e desenvolvimento territorial.",
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
