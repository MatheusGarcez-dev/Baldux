import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

export function SectionLabel({
  children,
  className = "",
  tone = "light",
}: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-[11px] font-medium uppercase tracking-[0.22em] ${
        tone === "dark" ? "text-silver" : "text-silver-dark"
      } ${className}`}
    >
      {children}
    </span>
  );
}
