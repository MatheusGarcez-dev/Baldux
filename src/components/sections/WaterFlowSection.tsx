import fluxoImage from "../../assets/images/img-fluxo.png";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const stages = [
  {
    id: "01",
    title: "Entrada da água",
    text: "A água chega ao sistema e inicia seu percurso.",
  },
  {
    id: "02",
    title: "Fluxo direcionado",
    text: "O caminho conduz a água de maneira visualmente clara até o ponto de entrada.",
  },
  {
    id: "03",
    title: "Entrada no Baldux",
    text: "A água desce e entra no balde, concluindo o fluxo operacional.",
  },
] as const;

export function WaterFlowSection() {
  return (
    <section id="como-funciona" className="bg-surface-secondary py-20 md:py-24 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="max-w-[14ch] text-[clamp(2rem,4.2vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-graphite text-balance">
                Um fluxo pensado para acontecer naturalmente.
              </h2>
            </Reveal>
            <Reveal delay={0.08} blur={false}>
              <p className="mt-5 max-w-[42ch] text-[16px] leading-relaxed text-graphite/70 md:text-[17px]">
                A água percorre um caminho contínuo até entrar no Baldux,
                criando uma dinâmica mais organizada para a operação e
                facilitando a compreensão visual do sistema.
              </p>
            </Reveal>

            <ol className="mt-10 space-y-0">
              {stages.map((stage, index) => (
                <Reveal key={stage.id} delay={0.06 * index} blur={false} y={12}>
                  <li className="grid grid-cols-[52px_1fr] gap-4 border-t border-border py-5">
                    <span className="font-mono text-[13px] tracking-wider text-silver-dark">
                      {stage.id}
                    </span>
                    <div>
                      <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-graphite">
                        {stage.title}
                      </h3>
                      <p className="mt-1.5 max-w-[38ch] text-[14px] leading-relaxed text-graphite/65">
                        {stage.text}
                      </p>
                      {index === stages.length - 1 ? (
                        <div className="mt-4 h-px w-16 bg-water/80" aria-hidden />
                      ) : null}
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>

            <div className="mt-10">
              <Button href="#modelos" variant="secondary" showArrow>
                Ver modelos
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal y={20}>
              <figure className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-[28px] border border-border bg-surface">
                <img
                  src={fluxoImage}
                  alt="Diagrama do fluxo de água no Baldux: entrada, circulação interna e saída"
                  className="h-auto w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
