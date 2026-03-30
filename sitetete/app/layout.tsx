import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "../components/Cursor"; 
import SmoothScroll from "../components/SmoothScroll"; // Импортируем обертку скролла

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body className="min-h-full flex flex-col bg-[#020202] text-white">
        {/* Оборачиваем всё в SmoothScroll для мягкой прокрутки */}
        <SmoothScroll>
          <Cursor /> 
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
