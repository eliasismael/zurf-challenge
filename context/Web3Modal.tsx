"use client";
import { ReactNode } from "react";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";

// 1. Get projectId
const projectId = "0c44935e2f64a460723e5a4223b6ce06";

// 2. Set chains
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

// 3. Create modal
const metadata = {
  name: "Zurf Challenge",
  description: "Challenge for Zurf Social",
  url: "http://localhost:3000", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

// const themeMode = localStorage.theme || "dark";
createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet, polygon],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  // themeMode: "dark",
  // themeVariables: {
  //   "--w3m-accent": "black",
  //   "--w3m-color-mix": "rgb(82,237,236)",
  //   "--w3m-color-mix-strength": 40,
  // },
});

export function Web3ModalProvider({ children }: { children: ReactNode }) {
  return children;
}
