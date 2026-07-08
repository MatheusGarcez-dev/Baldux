import sectionImage from "../../assets/images/img-sec-4.png";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function ProductDetailSection() {
  return (
    <section className="relative flex w-full min-h-[360px] aspect-[4/5] items-start overflow-hidden sm:aspect-[16/9] sm:min-h-[320px]">
      <div className="absolute inset-0" aria-hidden>
        <img
          src={sectionImage}
          alt=""
          className="size-full object-cover object-[center_78%] sm:object-center"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-surface-secondary via-surface-secondary/85 to-transparent sm:h-[46%] md:h-[50%]" />
      </div>

      <Container className="relative z-[1] w-full pt-6 sm:pt-20 md:pt-24 lg:pt-28">
        <Reveal>
          <h2 className="mx-auto max-w-[16ch] text-center text-[clamp(1.7rem,6.5vw,3.8rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-graphite text-balance">
            Pensado nos detalhes que fazem parte da rotina.
          </h2>
        </Reveal>
      </Container>
    </section>
  );
}
