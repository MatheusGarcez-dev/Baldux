import cardBg from "../../assets/images/card.png";
import { whatsapp } from "../../data/whatsapp";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function BenefitsSection() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <Container>
        <Reveal>
          <h2 className="max-w-[16ch] text-[clamp(2rem,4.5vw,3.8rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-graphite text-balance">
            Aumente o valor percebido do seu cliente
          </h2>
        </Reveal>
        <Reveal delay={0.06} blur={false}>
          <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-graphite/70 md:text-[17px]">
            O Baldux além de ser uma automação que higieniza sua sorveteria e
            reduz a mão de obra, é extremamente sofisticado e estético,
            agregando um valor absurdo ao seu estabelecimento.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-12 md:gap-6">
          <Reveal className="md:col-span-7" y={22}>
            <article className="relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-[28px] bg-black p-8 text-surface md:min-h-[380px] md:p-10">
              <div className="absolute inset-0" aria-hidden>
                <img
                  src={cardBg}
                  alt=""
                  className="size-full object-cover object-right"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="relative text-[11px] uppercase tracking-[0.2em] text-silver">
                01
              </p>
              <h3 className="relative mt-4 max-w-[12ch] text-[clamp(1.8rem,3vw,2.8rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
                Seja diferente
              </h3>
              <p className="relative mt-4 max-w-[42ch] text-[15px] leading-relaxed text-silver-light/90 md:text-[16px]">
                Enquanto a maioria das sorveterias insiste em ficar com o
                processo de troca de baldinhos manual e anti-higiênico, a sua
                sorveteria será liderança e referência em sofisticação e higiene.
              </p>
            </article>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:col-span-5 md:gap-6">
            <Reveal delay={0.06} y={18}>
              <article className="rounded-[24px] border border-border bg-background p-7 md:p-8">
                <p className="text-[11px] uppercase tracking-[0.2em] text-silver-dark">
                  02
                </p>
                <h3 className="mt-3 text-[1.35rem] font-semibold tracking-[-0.02em] text-graphite">
                  Seu cliente bem cuidado
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-graphite/70">
                  Seu cliente não vai sofrer o risco de se contaminar com uma
                  água suja, devido à falta de troca de água do baldinho manual.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.12} y={18}>
              <article className="rounded-[24px] border border-border bg-background p-7 md:p-8">
                <p className="text-[11px] uppercase tracking-[0.2em] text-silver-dark">
                  03
                </p>
                <h3 className="mt-3 text-[1.35rem] font-semibold tracking-[-0.02em] text-graphite">
                  Investimento que retorna
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-graphite/70">
                  Aumenta a percepção de valor do seu estabelecimento e reduz a
                  folha de pagamento.
                </p>
              </article>
            </Reveal>
          </div>

          <Reveal className="md:col-span-12" delay={0.08} y={16}>
            <div className="flex justify-start md:justify-end">
              <Button
                href={whatsapp.know}
                target="_blank"
                rel="noopener noreferrer"
                showArrow
              >
                Conhecer o Baldux
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
