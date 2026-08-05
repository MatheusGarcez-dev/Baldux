import heroBg from "../../assets/images/bg-hero-1.png";
import heroBgMobile from "../../assets/images/bg-hero-mobile.png";
import { whatsapp } from "../../data/whatsapp";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { HeroFlowBridge } from "../visuals/HeroFlowBridge";

export function HeroSection() {
  return (
    <section
      id="topo"
      className="relative min-h-[100dvh] overflow-hidden bg-background pt-20 max-md:min-h-[calc(100svh+14rem)] md:pt-24"
    >
      {/* Mobile: imagem travada em svh — não redimensiona no scroll */}
      <div
        className="absolute inset-x-0 top-0 h-[100svh] overflow-hidden md:hidden"
        aria-hidden
      >
        <img
          src={heroBgMobile}
          alt=""
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-b from-transparent from-0% via-surface/55 via-50% to-surface to-100%" />
      </div>

      {/* Desktop */}
      <div className="absolute inset-0 hidden md:block" aria-hidden>
        <img
          src={heroBg}
          alt=""
          className="size-full object-cover object-[72%_center] sm:object-[78%_center] lg:object-right"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Continuação branca abaixo da imagem no mobile */}
      <div
        className="absolute inset-x-0 top-[100svh] bottom-0 bg-surface md:hidden"
        aria-hidden
      />

      <Container className="relative z-20 flex min-h-[calc(100dvh-5rem)] flex-col justify-end pb-8 pt-10 max-md:min-h-[calc(100svh+9rem)] md:justify-center md:pb-32 lg:pb-36">
        <div className="max-w-[560px] lg:max-w-[540px]">
          <Reveal>
            <SectionLabel>
              Une tecnologia eficiente em prol da higiene da sua sorveteria.
            </SectionLabel>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-[18ch] text-[clamp(2.2rem,5.8vw,4.4rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-graphite text-balance">
              Baldux aumenta o lucro e eleva o padrão de atendimento ao cliente
            </h1>
          </Reveal>

          <Reveal delay={0.16} blur={false}>
            <p className="mt-6 max-w-[42ch] text-[clamp(1.02rem,1.3vw,1.2rem)] leading-relaxed text-graphite/75">
              Nunca mais a água suja fará parte da experiência do cliente na sua
              sorveteria
            </p>
          </Reveal>

          <Reveal delay={0.24} blur={false} y={12}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button
                href={whatsapp.know}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                showArrow
              >
                Conhecer o Baldux
              </Button>
              <Button href="#como-funciona" variant="secondary" size="lg">
                Ver como funciona
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>

      <div className="hidden md:block">
        <HeroFlowBridge />
      </div>
    </section>
  );
}
