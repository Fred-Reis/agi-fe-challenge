import { forwardRef, ReactNode, InputHTMLAttributes } from "react";

import Image, { StaticImageData } from "next/image";

interface Props {
  passwordIcon?: StaticImageData;
  handleToggle?: () => void;
  classname?: string;
  icon?: ReactNode;
  variant?: "icon";
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { variant, icon, classname, handleToggle, passwordIcon, ...otherProps },
    ref
  ) => {
    return (
      <div
        className={`w-full h-10 p-4 flex items-center justify-center rounded-lg border-2 text-base text-font_color-default border-slate-200 
          ${classname && classname}
        `}
      >
        {icon}
        <input
          className={`
            flex-1 border-none placeholder-font_color-weak text-sm  outline-none
            ${variant === "icon" && "ml-4"}
            `}
          ref={ref}
          {...otherProps}
        />
        {passwordIcon && (
          <Image
            onClick={handleToggle}
            className="w-5 h-5"
            src={passwordIcon}
            alt="password"
          />
        )}
      </div>
    );
  }
);
