import { Arrow } from "@/assets/arrow";

interface Props {
  variant?: "filled" | "outlined" | "icon" | "smallIcon";
  smallIcon?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  classname?: string;
  arrow?: boolean;
  text?: string;
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLInputElement> & Props;
export const Button = ({
  variant = "filled",
  arrow = false,
  smallIcon,
  classname,
  disabled,
  onClick,
  text,
  icon,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full h-10 p-4 rounded-xl border-2 flex items-center justify-center text-base text-[#fff] font-semibold
        ${variant === "smallIcon" && "border-slate-200 text-font_color-default gap-[10px]"} 
        ${variant === "icon" && "border-slate-200 text-font_color-default justify-between"} 
        ${variant === "outlined" && "border-primary text-primary"} 
        ${variant === "filled" && "bg-primary border-primary"} 
        ${disabled && "opacity-50"}
        ${classname && classname}`}
      aria-label={text}
      disabled={disabled}
    >
      {icon && icon}
      {smallIcon && smallIcon}
      <p
        className={`${icon ? "flex-grow-1" : "flex items-center justify-center gap-[10px]"}`}
      >
        {text}
        {arrow && (
          <span className="-rotate-90">
            <Arrow color="#fff" />
          </span>
        )}
      </p>
      {icon && <div className="w-4"></div>}
    </button>
  );
};
