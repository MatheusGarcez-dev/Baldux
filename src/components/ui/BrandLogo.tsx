import logo from "../../assets/images/logo.png";

type BrandLogoProps = {
  className?: string;
  imgClassName?: string;
};

export function BrandLogo({
  className = "",
  imgClassName = "h-8 w-auto sm:h-9",
}: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center justify-center leading-none ${className}`}>
      <img
        src={logo}
        alt="Baldux"
        className={`block object-contain object-center drop-shadow-[0_1px_2px_rgba(10,11,10,0.18)] ${imgClassName}`}
        decoding="async"
      />
    </span>
  );
}
