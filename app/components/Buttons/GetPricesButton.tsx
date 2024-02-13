"use client";
// Hooks
import { useContext, useState } from "react";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
// Components
import { Button } from "./components/Button";
// Helpers
import { getCoinPriceInUsd } from "@/app/helpers/getCoinPriceInUsd";
// Context
import {
  ITokenPriceContext,
  TokenPriceContext,
} from "@/app/context/TokenPrice";
// Constants
import { POLYGON_CHAIN_ID } from "@/constants/polygonData";

interface GetPricesButtonProps {
  tokenId: "zurf" | "tether";
}

export const GetPricesButton: React.FC<GetPricesButtonProps> = (props) => {
  const { tokenId } = props;
  const { address, chainId } = useWeb3ModalAccount();

  const { setTokenPriceInUsd } = useContext(
    TokenPriceContext
  ) as ITokenPriceContext;

  const [isLoading, setIsLoading] = useState(false);

  const onClickHandle = async () => {
    setIsLoading(true);

    setTimeout(async () => {
      const tokenPrice = await getCoinPriceInUsd({ id: tokenId });
      setTokenPriceInUsd(tokenPrice);
      setIsLoading(false);
    }, 1000);
  };

  if (!address || chainId !== POLYGON_CHAIN_ID) return;

  return (
    <Button
      text="Get prices"
      textOnLoading={"Refreshing prices"}
      onClick={onClickHandle}
      isLoading={isLoading}
    />
  );
};
