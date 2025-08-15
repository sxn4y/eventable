import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import dynamic from "next/dynamic";

const titleFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--title-font",
})

const paraFont = Inter({
  subsets: ["latin"],
  variable: "--para-font"
})

export const metadata: Metadata = {
  title: "EVENTABLE",
  description: "Event planning made ez.",
  icons: {
    icon: `@/assets/favicon.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${paraFont.variable} ${titleFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
