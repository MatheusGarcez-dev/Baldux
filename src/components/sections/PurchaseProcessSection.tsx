import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const steps = [
  {
    id: "01",
    title: "Escolha sua configuração",
    text: "Smart ou Standard conforme a necessidade da operação.",
  },
  {
    id: "02",
    title: "Fale com nossa equipe",
    text: "Alinhe os detalhes da aquisição.",
  },
  {
    id: "03",
    title: "Leve o Baldux para sua operação",
    text: "Avance para uma rotina mais organizada e inteligente.",
  },
] as const;

export function PurchaseProcessSection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <Container>
        <Reveal>
          <h2 className="text-[clamp(2rem,4.5vw,3.8rem)] font-semibold tracking-[-0.035em] text-graphite">
            Simples para começar.
          </h2>
        </Reveal>

        <div className="mt-14 hidden md:block">
          <div className="relative grid grid-cols-3 gap-8">
            <div
              className="pointer-events-none absolute left-0 right-0 top-[18px] h-px bg-border"
              aria-hidden
            />
            {steps.map((step, i) => (
              <Reveal key={step.id} delay={0.08 * i} y={16} blur={false}>
                <article className="relative pt-2">
                  <span className="relative z-[1] inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface text-[12px] font-medium text-graphite">
                    {step.id}
                  </span>
                  <h3 className="mt-8 max-w-[16ch] text-[1.35rem] font-semibold tracking-[-0.02em] text-graphite">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[28ch] text-[15px] leading-relaxed text-graphite/65">
                    {step.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <ol className="mt-12 space-y-0 border-l border-border md:hidden">
          {steps.map((step, i) => (
            <Reveal key={step.id} delay={0.06 * i} y={12} blur={false}>
              <li className="relative py-6 pl-8">
                <span className="absolute -left-[9px] top-8 size-[17px] rounded-full border border-border bg-surface" />
                <p className="font-mono text-[12px] tracking-wider text-silver-dark">
                  {step.id}
                </p>
                <h3 className="mt-2 text-[1.25rem] font-semibold tracking-[-0.02em] text-graphite">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-graphite/65">
                  {step.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
