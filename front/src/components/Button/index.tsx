import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonText: string;
};

export const Button = ({ buttonText, ...rest }: Props) => {
  return (
    <div className="w-full flex justify-center">
      <button
        {...rest}
        className="w-[200px] bg-blue-500 h-8 rounded-lg mt-2 lg:mt-6 text-gray-200 shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out"
      >
        {buttonText}
      </button>
    </div>
  );
};
