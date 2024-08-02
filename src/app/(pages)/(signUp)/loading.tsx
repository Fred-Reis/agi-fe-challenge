import { Skeleton } from "@/components";

export default function Loading() {
  console.log("loading");

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Skeleton />
    </div>
  );
}
