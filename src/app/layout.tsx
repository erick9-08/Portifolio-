import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Erick Sousa Oliveira — Desenvolvedor Back-end",
  description:
    "Portfólio de Erick Sousa Oliveira. Projetos em Java, Python e desenvolvimento web.",
  icons: { icon: "/icon.svg" },
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
