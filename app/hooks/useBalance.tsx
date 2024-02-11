"use client";
// Library
import { ethers } from "ethers";
// Hooks
import { useEffect, useState } from "react";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers5/react";
// Constants
import { POLYGON_CHAIN_ID } from "@/constants/polygonData";
import { ZRF_TOKEN_ADDRESS, ZRF_CONTRACT_ABI } from "@/constants/tokenZRF";
import { USDT_CONTRACT_ABI, USDT_TOKEN_ADDRESS } from "@/constants/tokenUSDT";

interface UseBalanceArgs {
  token: "ZRF" | "USDT";
}

type ExtProvider = ethers.providers.ExternalProvider;

export const useBalance = (args: UseBalanceArgs) => {
  const { token } = args;

  const { address: userAddres, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [tokenBalance, setTokenbalance] = useState("");

  const getBalance = async () => {
    if (!isConnected) throw Error("User disconnected");
    if (chainId !== POLYGON_CHAIN_ID) throw Error("Switch to polygon network");

    const W3P = ethers.providers.Web3Provider;

    try {
      const ethersProvider = new W3P(walletProvider as ExtProvider);
      const signer = ethersProvider.getSigner();

      const contractData = {
        address: token === "ZRF" ? ZRF_TOKEN_ADDRESS : USDT_TOKEN_ADDRESS,
        abi: token === "ZRF" ? ZRF_CONTRACT_ABI : USDT_CONTRACT_ABI,
      };

      const { address, abi } = contractData;

      const tokenContract = new ethers.Contract(address, abi, signer);
      const tokenBalance = await tokenContract.balanceOf(String(userAddres));
      const formatedBalance = ethers.utils.formatUnits(tokenBalance, 18);

      if (formatedBalance !== undefined) {
        setTokenbalance(formatedBalance);
      } else {
        setTokenbalance("Balance not obtained");
      }
    } catch (error) {
      console.log("Error trying to get the balance: ", error);
    }
  };

  useEffect(() => {
    getBalance();
  }, []);

  return { tokenBalance };
};
