import productImage from "../../assets/images/bg-hero-1.png";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const withoutBaldux = [
  "Gastos desnecessários com funcionário só para trocar baldinho.",
  "Clientes vendo o baldinho sujo, engordurado e com água parada.",
  "Perda de credibilidade da sorveteria.",
  "Maior risco de contaminação e proliferação de doenças.",
] as const;

const withBaldux = [
  "Economia com mão de obra.",
  "Loja sempre limpa e higienizada.",
  "Sofisticação e inovação para a sua sorveteria.",
  "Diferenciação em relação à maioria das sorveterias.",
] as const;

export function ProblemSection() {
  return (
    <section
      id="solucao"
      className="relative z-[11] -mt-px bg-surface pb-24 pt-10 md:pb-32 md:pt-14"
    >
      <Container>
        <div className="grid grid-cols-1 items-end gap-10 border-b border-border pb-12 lg:grid-cols-12 lg:gap-12 lg:pb-16">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="max-w-[20ch] text-[clamp(2.1rem,4.8vw,4rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-graphite text-balance">
                Em pleno 2026 e você ainda contratando funcionário só para trocar
                baldinho?
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pb-1">
            <Reveal delay={0.08} blur={false}>
              <p className="max-w-[42ch] text-[16px] leading-relaxed text-graphite/70 md:text-[17px]">
                Tome cuidado: depois da Baldux na sua sorveteria, seu funcionário
                não vai mais perder tempo trocando água. Coloque-o para atender
                melhor e produzir mais sorvetes.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5" y={18}>
            <div className="relative overflow-hidden rounded-[28px] bg-graphite text-surface">
              <div className="relative aspect-[4/5] md:aspect-[5/6]">
                <img
                  src={productImage}
                  alt="Baldux em aço escovado no fluxo de água"
                  className="absolute inset-0 size-full object-cover object-[82%_center] opacity-90"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                <p className="max-w-[16ch] text-[clamp(1.5rem,2.5vw,2rem)] font-semibold leading-[1.15] tracking-[-0.03em]">
                  Automação que faz o trabalho duro
                </p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Reveal blur={false} y={14}>
                <article className="h-full rounded-[22px] border border-border bg-background p-6 md:p-7">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-silver-dark">
                    Sem Baldux
                  </p>
                  <ul className="mt-5 space-y-4">
                    {withoutBaldux.map((item) => (
                      <li
                        key={item}
                        className="border-t border-border pt-4 text-[15px] leading-relaxed text-graphite/70 first:border-t-0 first:pt-0 md:text-[16px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
              <Reveal delay={0.06} blur={false} y={14}>
                <article className="h-full rounded-[22px] border border-graphite/15 bg-graphite p-6 text-surface md:p-7">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-silver">
                    Com Baldux
                  </p>
                  <ul className="mt-5 space-y-4">
                    {withBaldux.map((item) => (
                      <li
                        key={item}
                        className="border-t border-white/10 pt-4 text-[15px] leading-relaxed text-silver-light/90 first:border-t-0 first:pt-0 md:text-[16px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>

            <Reveal delay={0.1} blur={false} y={12} className="mt-8">
              <p className="max-w-[40ch] text-[1.15rem] font-semibold leading-snug tracking-[-0.02em] text-graphite md:text-[1.35rem]">
                Mostre para seu cliente que seu estabelecimento realmente se
                importa com ele
              </p>
            </Reveal>

            <Reveal delay={0.12} blur={false} y={10} className="mt-8">
              <Button href="#como-funciona" showArrow>
                Ver como funciona
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
