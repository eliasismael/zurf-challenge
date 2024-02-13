import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { Web3ModalProvider } from "../context/Web3Modal";
import { TokenPriceContextProvider } from "./context/TokenPrice";
import { Suspense } from "react";
import Loading from "./loading";

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
          <Web3ModalProvider>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </Web3ModalProvider>
        </TokenPriceContextProvider>
      </body>
    </html>
  );
}
