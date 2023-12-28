import type { Metadata } from "next";
import { Inter } from "next/font/google";

import BottomNavigationBar from "@/components/bottomNavigationBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erick LLerenas",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className + " bg-gray-100"}>
        {children}
        <BottomNavigationBar />
      </body>
    </html>
  );
}
