import { pricing } from "../../data/pricing";
import { whatsapp } from "../../data/whatsapp";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function ModelsSection() {
  return (
    <section id="modelos" className="bg-background py-24 md:py-32">
      <Container>
        <Reveal>
          <h2 className="max-w-[16ch] text-[clamp(2rem,4.5vw,3.8rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-graphite text-balance">
            Escolha a configuração ideal para sua operação.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-0 lg:overflow-hidden lg:rounded-[28px] lg:border lg:border-border">
          <Reveal className="lg:border-r lg:border-border" y={20}>
            <article className="flex h-full flex-col rounded-[24px] border border-border bg-surface p-8 md:p-10 lg:rounded-none lg:border-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-silver-dark">
                    Kit
                  </p>
                  <h3 className="mt-2 text-[1.6rem] font-semibold tracking-[-0.03em] text-graphite md:text-[1.85rem]">
                    {pricing.smart.name}
                  </h3>
                </div>
                <span className="rounded-full border border-border px-3 py-1 text-[11px] tracking-wide text-graphite/80">
                  {pricing.smart.badge}
                </span>
              </div>

              <p className="mt-10 font-semibold tracking-[-0.04em] text-graphite text-[clamp(2.4rem,4vw,3.4rem)]">
                {pricing.smart.price}
              </p>
              <p className="mt-3 text-[14px] text-graphite/65">
                Unidade adicional por {pricing.smart.additionalUnit}
              </p>

              <p className="mt-8 max-w-[36ch] text-[15px] leading-relaxed text-graphite/70">
                Configuração apresentada para quem busca iniciar com a solução
                completa do Baldux na operação.
              </p>

              <div className="mt-auto pt-10">
                <Button
                  href={whatsapp.smart}
                  target="_blank"
                  rel="noopener noreferrer"
                  showArrow
                >
                  {pricing.smart.cta}
                </Button>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08} y={20}>
            <article className="flex h-full flex-col rounded-[24px] border border-border bg-surface-secondary/60 p-8 md:p-10 lg:rounded-none lg:border-0 lg:bg-surface">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-silver-dark">
                  Unidade
                </p>
                <h3 className="mt-2 text-[1.6rem] font-semibold tracking-[-0.03em] text-graphite md:text-[1.85rem]">
                  {pricing.standard.name}
                </h3>
              </div>

              <p className="mt-10 font-semibold tracking-[-0.04em] text-graphite text-[clamp(2.4rem,4vw,3.4rem)]">
                {pricing.standard.price}
                <span className="ml-2 text-[16px] font-medium tracking-normal text-graphite/55">
                  / unidade
                </span>
              </p>

              <p className="mt-8 max-w-[36ch] text-[15px] leading-relaxed text-graphite/70">
                {pricing.standard.description}
              </p>

              <div className="mt-auto pt-10">
                <Button
                  href={whatsapp.standard}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  showArrow
                >
                  {pricing.standard.cta}
                </Button>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
