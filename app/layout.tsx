import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/header";
import { App } from './App';
import dynamic from 'next/dynamic';

const YMapLoader = dynamic(() => import('./_components/maploader'), { ssr: false });

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Марат",
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
        <App>
          <main className="bg-gray-200 min-h-screen">
            <div className="sticky top-0 z-50">
              <Header />
            </div>
            <div className="px-3">
              {children}
              <YMapLoader />
            </div>
          </main>
        </App>
      </body>
    </html>
  );
}
