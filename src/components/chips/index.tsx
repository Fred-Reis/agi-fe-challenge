"use client";

import { Circle } from "./icon";

interface ChipsProps {
  handleAction?: () => void;
  borderColor?: String;
  iconColor?: String;
  bgColor?: String;
  color?: String;
  title: String;
}

export const Chips = ({
  handleAction,
  borderColor,
  iconColor,
  bgColor,
  color,
  title,
}: ChipsProps) => {
  return (
    <div
      onClick={handleAction}
      className={`items-center cursor-pointer flex rounded-full w-max h-max flex-wrap px-[14px] py-[8px] border-[1px] ${borderColor ?? "border-slate-200"}
        ${color ?? "text-white"} ${bgColor ?? "bg-transparent"}`}
    >
      {iconColor && <Circle iconColor={iconColor} />}
      <p className={`select-none  ${color ?? "text-white"}`}>{title}</p>
    </div>
  );
};
