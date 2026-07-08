import heroBg from "../../assets/images/bg-hero-1.png";
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
      className="relative min-h-[100dvh] overflow-hidden bg-background pt-20 md:pt-24"
    >
      <div className="absolute inset-0" aria-hidden>
        <img
          src={heroBg}
          alt=""
          className="size-full object-cover object-[72%_center] sm:object-[78%_center] lg:object-right"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <Container className="relative z-[2] flex min-h-[calc(100dvh-5rem)] flex-col justify-end pb-24 pt-10 md:justify-center md:pb-32 lg:pb-36">
        <div className="max-w-[560px] lg:max-w-[540px]">
          <Reveal>
            <SectionLabel>Tecnologia para uma operação mais inteligente</SectionLabel>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-[11ch] text-[clamp(2.6rem,7vw,5.4rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-graphite text-balance">
              Inteligência que transforma o fluxo da sua sorveteria.
            </h1>
          </Reveal>

          <Reveal delay={0.16} blur={false}>
            <p className="mt-6 max-w-[42ch] text-[clamp(1.02rem,1.3vw,1.2rem)] leading-relaxed text-graphite/75">
              Une eficiência, organização e um fluxo de água mais inteligente
              para o dia a dia profissional.
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

      <HeroFlowBridge />
    </section>
  );
}
