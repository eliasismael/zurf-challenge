"use client";
import { useContext, useState } from "react";
import { Button } from "./components/Button";
import { getCoinPriceInUsd } from "@/app/helpers/getCoinPriceInUsd";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import {
  ITokenPriceContext,
  TokenPriceContext,
} from "@/app/context/TokenPrice";

interface GetPricesButtonProps {
  tokenId: "zurf" | "tether";
}

export const GetPricesButton: React.FC<GetPricesButtonProps> = (props) => {
  const { tokenId } = props;
  const { address } = useWeb3ModalAccount();

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

  if (!address) return;

  return (
    <Button
      text="Get prices"
      textOnLoading={"Refreshing prices"}
      onClick={onClickHandle}
      isLoading={isLoading}
    />
  );
};
