import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageSelector } from "./_components/language-selector";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Ирек",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <main className="bg-gray-200 min-h-screen">
          <div className="absolute top-3 right-3">
            <LanguageSelector />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
