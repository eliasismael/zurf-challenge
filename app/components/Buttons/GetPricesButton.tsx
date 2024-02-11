"use client";
import { useState } from "react";
import { Button } from "./Button";
import { getCoinPriceInUsd } from "@/app/helpers/getCoinPriceInUsd";

interface GetPricesButtonProps {
  tokenId: "zurf" | "tether";
}

export const GetPricesButton: React.FC<GetPricesButtonProps> = (props) => {
  const { tokenId } = props;
  const [isLoading, setIsLoading] = useState(false);

  const onClickHandle = async () => {
    setIsLoading(true);

    setTimeout(async () => {
      await getCoinPriceInUsd({ id: tokenId });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Button
      text="Get prices"
      textOnLoading={"Refreshing prices"}
      onClick={onClickHandle}
      isLoading={isLoading}
    />
  );
};
