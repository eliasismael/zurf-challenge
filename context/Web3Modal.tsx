"use client";
import { ReactNode } from "react";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";

const projectId = "0c44935e2f64a460723e5a4223b6ce06";

const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

const polygon = {
  chainId: 137,
  name: "Polygon Mainnet",
  currency: "MATIC",
  explorerUrl: "https://polygonscan.com/",
  rpcUrl: "https://polygon-rpc.com/",
};

const metadata = {
  name: "Zurf Challenge",
  description: "Challenge for Zurf Social",
  url: "http://localhost:3000",
  icons: ["https://avatars.mywebsite.com/"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet, polygon],
  projectId,
  enableAnalytics: true,
});

export function Web3ModalProvider({ children }: { children: ReactNode }) {
  return children;
}
