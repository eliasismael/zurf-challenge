import { API_URL } from "../../constants/api";

interface GetCoinPriceInUsdProps {
  id: "tether" | "zurf";
}

export const getCoinPriceInUsd = async ({ id }: GetCoinPriceInUsdProps) => {
  const coin = await fetch(API_URL + `/coins/${id}`).then((res) => res.json());

  console.log(coin.market_data.current_price.usd.toFixed(8));
  return coin.market_data.current_price.usd.toFixed(8);
};
