import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { Web3ModalProvider } from "../context/Web3Modal";
import { TokenPriceContextProvider } from "./context/TokenPrice";

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
    <html lang="es">
      <body className={roboto.className}>
        <TokenPriceContextProvider>
          <Web3ModalProvider>{children}</Web3ModalProvider>
        </TokenPriceContextProvider>
      </body>
    </html>
  );
}
