import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import BacksoundPlayer from "@/components/BacksoundPlayer";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fredoka",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Simulasi Pemilihan OSIM",
  description: "Belajar Berdemokrasi Melalui Syura dan Pemilihan OSIM",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${fredoka.variable} ${nunito.variable}`}>
      <body className="bg-bg text-ink">
        {children}
        <BacksoundPlayer />
      </body>
    </html>
  );
}