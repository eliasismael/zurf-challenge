"use client";
import { ReactNode } from "react";

interface ItemProps {
  item: string;
  value: string;
  liStyle?: string;
  addiotionalElements?: ReactNode;
}

export const Item: React.FC<ItemProps> = (props) => (
  <li
    className={
      props.liStyle ||
      "w-full flex items-center border-b border-gray-300 dark:border-gray-500 h-8"
    }
  >
    <span className="font-medium text-md">{props.item}</span>
    <span className="text-sm font-light ml-auto mr-0">{props.value}</span>

    {props.addiotionalElements}
  </li>
);
