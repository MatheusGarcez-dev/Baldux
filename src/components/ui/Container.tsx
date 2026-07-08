import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
};

export function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1280px] px-[18px] sm:px-6 md:px-8 lg:px-10 ${className}`}
    >
      {children}
    </Tag>
  );
}
