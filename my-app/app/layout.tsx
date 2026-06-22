import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Knicks Campeão 2026",
  description: "A cobertura completa do tricampeonato do New York Knicks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-black font-sans">
        {/* Menu usando Next Link conforme solicitado */}
        <header className="w-full max-w-4xl mx-auto px-6 py-6 flex flex-wrap justify-between items-center border-b border-zinc-200 dark:border-zinc-800">
          <div className="font-bold text-xl text-orange-500 tracking-wider">
            NY KNICKS 2026
          </div>
          <nav className="flex gap-6">
            <Link href="/" className="font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">
              Início
            </Link>
            <Link href="/jogos" className="font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">
              Os 5 Jogos
            </Link>
            <Link href="/jogadores" className="font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">
              Destaques
            </Link>
            <Link href="/mvp-momento" className="font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">
              O Momento do Título
            </Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
