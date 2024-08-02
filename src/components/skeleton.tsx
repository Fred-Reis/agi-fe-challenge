import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Skeleton({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={twMerge(
        "animate-pulse h-full w-full bg-slate-200 rounded-md",
        className
      )}
      {...props}
    />
  );
}
