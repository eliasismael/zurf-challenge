import { GetPricesButton } from "./components/Buttons/GetPricesButton";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative flex flex-col gap-8 pt-12 items-center sm:px-40 h-[calc(100vh-5rem)] w-full dark:bg-gradient-to-br from-gray-700 to-gray-950 bg-gray-200">
        <Card />
        <GetPricesButton tokenId="zurf" />
      </main>
    </>
  );
}
