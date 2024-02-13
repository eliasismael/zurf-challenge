"use client";
// Hooks
import { useContext, useState, useEffect } from "react";
import { useBalance } from "@/app/hooks/useBalance";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
// Context
import {
  TokenPriceContext,
  ITokenPriceContext,
} from "@/app/context/TokenPrice";
// Constants
import { CHAINS_DATA } from "@/constants/chainsData";
// Components
import { ButtonCopyAddress } from "../components/ButtonCopyAddress";

export interface IItem {
  item: string;
  value: string;
}

export const useCardComponent = () => {
  const { tokenPriceInUsd } = useContext(
    TokenPriceContext
  ) as ITokenPriceContext;

  const { address, chainId } = useWeb3ModalAccount();
  const { tokenBalance } = useBalance({ token: "ZRF" });
  // To handle loading view
  const [isAddress, setIsAddress] = useState<boolean | undefined>(undefined);
  const [tokenTotalValue, setTokenTotalValue] = useState<number | string>(0);

  const copyAddress = () =>
    address && window.navigator.clipboard.writeText(address);

  const ITEMS: IItem[] = [
    {
      item: "Current Network:",
      value: CHAINS_DATA[chainId as keyof typeof CHAINS_DATA],
    },
    {
      item: "Address:",
      value: `${address?.slice(0, 6) + "..." + address?.slice(-4)}`,
    },
    {
      item: "ZRF Token Amount:",
      value: String(Number(tokenBalance).toFixed(2)),
    },
    {
      item: "ZRF Token Price:",
      value: `USD ${tokenPriceInUsd}`,
    },
    {
      item: "ZRF Total Value:",
      value: `USD ${tokenTotalValue}`,
    },
  ];

  // Refreshing token price
  useEffect(() => {
    const value = (Number(tokenBalance) * Number(tokenPriceInUsd)).toFixed(2);
    setTokenTotalValue(value);
  }, [tokenPriceInUsd, tokenBalance]);

  // Handling load view
  useEffect(() => {
    if (address) setIsAddress(true);
    else setIsAddress(false);
  }, [address]);

  const optionalProps = {
    liStyle:
      "relative w-full flex items-baseline h-8 border-b border-gray-300 dark:border-gray-500",
    additionalElements: <ButtonCopyAddress onClick={copyAddress} />,
  };

  let stopMapping = false;

  return { isAddress, copyAddress, ITEMS, chainId, optionalProps, stopMapping };
};
