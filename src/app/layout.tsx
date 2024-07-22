import type { Metadata } from "next";
import { Inter, Merriweather_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merriweather = Merriweather_Sans({
  subsets: ["latin"],
  variable: "--font-marriweather",
});

export const metadata: Metadata = {
  title: "Agidesk Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`antialiased ${inter.variable} ${merriweather.variable}`}
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
