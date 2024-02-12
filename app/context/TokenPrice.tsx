"use client";
import { ReactNode, useState, createContext, useEffect } from "react";
import { getCoinPriceInUsd } from "../helpers/getCoinPriceInUsd";

export interface ITokenPriceContext {
  tokenPriceInUsd: string;
  setTokenPriceInUsd: React.Dispatch<React.SetStateAction<string>>;
}

export interface ITokenPriceContextProps {
  children: ReactNode;
}

export const TokenPriceContext = createContext<ITokenPriceContext | undefined>(
  undefined
);

export const TokenPriceContextProvider = (props: ITokenPriceContextProps) => {
  const [tokenPriceInUsd, setTokenPriceInUsd] = useState("");

  useEffect(() => {
    const getPrice = async () => {
      const zrfPrice = await getCoinPriceInUsd({ id: "zurf" });
      setTokenPriceInUsd(zrfPrice);
    };

    getPrice();
  }, []);

  const value = { tokenPriceInUsd, setTokenPriceInUsd };

  return (
    <TokenPriceContext.Provider value={value}>
      {props.children}
    </TokenPriceContext.Provider>
  );
};
