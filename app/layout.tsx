import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LS Tecnologia",
  description: "Desenvolvimento de APIs de alta performance, integrações com ERPs como WinThor e Consinco, dashboards personalizados e soluções de automação para otimizar seus processos.",
  openGraph: {
    title: "LS Tecnologia - Soluções Robustas",
    description: "Desenvolvimento de APIs de alta performance, integrações com ERPs como WinThor e Consinco, dashboards personalizados e soluções de automação para otimizar seus processos.",
    url: "https://lstecnologia.com.br",
    siteName: "LS Tecnologia",
    images: [
      {
        url: "/LStecnologiaOG.png",
        width: 1200,
        height: 630,
        alt: "LS Tecnologia - Desenvolvimento Backend",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LS Tecnologia - Entregando software de qualidade para o seu negócio!",
    description: "Desenvolvimento de APIs de alta performance, integrações com ERPs como WinThor e Consinco, dashboards personalizados e soluções de automação para otimizar seus processos.",
    images: ["/LStecnologiaOG.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
