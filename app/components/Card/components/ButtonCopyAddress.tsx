interface ButtonCopyAddressProps {
  onClick: () => void;
}

export const ButtonCopyAddress: React.FC<ButtonCopyAddressProps> = (props) => (
  <button
    onClick={props.onClick}
    className="bg-gray-200 hover:bg-gray-100 active:bg-white dark:bg-gray-900 rounded-md px-1 py-0.5 ml-2 relative bottom-1 text-[10px] dark:hover:bg-gray-800 dark:active:bg-gray-700 transition text-black dark:text-white shadow-sm shadow-gray-500"
  >
    COPY
  </button>
);
