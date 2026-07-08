import darkImage from "../../assets/images/baldux-dark.png";
import { whatsapp } from "../../data/whatsapp";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function FinalCTASection() {
  return (
    <section id="contato" className="relative overflow-hidden bg-black py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-full opacity-40 md:w-[55%]"
        aria-hidden
      >
        <img
          src={darkImage}
          alt=""
          className="size-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
      </div>

      <Container className="relative z-[1]">
        <div className="max-w-[640px]">
          <Reveal>
            <h2 className="max-w-[14ch] text-[clamp(2.2rem,5vw,4.2rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-surface text-balance">
              Sua operação pode fluir de um jeito mais inteligente.
            </h2>
          </Reveal>
          <Reveal delay={0.08} blur={false}>
            <p className="mt-6 max-w-[40ch] text-[16px] leading-relaxed text-silver md:text-[17px]">
              Conheça o Baldux e descubra a configuração ideal para a realidade
              da sua sorveteria.
            </p>
          </Reveal>
          <Reveal delay={0.14} blur={false} y={12}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button
                href={whatsapp.know}
                target="_blank"
                rel="noopener noreferrer"
                variant="dark"
                size="lg"
                showArrow
              >
                Quero conhecer o Baldux
              </Button>
              <Button
                href={whatsapp.team}
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                size="lg"
              >
                Falar com a equipe
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
