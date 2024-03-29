import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import bg from "@/public/p1.jpg"
type OverflowX = "visible" | "hidden" | "scroll" | "auto" | "inherit" | "initial" | "unset";

const styling = {
    backgroundImage: `url('${bg.src}')`,
    backgroundSize: 'cover',
    overflowX: "auto" as OverflowX,  // Ensure it's of type OverflowX



}
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WEATHER  App",
  description: "WEATHER app  by next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={styling}>{children}</body>
    </html>
  );
}
