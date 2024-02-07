"use client";
import { ethers } from "ethers";
import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers5/react";
import { useState } from "react";

import { ZRF_TOKEN_ADDRESS, ZRF_CONTRACT_ABI } from "../../constants/tokenZRF";
import { POLYGON_CHAIN_ID } from "@/constants/polygonData";

function Balance() {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const [ZRFbalance, setZRFbalance] = useState("");

  const getBalance = async () => {
    if (!isConnected) throw Error("User disconnected");
    if (chainId !== POLYGON_CHAIN_ID) throw Error("Switch to polygon network");

    try {
      const ethersProvider = new ethers.providers.Web3Provider(
        walletProvider as ethers.providers.ExternalProvider
      );
      const signer = ethersProvider.getSigner();
      const ZRFContract = new ethers.Contract(
        ZRF_TOKEN_ADDRESS,
        ZRF_CONTRACT_ABI,
        signer
      );
      const ZRFbalance = await ZRFContract.balanceOf(String(address));
      const formatedBalance = ethers.utils.formatUnits(
        ZRFbalance as string,
        18
      );

      if (formatedBalance !== undefined) {
        setZRFbalance(formatedBalance);
      } else {
        setZRFbalance("Balance not obtained");
      }
    } catch (error) {
      console.log("Error trying to get the balance: ", error);
    }
  };

  return (
    <>
      <button onClick={getBalance}>Get User Balance</button>
      <span>{ZRFbalance}</span>
    </>
  );
}

export default Balance;
