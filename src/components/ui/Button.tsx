import Link from "next/link";
import { clsx } from "clsx";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  showArrow?: boolean;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  showArrow = false,
  external = false,
}: ButtonProps) {
  const classes = clsx(
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
    variant === "primary" &&
      "bg-foreground text-ink hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_8px_30px_rgba(109,109,251,0.35)] hover:-translate-y-0.5",
    variant === "secondary" &&
      "glass text-foreground hover:border-line-strong hover:-translate-y-0.5",
    className
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
