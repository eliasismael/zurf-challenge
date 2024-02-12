interface SpinnerProps {
  size: `w-${number} h-${number}`;
}

export const Spinner: React.FC<SpinnerProps> = (props) => (
  <span className="flex justify-center">
    <span
      className={`border-4 border-gray-500 border-t-4 border-t-main rounded-full animate-spin ${props.size}`}
    ></span>
  </span>
);
