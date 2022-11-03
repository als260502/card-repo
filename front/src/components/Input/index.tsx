import { forwardRef, ForwardRefRenderFunction } from "react";

type Props = {
  labelText: string;
  name: string;
  placeholder: string;
  error?: string;
};
const inputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { labelText, name, placeholder, error, ...rest },
  ref
) => {
  return (
    <div className="px-2">
      <div className="flex items-center">
        <label
          htmlFor={name}
          className="bg-gray-300 text-sm  w-[150px] font-semibold rounded-l-md border-r-gray-400 border-r-2 text-center"
        >
          {labelText}
        </label>
        <input
          type="text"
          name={name}
          className="block w-full px-3  bg-white border border-slate-300 rounded-r-md text-sm shadow-sm placeholder-gray-500
          focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 placeholder:text-xs"
          placeholder={placeholder}
          {...rest}
          ref={ref}
        />
      </div>
      <p className="px-3 text-xs text-red-500">{error}</p>
    </div>
  );
};

export const Input = forwardRef(inputBase);
