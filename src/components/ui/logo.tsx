import Image from "next/image";
import { cn } from "@/lib/utils";

/** Brand logo (file: /public/images/brand/logo.png, transparent PNG). */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/brand/logo.png"
      alt="Solo Technology"
      width={600}
      height={169}
      priority
      className={cn("h-10 w-auto sm:h-11", className)}
    />
  );
}
