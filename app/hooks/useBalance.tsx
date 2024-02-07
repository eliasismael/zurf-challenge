import { useEffect, useState } from "react";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers5/react";
import { POLYGON_CHAIN_ID } from "@/constants/polygonData";
import { ethers } from "ethers";
import { ZRF_TOKEN_ADDRESS, ZRF_CONTRACT_ABI } from "@/constants/tokenZRF";
import { USDT_CONTRACT_ABI, USDT_TOKEN_ADDRESS } from "@/constants/tokenUSDT";

interface UseBalanceArgs {
  token: "ZRF" | "USDT";
}

export const useBalance = (args: UseBalanceArgs) => {
  const { token } = args;

  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [tokenBalance, setTokenbalance] = useState("");

  const getBalance = async () => {
    if (!isConnected) throw Error("User disconnected");
    if (chainId !== POLYGON_CHAIN_ID) throw Error("Switch to polygon network");

    try {
      const ethersProvider = new ethers.providers.Web3Provider(
        walletProvider as ethers.providers.ExternalProvider
      );
      const signer = ethersProvider.getSigner();

      const contractData =
        token === "ZRF"
          ? {
              address: ZRF_TOKEN_ADDRESS,
              abi: ZRF_CONTRACT_ABI,
            }
          : { address: USDT_TOKEN_ADDRESS, abi: USDT_CONTRACT_ABI };

      const tokenContract = new ethers.Contract(
        contractData.address,
        contractData.abi,
        signer
      );
      const tokenBalance = await tokenContract.balanceOf(String(address));
      const formatedBalance = ethers.utils.formatUnits(
        tokenBalance as string,
        18
      );

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
