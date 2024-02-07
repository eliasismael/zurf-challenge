import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Web3ModalProvider } from "../context/Web3Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zurf Social Challenge",
  description: "Zurf Social Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3ModalProvider>{children}</Web3ModalProvider>
      </body>
    </html>
  );
}
