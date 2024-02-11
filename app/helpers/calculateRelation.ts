interface CalculateRelationsProps {
  usdtAmount: number | string;
  usdtPriceInUsd: number | string;
  tokenPriceInUsd: number | string;
}

export const calculateRelation = (props: CalculateRelationsProps) => {
  const { usdtAmount, usdtPriceInUsd, tokenPriceInUsd } = props;

  const usdtNetValue = Number(usdtAmount) * Number(usdtPriceInUsd);
  const relation = usdtNetValue / Number(tokenPriceInUsd);
  return relation;
};
