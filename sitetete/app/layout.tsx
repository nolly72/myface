import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "../components/Cursor"; // Импортируем наш крутой курсор

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Настрой заголовок сайта здесь
export const metadata: Metadata = {
  title: "Портфолио Разработчика", 
  description: "Создаю современные и динамичные сайты",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#020202]">
        {/* Курсор будет виден на всех страницах поверх всего контента */}
        <Cursor /> 
        {children}
      </body>
    </html>
  );
}
