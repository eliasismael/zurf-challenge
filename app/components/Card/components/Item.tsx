import { ReactNode } from "react";

interface ItemProps {
  item: string;
  value: string;
  liStyle?: string;
  addiotionalElements?: ReactNode;
}

export const Item: React.FC<ItemProps> = (props) => (
  <li className={props.liStyle}>
    <span className="font-medium text-xl mr-1">{props.item}</span>
    <span className="text-sm font-bold">{props.value}</span>

    {props.addiotionalElements}
  </li>
);
