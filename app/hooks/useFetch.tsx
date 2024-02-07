import { API_URL } from "@/constants/api";

export const useFetch = () => {
  const getAllCoins = () => {
    fetch(API_URL + "/coins/markets?vs_currency=usd")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("Eroor al obtener datos: ", error));
  };

  const getCoin = async (id: string) => {
    const coin = await fetch(API_URL + `/coins/${id}`).then((response) =>
      response.json()
    );

    return coin.market_data.current_price.usd.toFixed(8);
  };

  return { getAllCoins, getCoin };
};
