import sectionImage from "../../assets/images/img-sec-4.png";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function ProductDetailSection() {
  return (
    <section className="relative flex w-full aspect-[16/9] min-h-[320px] items-start overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-28">
      <div className="absolute inset-0" aria-hidden>
        <img
          src={sectionImage}
          alt=""
          className="size-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-x-0 top-0 h-[42%] bg-gradient-to-b from-surface-secondary via-surface-secondary/80 to-transparent sm:h-[46%] md:h-[50%]" />
      </div>

      <Container className="relative z-[1] w-full">
        <Reveal>
          <h2 className="mx-auto max-w-[16ch] text-center text-[clamp(2rem,4.5vw,3.8rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-graphite text-balance">
            Pensado nos detalhes que fazem parte da rotina.
          </h2>
        </Reveal>
      </Container>
    </section>
  );
}
