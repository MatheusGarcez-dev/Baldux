import { pricing } from "../../data/pricing";
import { whatsapp } from "../../data/whatsapp";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function InvestmentSection() {
  return (
    <section id="investimento" className="bg-surface py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:items-end">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="max-w-[14ch] text-[clamp(2rem,4.2vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-graphite text-balance">
                Uma solução pensada para entrar na operação e fazer sentido no
                dia a dia.
              </h2>
            </Reveal>
            <Reveal delay={0.08} blur={false}>
              <p className="mt-6 max-w-[40ch] text-[16px] leading-relaxed text-graphite/70">
                Valores claros, sem camadas escondidas. Escolha a configuração e
                converse com a equipe sobre a melhor forma de avançar.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.06} y={16}>
              <div className="border-t border-border">
                <div className="flex flex-col gap-2 border-b border-border py-7 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-silver-dark">
                      Kit Baldux Smart
                    </p>
                    <p className="mt-3 text-[clamp(2.2rem,4vw,3.2rem)] font-semibold tracking-[-0.04em] text-graphite">
                      {pricing.smart.price}
                    </p>
                  </div>
                  <p className="text-[14px] text-graphite/60">
                    + unidades adicionais · {pricing.smart.additionalUnit} cada
                  </p>
                </div>

                <div className="flex flex-col gap-2 border-b border-border py-7 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-silver-dark">
                      Baldux Standard
                    </p>
                    <p className="mt-3 text-[clamp(2.2rem,4vw,3.2rem)] font-semibold tracking-[-0.04em] text-graphite">
                      {pricing.standard.price}
                    </p>
                  </div>
                  <p className="text-[14px] text-graphite/60">por unidade</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} blur={false} y={10}>
              <div className="mt-8">
                <Button
                  href={whatsapp.specialist}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  showArrow
                >
                  Falar com um especialista
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
