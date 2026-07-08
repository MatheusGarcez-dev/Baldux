import productImage from "../../assets/images/bg-hero-1.png";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const impacts = [
  {
    title: "O caminho da água fica claro",
    text: "Em vez de um processo improvisado a cada uso, o fluxo passa a ter um percurso contínuo e fácil de entender no dia a dia.",
  },
  {
    title: "A rotina ganha consistência",
    text: "Quando a etapa se repete dezenas de vezes por turno, uma dinâmica previsível reduz atrito e deixa a operação mais estável.",
  },
  {
    title: "A operação transmite profissionalismo",
    text: "Organização visual e sequência clara reforçam a percepção de um ambiente pensado para performance, não para improviso.",
  },
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
              <h2 className="max-w-[15ch] text-[clamp(2.1rem,4.8vw,4rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-graphite text-balance">
                Cada etapa que se repete merece um fluxo inteligente.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pb-1">
            <Reveal delay={0.08} blur={false}>
              <p className="max-w-[42ch] text-[16px] leading-relaxed text-graphite/70 md:text-[17px]">
                Na sorveteria, água, tempo e movimento se acumulam ao longo do
                turno. O Baldux entra exatamente nesse ponto: organiza o fluxo
                e deixa a operação mais clara, limpa e previsível.
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
                <p className="max-w-[18ch] text-[clamp(1.5rem,2.5vw,2rem)] font-semibold leading-[1.15] tracking-[-0.03em]">
                  Onde o fluxo da água encontra a rotina da sorveteria.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Reveal blur={false} y={14}>
                <article className="rounded-[22px] border border-border bg-background p-6 md:p-7">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-silver-dark">
                    Sem estrutura
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-graphite/70 md:text-[16px]">
                    Repetições manuais, caminhos pouco claros e energia gasta em
                    ajustes que poderiam ser mais simples.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={0.06} blur={false} y={14}>
                <article className="rounded-[22px] border border-graphite/15 bg-graphite p-6 text-surface md:p-7">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-silver">
                    Com Baldux
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-silver-light/90 md:text-[16px]">
                    Um percurso contínuo, leitura visual imediata e uma rotina
                    mais organizada do começo ao fim do fluxo.
                  </p>
                </article>
              </Reveal>
            </div>

            <div className="mt-8 space-y-0 border-t border-border">
              {impacts.map((item, i) => (
                <Reveal key={item.title} delay={0.05 * i} blur={false} y={12}>
                  <article className="border-b border-border py-6 md:py-7">
                    <h3 className="text-[1.15rem] font-semibold tracking-[-0.02em] text-graphite md:text-[1.25rem]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[48ch] text-[15px] leading-relaxed text-graphite/65">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

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
