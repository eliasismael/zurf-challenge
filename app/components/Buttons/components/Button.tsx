// Generic Button. This is just a design without functionality, it must recieve one
import { Spinner } from "../../Spinner/Spinner";

interface ButtonProps {
  text: string;
  textOnLoading: string;
  onClick: () => void | Promise<void>;
  isLoading: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { text, textOnLoading, onClick, isLoading } = props;

  const onClickHandle = async () => await onClick();

  return (
    <button
      onClick={onClickHandle}
      className={`${
        isLoading
          ? "bg-gray-100 dark:bg-gray-700"
          : "bg-gray-200 dark:bg-gray-800"
      } px-6 py-2 rounded-full text-black dark:text-white font-medium hover:bg-gray-100 hover:dark:bg-gray-700  shadow-md shadow-gray-500 dark:shadow-gray-900 duration-300
      `}
    >
      <span className="flex items-center gap-2">
        <span>{isLoading ? textOnLoading : text}</span>
        {isLoading && <Spinner size="w-6 h-6" />}
      </span>
    </button>
  );
};
