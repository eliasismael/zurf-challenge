import React from "react";

function Table() {
  return (
    <section className="grid h-screen w-full place-items-center bg-gray-300">
      <div className="flex w-[90%] flex-col gap-4 rounded-xl bg-gray-100 p-2">
        <header className="flex h-12 w-full items-center justify-between rounded-md bg-white p-2 shadow-md shadow-gray-300">
          <h1 className="text-xl font-semibold">Activos</h1>
          {/* <!-- Interaction --> */}
          <div className="flex h-full items-center gap-2 bg-white">
            <button className="h-8 w-8 rounded-lg border border-gray-200 bg-gray-50 font-medium text-gray-700 shadow-sm shadow-gray-200">
              +
            </button>

            <label
              htmlFor="Toggle4"
              className="relative flex cursor-pointer items-center overflow-hidden rounded-2xl bg-gray-300 px-2 py-[6px] shadow-sm shadow-gray-500"
            >
              <input id="Toggle4" type="checkbox" className="peer hidden" />
              <span className="py- z-10 rounded-lg px-2 text-sm font-medium text-gray-800 duration-300 peer-checked:text-gray-500">
                Por plataforma
              </span>
              <span className="py- z-10 rounded-lg px-2 text-sm font-medium text-gray-400 duration-300 peer-checked:text-gray-800">
                Por puesto
              </span>

              <span className="absolute h-[26px] w-[114px] rounded-full bg-white duration-500 peer-checked:w-[90px] peer-checked:translate-x-[108px] peer-checked:rounded-l-full peer-checked:bg-white" />
            </label>

            <button className="h-8 w-8 rounded-lg border border-gray-200 bg-gray-50 font-medium text-gray-700 shadow-sm shadow-gray-200">
              ...
            </button>
          </div>
        </header>

        <main className="h-full w-full rounded-xl border border-gray-200 bg-white p-2 shadow-md shadow-gray-300">
          <header className="flex h-10 items-center gap-3 px-2">
            <span className="h-8 w-8 bg-red-200">Logo</span>
            <div className="flex items-center gap-1">
              <h2 className="text-lg font-semibold">Wallet</h2>
              <span className="text-xs font-medium">- 96,94 US$</span>
            </div>

            <span className="rounded-xl bg-slate-300 px-2 py-0.5 text-xs font-medium">
              100%
            </span>
          </header>

          {/* <!-- Table --> */}
          <table className="w-full">
            <thead className="text-left">
              <tr>
                <th className="!font-semibold">Assets</th>
                <th>Price</th>
                <th>Balance</th>
                <th>Value</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <div className="flex w-full">
                    <span>LOGO</span>
                    <div className="ml-2 flex flex-col">
                      <span className="font-medium"> USD Coin </span>
                      <span className="text-xs"> img Polygon </span>
                    </div>
                  </div>
                </td>
                <td>$30.3</td>
                <td>0.58</td>
                <td>
                  <div className="flex flex-col">
                    <span className="font-medium">43,53 usd</span>
                    <span className="text-xs font-medium text-green-400">
                      {" "}
                      +34%
                    </span>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="flex w-full">
                    <span>LOGO</span>
                    <div className="ml-2 flex flex-col">
                      <span className="font-medium"> USD Coin </span>
                      <span className="text-xs"> img Polygon </span>
                    </div>
                  </div>
                </td>
                <td>$30.3</td>
                <td>0.58</td>
                <td>
                  <div className="flex flex-col">
                    <span className="font-medium">43,53 usd</span>
                    <span className="text-xs font-medium text-green-400">
                      {" "}
                      +34%
                    </span>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="flex w-full">
                    <span>LOGO</span>
                    <div className="ml-2 flex flex-col">
                      <span className="font-medium"> USD Coin </span>
                      <span className="text-xs"> img Polygon </span>
                    </div>
                  </div>
                </td>
                <td>$30.3</td>
                <td>0.58</td>
                <td>
                  <div className="flex flex-col">
                    <span className="font-medium">43,53 usd</span>
                    <span className="text-xs font-medium text-green-400">
                      {" "}
                      +34%
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </section>
  );
}

export default Table;
