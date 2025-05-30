import type { Metadata } from "next";
import localFont from "next/font/local"
import "@/app/styles/globals.css";

const regular = localFont({
  src: "./fonts/regular400.ttf",
  variable: "--regular",
  weight: "400",
});
const bold = localFont({
  src: "./fonts/bold700.ttf",
  variable: "--bold",
  weight: "700",
});
const mulish = localFont({
  src: "./fonts/mulish.ttf",
  variable: "--mulish"
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
      <body className={`${regular.variable} ${bold.variable} ${mulish.variable}`}>
        {children}
      </body>
    </html>
  );
}
