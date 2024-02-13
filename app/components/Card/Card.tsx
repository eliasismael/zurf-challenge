"use client";
// Components
import { Item } from "./components/Item";
import { Spinner } from "../Spinner/Spinner";
// Constants
import { POLYGON_CHAIN_ID } from "@/constants/polygonData";
import { useCardComponent } from "./hook/useCardComponet";

export const Card: React.FC = () => {
  // All logic of the component
  const { isAddress, ITEMS, chainId, optionalProps } = useCardComponent();
  let { stopMapping } = useCardComponent();

  if (isAddress === undefined) {
    return <Spinner size="w-10 h-10" />;
  }

  if (isAddress === false) {
    return <p className="text-3xl text-gray-500">Connect your wallet</p>;
  }

  return (
    <div className="duration-300 bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-xl shadow-gray-300 dark:shadow-gray-900 w-80">
      <ul className="flex flex-col items-start gap-2 text-gray-900 dark:text-white">
        {ITEMS.map((item) => {
          if (stopMapping) return null;

          // When user is connected but in other network
          let stopShowingData =
            chainId !== POLYGON_CHAIN_ID && item.item === "ZRF Token Amount:";

          if (stopShowingData) {
            stopMapping = true;
            return (
              <span
                key={"switch-network-message"}
                className="text-gray-400 dark:text-gray-500 text-md text-center my-2 mx-auto"
              >
                Switch to Polygon to see $ZRF data
              </span>
            );
          }

          // To show the button to copy address
          let isAddress = item.item === "Address:";

          return (
            <Item
              key={item.item}
              item={item.item}
              value={item.value}
              liStyle={isAddress ? optionalProps?.liStyle : null}
              addiotionalElements={
                isAddress ? optionalProps?.additionalElements : null
              }
            />
          );
        })}
      </ul>
    </div>
  );
};
