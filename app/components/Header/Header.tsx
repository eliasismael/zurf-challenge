"use client";
import { useDarkMode } from "@/app/hooks/useDarkMode";
import mainLogo from "../../../public/main-logo.jpg";
import Image from "next/image";
import { useWeb3ModalTheme } from "@web3modal/ethers5/react";
import { useEffect } from "react";

export const Header = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const { themeMode, themeVariables, setThemeMode, setThemeVariables } =
    useWeb3ModalTheme();

  useEffect(() => {
    setThemeMode(colorTheme as typeof themeMode);
    setThemeVariables({
      "--w3m-accent": `black`,
      "--w3m-color-mix": "rgb(82,237,236)",
      "--w3m-color-mix-strength": 40,
    });
  }, [colorTheme]);

  return (
    <header className="duration-300 sticky top-0 z-50 flex items-center gap-4 w-full h-20 bg-gradient-to-r from-white from-25% via-main/20 via-90% to-white dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 dark:text-main text-black px-10 border-b-2 border-main">
      <Image
        src={mainLogo}
        alt="Zurf"
        width={50}
        height={50}
        className="rounded-full"
      />

      <h1 className="text-2xl font-medium hidden sm:flex">
        Zurf Social Challenge
      </h1>
      <h2 className="opacity-80 text-gray-500 text-xs sm:text-xl text-center">
        Made by Elías Pereyra
      </h2>

      {/* Buttons */}
      <div
        id="connect-button__container"
        className="ml-auto rounded-full shadow-md shadow-main/50"
      >
        <w3m-button />
      </div>

      {colorTheme === "light" ? (
        <svg
          onClick={() => setTheme("light")}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ) : (
        <svg
          onClick={() => setTheme("dark")}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
      {/* 
      <Image
        src={menu}
        alt="menu"
        width={25}
        height={25}
        className="rounded-ful text-white dark:text-white"
      /> */}
    </header>
  );
};
