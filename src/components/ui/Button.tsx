import { ArrowRight } from "@phosphor-icons/react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark" | "light";
type Size = "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  showArrow?: boolean;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className" | "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[14px] rounded-full",
  lg: "h-12 px-6 text-[15px] rounded-full sm:h-[3.25rem] sm:px-7",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-graphite text-surface hover:bg-black hover:-translate-y-px focus-visible:outline-graphite",
  secondary:
    "bg-transparent text-graphite border border-border hover:border-graphite/30 hover:bg-surface hover:-translate-y-px focus-visible:outline-graphite",
  ghost:
    "bg-transparent text-graphite hover:text-black focus-visible:outline-graphite",
  dark: "bg-surface text-graphite hover:bg-silver-light hover:-translate-y-px focus-visible:outline-surface",
  light:
    "bg-transparent text-surface border border-white/20 hover:border-white/40 hover:bg-white/5 hover:-translate-y-px focus-visible:outline-surface",
};

function Arrow({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <ArrowRight
      weight="bold"
      className="size-4 transition-transform duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5"
      aria-hidden
    />
  );
}

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const showArrow = props.showArrow ?? false;
  const className = props.className ?? "";
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (typeof props.href === "string") {
    const {
      href,
      children,
      variant: _v,
      size: _s,
      showArrow: _a,
      className: _c,
      ...anchorProps
    } = props;

    return (
      <a href={href} className={classes} {...anchorProps}>
        <span>{children}</span>
        <Arrow show={showArrow} />
      </a>
    );
  }

  const {
    children,
    variant: _v,
    size: _s,
    showArrow: _a,
    className: _c,
    type = "button",
    ...buttonProps
  } = props;

  return (
    <button type={type} className={classes} {...buttonProps}>
      <span>{children}</span>
      <Arrow show={showArrow} />
    </button>
  );
}
