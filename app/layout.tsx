import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { Web3ModalProvider } from "../context/Web3Modal";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

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
      <body className={roboto.className}>
        <Web3ModalProvider>{children}</Web3ModalProvider>
      </body>
    </html>
  );
}
