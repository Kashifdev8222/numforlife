import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const variants = {
  primary:
    "bg-cta text-cta-foreground hover:brightness-110 shadow-[var(--shadow)]",
  secondary:
    "border border-heading/20 bg-surface text-heading hover:border-accent/50 hover:bg-accent-soft",
  ghost: "text-heading hover:bg-accent-soft",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
