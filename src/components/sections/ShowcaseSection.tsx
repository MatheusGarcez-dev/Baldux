import darkImage from "../../assets/images/baldux-dark.png";
import { Reveal } from "../ui/Reveal";

export function ShowcaseSection() {
  return (
    <section className="relative overflow-hidden bg-black py-28 md:py-36 lg:py-44">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <img
          src={darkImage}
          alt=""
          className="size-full object-cover opacity-55"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
      </div>

      <div className="relative z-[1] mx-auto max-w-[1100px] px-[18px] text-center sm:px-6">
        <Reveal>
          <p className="mx-auto max-w-[16ch] text-[clamp(2.4rem,7vw,5.8rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-surface text-balance">
            Quando o fluxo melhora, a operação acompanha.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
