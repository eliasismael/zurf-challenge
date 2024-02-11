"use client";
import { getCoinPriceInUsd } from "@/app/helpers/getCoinPriceInUsd";
import { useBalance } from "@/app/hooks/useBalance";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { useEffect, useState } from "react";
import { Item } from "./components/Item";
import { ButtonCopyAddress } from "./components/ButtonCopyAddress";

export const Card: React.FC = () => {
  const { address, chainId } = useWeb3ModalAccount();
  const { tokenBalance } = useBalance({ token: "ZRF" });

  const [tokenPriceInUsd, setTokenPriceInUsd] = useState("");
  const [tokenTotalValue, setTokenTotalValue] = useState<number | string>(0);

  const copyAddress = () => {
    if (address) {
      window.navigator.clipboard.writeText(address);
    }
  };

  useEffect(() => {
    const getPrice = async () => {
      const zrfPrice = await getCoinPriceInUsd({ id: "zurf" });
      setTokenPriceInUsd(zrfPrice);
    };

    getPrice();

    setTokenTotalValue(() => {
      const value = Number(tokenBalance) * Number(tokenPriceInUsd);
      return value.toFixed(2);
    });
  }, [address]);

  const ITEMS = [
    {
      item: "Current Network:",
      value: chainId === 137 ? "Polygon Mainnet" : "Unknown",
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

  return (
    <div className=" bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-lg shadow-gray-300 dark:shadow-gray-900">
      <ul className="flex flex-col gap-2 text-gray-900 dark:text-white">
        {ITEMS.map((item) => {
          const optionalProps =
            item.item === "Address:"
              ? {
                  liStyle: "relative w-full border flex items-center",
                  additionalElements: (
                    <ButtonCopyAddress onClick={copyAddress} />
                  ),
                }
              : null;

          return (
            <Item
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
