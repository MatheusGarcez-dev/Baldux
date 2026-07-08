import { Star } from "@phosphor-icons/react";
import { testimonials, type Testimonial } from "../../data/testimonials";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          weight="fill"
          className={i < count ? "text-[#E5B567]" : "text-silver-light"}
          aria-hidden
        />
      ))}
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="box-border h-full w-[300px] shrink-0 rounded-[22px] border border-border bg-surface px-5 py-6 sm:w-[340px] sm:px-6 sm:py-7 md:w-[360px]">
      <Stars count={item.stars} />
      <p className="mt-4 text-[15px] leading-relaxed text-graphite/80 md:text-[16px]">
        “{item.quote}”
      </p>
      <div className="mt-5 border-t border-border pt-4">
        <p className="text-[14px] font-semibold tracking-[-0.01em] text-graphite">
          {item.name}
        </p>
        <p className="mt-1 text-[12px] text-silver-dark">{item.role}</p>
      </div>
    </article>
  );
}

function MarqueeTrack({
  items,
  reverse = false,
}: {
  items: Testimonial[];
  reverse?: boolean;
}) {
  return (
    <div className="group relative overflow-hidden">
      <div
        className={`flex w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } motion-reduce:animate-none group-hover:[animation-play-state:paused]`}
      >
        {/* Two identical groups; trailing padding mirrors card gap for seamless loop */}
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex m-0 list-none gap-4 p-0 pr-4 md:gap-5 md:pr-5"
            aria-hidden={copy === 1 ? true : undefined}
          >
            {items.map((item) => (
              <li key={`${copy}-${item.name}`} className="flex">
                <TestimonialCard item={item} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function SocialProofSection() {
  const rowA = testimonials.slice(0, 4);
  const rowB = testimonials.slice(4);

  return (
    <section className="overflow-hidden bg-background py-24 md:py-32">
      <Container>
        <Reveal>
          <h2 className="max-w-[14ch] text-[clamp(2rem,4.5vw,3.8rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-graphite text-balance">
            O que quem usa tem falado.
          </h2>
        </Reveal>
        <Reveal delay={0.08} blur={false}>
          <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-graphite/70">
            Feedbacks de quem colocou o Baldux pra rodar de verdade na
            sorveteria.
          </p>
        </Reveal>
      </Container>

      <div className="relative mt-12 md:mt-16">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-12 bg-gradient-to-r from-background to-transparent sm:w-20 md:w-28"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-12 bg-gradient-to-l from-background to-transparent sm:w-20 md:w-28"
          aria-hidden
        />

        <div className="flex flex-col gap-4 md:gap-5" aria-label="Depoimentos">
          <MarqueeTrack items={rowA} />
          <MarqueeTrack items={rowB} reverse />
        </div>
      </div>
    </section>
  );
}
