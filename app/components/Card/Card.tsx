"use client";
// Hooks
import { useBalance } from "@/app/hooks/useBalance";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { useContext, useEffect, useState } from "react";
// Components
import { Item } from "./components/Item";
import { ButtonCopyAddress } from "./components/ButtonCopyAddress";
import {
  ITokenPriceContext,
  TokenPriceContext,
} from "@/app/context/TokenPrice";
import { CHAINS_DATA } from "@/constants/chainsData";
import { Spinner } from "../Spinner/Spinner";

export const Card: React.FC = (): JSX.Element => {
  const { tokenPriceInUsd } = useContext(
    TokenPriceContext
  ) as ITokenPriceContext;

  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { tokenBalance } = useBalance({ token: "ZRF" });

  const [tokenTotalValue, setTokenTotalValue] = useState<number | string>(0);

  const copyAddress = () => {
    if (address) window.navigator.clipboard.writeText(address);
  };

  const ITEMS = [
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

  useEffect(() => {
    const value = (Number(tokenBalance) * Number(tokenPriceInUsd)).toFixed(2);
    setTokenTotalValue(value);
  }, [tokenPriceInUsd, tokenBalance]);

  const [isAddress, setIsAddress] = useState<boolean| undefined>(undefined);
  useEffect(() => {
    if (address) {
      setIsAddress(true);
    } else {
      setIsAddress(false)
    }
  }, []);

  if (isAddress === undefined) return <Spinner size="w-10 h-10" />;

  if (!isAddress)
    return <p className="text-3xl text-gray-500">Connect your wallet</p>;
  // return (
  // <div className="animate-pulse flex items-center justify-center w-80 h-80 duration-300 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-xl shadow-gray-300 dark:shadow-gray-900 ">
  //   <Spinner size="w-16 h-16" />;
  // </div>
  // );

  let stopMapping = false;

  return (
    <div className="duration-300 bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-xl shadow-gray-300 dark:shadow-gray-900 w-80">
      <ul className="flex flex-col items-start gap-2 text-gray-900 dark:text-white">
        {ITEMS.map((item, index) => {
          if (stopMapping) return null;
          const optionalProps =
            item.item === "Address:"
              ? {
                  liStyle:
                    "relative w-full flex items-baseline h-8 border-b border-gray-300 dark:border-gray-500",
                  additionalElements: (
                    <ButtonCopyAddress onClick={copyAddress} />
                  ),
                }
              : null;

          if (chainId !== 137 && index === 2) {
            stopMapping = true;
            return (
              <span className="text-gray-400 dark:text-gray-500 text-md text-center my-2 mx-auto">
                Switch to Polygon to see $ZRF data
              </span>
            );
          }

          return (
            <Item
              key={item.item}
              item={item.item}
              value={item.value}
              liStyle={optionalProps?.liStyle}
              addiotionalElements={optionalProps?.additionalElements}
            />
          );
        })}
      </ul>
    </div>
  );
};
