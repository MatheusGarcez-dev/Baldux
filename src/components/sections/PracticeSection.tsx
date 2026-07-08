import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const practiceImages = [
  { src: "/pratica/1.png", alt: "Baldux na operação da sorveteria" },
  { src: "/pratica/2.png", alt: "Baldux em uso no dia a dia" },
  { src: "/pratica/3.png", alt: "Detalhe do Baldux em ambiente real" },
  { src: "/pratica/4.png", alt: "Fluxo operacional com o Baldux" },
  { src: "/pratica/5.png", alt: "Baldux na rotina profissional" },
  { src: "/pratica/6.png", alt: "Instalação e uso do Baldux" },
  { src: "/pratica/7.png", alt: "Baldux em contexto de food service" },
] as const;

function PracticeCard({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="group relative shrink-0 overflow-hidden rounded-[22px] border border-border bg-surface">
      <img
        src={src}
        alt={alt}
        width={1080}
        height={1350}
        className="h-[280px] w-auto max-w-none object-contain sm:h-[340px] md:h-[400px]"
        loading="lazy"
        decoding="async"
      />
    </figure>
  );
}

export function PracticeSection() {
  return (
    <section id="na-pratica" className="overflow-hidden bg-surface py-24 md:py-32">
      <Container>
        <Reveal>
          <h2 className="max-w-[12ch] text-[clamp(2rem,4.5vw,3.8rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-graphite text-balance">
            Na prática.
          </h2>
        </Reveal>
        <Reveal delay={0.08} blur={false}>
          <p className="mt-5 max-w-[44ch] text-[16px] leading-relaxed text-graphite/70">
            O Baldux no ritmo real da sorveteria: instalação, rotina e o fluxo
            acontecendo no dia a dia.
          </p>
        </Reveal>
      </Container>

      <div className="relative mt-12 md:mt-16" aria-label="Baldux na prática">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-12 bg-gradient-to-r from-surface to-transparent sm:w-20 md:w-28"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-12 bg-gradient-to-l from-surface to-transparent sm:w-20 md:w-28"
          aria-hidden
        />

        <div className="group relative overflow-hidden">
          <div className="flex w-max animate-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused]">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                className="m-0 flex list-none items-center gap-4 p-0 pr-4 md:gap-5 md:pr-5"
                aria-hidden={copy === 1 ? true : undefined}
              >
                {practiceImages.map((item) => (
                  <li key={`${copy}-${item.src}`} className="flex">
                    <PracticeCard src={item.src} alt={item.alt} />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
