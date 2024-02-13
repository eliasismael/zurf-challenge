import { Spinner } from "./components/Spinner/Spinner";

function Loading() {
  return (
    <div className="animate-pulse flex items-center justify-center w-80 h-80 duration-300 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-xl shadow-gray-300 dark:shadow-gray-900 ">
      <Spinner size="w-16 h-16" />;
    </div>
  );
}

export default Loading;
