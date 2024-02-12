"use client";
// Hooks
import { useBalance } from "@/app/hooks/useBalance";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { useContext, useEffect, useState } from "react";
// Components
import { Item } from "./components/Item";
import { ButtonCopyAddress } from "./components/ButtonCopyAddress";
import { Spinner } from "../Spinner/Spinner";
import {
  ITokenPriceContext,
  TokenPriceContext,
} from "@/app/context/TokenPrice";

export const Card: React.FC = () => {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { tokenBalance } = useBalance({ token: "ZRF" });
  const { tokenPriceInUsd } = useContext(
    TokenPriceContext
  ) as ITokenPriceContext;
  const [tokenTotalValue, setTokenTotalValue] = useState<number | string>(0);

  const copyAddress = () => {
    if (address) {
      window.navigator.clipboard.writeText(address);
    }
  };

  useEffect(() => {
    const value = (Number(tokenBalance) * Number(tokenPriceInUsd)).toFixed(2);
    setTokenTotalValue(value);
  }, [tokenPriceInUsd, tokenBalance]);

  const currentNetwork = chainId === 137 ? "Polygon Mainnet" : "Unknown";

  const ITEMS = [
    {
      item: "Current Network:",
      value: currentNetwork,
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

  if (!address)
    return (
      <div className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-xl p-4 shadow-xl shadow-gray-300 dark:shadow-gray-900 w-80 h-60 grid place-content-center">
        <ul className="flex flex-col items-start gap-2 text-gray-900 dark:text-white">
          {ITEMS.map((item) => (
            <Item key={item.item} item={item.item} value="" />
          ))}
        </ul>
        {/* <Spinner size="w-10 h-10" />; */}
      </div>
    );

  return (
    <div className="duration-300 bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-xl shadow-gray-300 dark:shadow-gray-900 w-80">
      <ul className="flex flex-col items-start gap-2 text-gray-900 dark:text-white">
        {ITEMS.map((item) => {
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
