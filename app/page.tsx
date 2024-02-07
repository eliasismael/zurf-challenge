import Balance from "./components/Balance";
import CallCoinsMarkets from "./components/Buttons/CallCoinsMarkets";
import { Header } from "./components/Header/Header";
import Table from "./components/Table/Table";

export default function Home() {
  return (
    <>
      <Header />
      <Table />
      <CallCoinsMarkets />
      <Balance />
    </>
  );
}
