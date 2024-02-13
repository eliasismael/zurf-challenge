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

type ExternalProv = ethers.providers.ExternalProvider;

export const useBalance = ({ token }: UseBalanceArgs) => {
  const { address: userAddres, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [tokenBalance, setTokenbalance] = useState("");

  const { Contract, providers, utils } = ethers;
  const W3P = providers.Web3Provider;

  const [contractAddress, abi] =
    token === "ZRF"
      ? [ZRF_TOKEN_ADDRESS, ZRF_CONTRACT_ABI]
      : [USDT_TOKEN_ADDRESS, USDT_CONTRACT_ABI];

  const getBalance = async () => {
    if (chainId !== POLYGON_CHAIN_ID) return;

    try {
      const ethersProvider = new W3P(walletProvider as ExternalProv);
      const signer = ethersProvider.getSigner();

      const tokenContract = new Contract(contractAddress, abi, signer);
      const tokenBalance = await tokenContract.balanceOf(userAddres);
      const formatedBalance = utils.formatUnits(tokenBalance, 18);

      setTokenbalance(() => formatedBalance || "Balance not obtained");
    } catch (error) {
      console.log("Error trying to get the balance: ", error);
    }
  };

  useEffect(() => {
    if (isConnected) getBalance();
  }, [getBalance]);

  return { tokenBalance };
};
