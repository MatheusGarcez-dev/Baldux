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
            Menos improviso. Mais inteligência no processo.
          </h2>
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
                Fluxo mais organizado
              </h3>
              <p className="relative mt-4 max-w-[38ch] text-[15px] leading-relaxed text-silver-light/90 md:text-[16px]">
                Uma dinâmica operacional pensada para tornar o processo mais
                claro, do início do caminho da água até o uso no Baldux.
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
                  Mais eficiência na rotina
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-graphite/70">
                  Um sistema apresentado para operações que valorizam tempo e
                  consistência.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.12} y={18}>
              <article className="rounded-[24px] border border-border bg-background p-7 md:p-8">
                <p className="text-[11px] uppercase tracking-[0.2em] text-silver-dark">
                  03
                </p>
                <h3 className="mt-3 text-[1.35rem] font-semibold tracking-[-0.02em] text-graphite">
                  Ambiente mais profissional
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-graphite/70">
                  Uma solução que contribui para uma percepção mais organizada
                  da operação.
                </p>
              </article>
            </Reveal>
          </div>

          <Reveal className="md:col-span-12" delay={0.08} y={16}>
            <article className="flex flex-col items-start justify-between gap-6 rounded-[24px] border border-border bg-surface-secondary px-7 py-8 md:flex-row md:items-center md:px-10">
              <div className="max-w-[52ch]">
                <p className="text-[11px] uppercase tracking-[0.2em] text-silver-dark">
                  04
                </p>
                <h3 className="mt-3 text-[1.5rem] font-semibold tracking-[-0.02em] text-graphite md:text-[1.7rem]">
                  Simplicidade no uso
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-graphite/70">
                  Tecnologia deve facilitar a rotina, não criar novas
                  complicações.
                </p>
              </div>
              <Button
                href={whatsapp.know}
                target="_blank"
                rel="noopener noreferrer"
                showArrow
              >
                Conhecer o Baldux
              </Button>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
