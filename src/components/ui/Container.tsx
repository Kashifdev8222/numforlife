import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10", className)}
      style={style}
    >
      {children}
    </div>
  );
}
