import Balance from "./components/Balance";
import CallCoinsMarkets from "./components/Buttons/CallCoinsMarkets";
import Table from "./components/Table/Table";

export default function Home() {
  return (
    <>
      <w3m-button />
      <Table />
      <CallCoinsMarkets />
      <Balance />
    </>
  );
}
