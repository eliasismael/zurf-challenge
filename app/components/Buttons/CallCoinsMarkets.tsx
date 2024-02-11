"use client";
import { useBalance } from "@/app/hooks/useBalance";
import { useFetch } from "@/app/hooks/useFetch";
import { useState } from "react";

function CallCoinsMarkets() {
  // const { getAllCoins } = useFetch();

  const ammountOfZRF = useBalance({ token: "ZRF" });
  const ammountOfUSDT = useBalance({ token: "USDT" });

  console.log("Cuantos usdt: ", ammountOfUSDT, "Cuantos ZRF: ", ammountOfZRF);

  return (
    <></>
    // <div className="w-2/5 flex flex-col items-center gap-4 rounded-lg bg-gray-500 mx-auto my-4 p-4">
    //   <h1 className="text-2xl text-white font-medium">API</h1>
    //   <button
    //     className="bg-blue-200 px-4 py-2 hover:bg-blue-100 transition rounded-full"
    //     onClick={() => getAllCoins()}
    //   >
    //     CallCoinsMarkets
    //   </button>

    //   <button
    //     className="bg-blue-200 px-4 py-2 hover:bg-blue-100 transition rounded-full"
    //     onClick={onClickHandle}
    //   >
    //     Get values
    //   </button>

    //   <button
    //     className="bg-blue-200 px-4 py-2 hover:bg-blue-100 transition rounded-full"
    //     onClick={calcRelation}
    //   >
    //     Calculate relation
    //   </button>

    //   <span>btc {btcPriceInUsd}</span>
    //   <span>usdt {tetherPriceInUsd}</span>
    //   <span>zurf {zurfPriceInUsd}</span>
    //   <span>Tengo {relation} zurfs</span>
    // </div>
  );
}

export default CallCoinsMarkets;
