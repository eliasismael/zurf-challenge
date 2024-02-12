import { GetPricesButton } from "./components/Buttons/GetPricesButton";
import { Card } from "./components/Card/Card";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative flex flex-col gap-8 items-center justify-center sm:px-40 h-[calc(100vh-5rem-6rem)] w-full dark:bg-gradient-to-br from-gray-700 to-gray-950 bg-gray-200">
        <Card />
        <GetPricesButton tokenId="zurf" />
      </main>

      <Footer />
    </>
  );
}
