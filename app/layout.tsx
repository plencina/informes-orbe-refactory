import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Informes Orbe",
  description: `PÁGINA DE INFORMACIONES POLICIALES & JUDICIALES
Desde 1970 Periodismo profesional
GUALEGUAYCHÚ * ARGENTINA`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
