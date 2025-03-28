import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import ScrollBanner from "@/components/ScrollBanner";

import "./globals.css";
import "@esotericsoftware/spine-player/dist/spine-player.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "EVO-AI",
  description: "EVO-AI Agent is a revolutionary blockchain smart assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-[100dvh] antialiased`}>
        <div className="flex flex-col min-h-[100dvh]">
          <div className="flex flex-col min-h-[100dvh]">
            <Header />
            <main className="flex-1  flex flex-col  overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
