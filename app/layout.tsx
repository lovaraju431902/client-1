import type { Metadata } from "next";

import "./globals.css";
import { inter, fraunces } from '@/lib/fonts'


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generatedy create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
