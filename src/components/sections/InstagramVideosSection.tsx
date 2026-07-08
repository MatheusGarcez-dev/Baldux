import {
  CaretLeft,
  CaretRight,
  InstagramLogo,
  Pause,
  Play,
  SpeakerHigh,
  SpeakerSlash,
} from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { INSTAGRAM_URL } from "../../data/pricing";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

type InstaVideo = {
  id: string;
  src: string;
  featured?: boolean;
};

const videos: InstaVideo[] = [
  { id: "ct-1", src: "/videos/CT-1.mp4", featured: true },
  { id: "ct-2", src: "/videos/CT-2.mp4" },
  { id: "ct-3", src: "/videos/CT-3.mp4" },
  { id: "ct-4", src: "/videos/CT-4.mp4" },
  { id: "ct-5", src: "/videos/CT-5.mp4" },
  { id: "ct-6", src: "/videos/CT-6.mp4" },
];

export function InstagramVideosSection() {
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();

  const goTo = useCallback((index: number) => {
    setActive((index + videos.length) % videos.length);
    setIsPlaying(true);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  const togglePlayback = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;

    if (el.paused) {
      void el.play().then(() => setIsPlaying(true)).catch(() => undefined);
    } else {
      el.pause();
      setIsPlaying(false);
    }
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.load();
    void el
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, [active]);

  useEffect(() => {
    if (reduced || carouselPaused || !isPlaying) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % videos.length);
    }, 8000);
    return () => window.clearInterval(timer);
  }, [reduced, carouselPaused, isPlaying, active]);

  const current = videos[active];

  return (
    <section className="overflow-hidden bg-surface py-24 md:py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[560px]">
            <Reveal>
              <p className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-silver-dark">
                <InstagramLogo size={14} weight="bold" aria-hidden />
                Instagram
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 max-w-[14ch] text-[clamp(2rem,4.5vw,3.8rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-graphite text-balance">
                O Baldux em movimento.
              </h2>
            </Reveal>
            <Reveal delay={0.1} blur={false}>
              <p className="mt-5 max-w-[40ch] text-[16px] leading-relaxed text-graphite/70">
                Veja o produto no ritmo real da operação, direto do Instagram.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12} blur={false} y={10}>
            <Button
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              showArrow
            >
              Ver no Instagram
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.08} y={24} className="mt-12 md:mt-16">
          <div
            className="relative"
            onMouseEnter={() => setCarouselPaused(true)}
            onMouseLeave={() => setCarouselPaused(false)}
          >
            <div className="relative mx-auto flex items-center justify-center">
              <div
                className="pointer-events-none absolute inset-x-0 top-1/2 h-[72%] -translate-y-1/2 rounded-[36px] bg-gradient-to-b from-surface-secondary/80 to-transparent blur-xl"
                aria-hidden
              />

              <div className="relative z-[1] flex w-full items-center justify-center gap-3 sm:gap-5 lg:gap-8">
                <SidePeek
                  video={videos[(active - 1 + videos.length) % videos.length]}
                  side="left"
                  onClick={prev}
                />

                <div className="relative w-[min(78vw,320px)] sm:w-[340px] md:w-[360px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.id}
                      initial={
                        reduced
                          ? false
                          : { opacity: 0, scale: 0.96, filter: "blur(8px)" }
                      }
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={
                        reduced
                          ? undefined
                          : { opacity: 0, scale: 0.98, filter: "blur(6px)" }
                      }
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="relative aspect-[9/16] overflow-hidden rounded-[28px] border border-border bg-black shadow-[0_24px_60px_rgba(10,11,10,0.14)]"
                    >
                      <video
                        ref={videoRef}
                        key={current.src}
                        src={current.src}
                        className="absolute inset-0 size-full object-cover"
                        muted={muted}
                        playsInline
                        loop
                        autoPlay
                        preload="metadata"
                        aria-label={`Vídeo Instagram Baldux ${active + 1}`}
                        onClick={togglePlayback}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                      />

                      <AnimatePresence>
                        {!isPlaying ? (
                          <motion.button
                            type="button"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            onClick={togglePlayback}
                            className="absolute inset-0 z-[1] flex items-center justify-center bg-black/25"
                            aria-label="Reproduzir vídeo"
                          >
                            <span className="inline-flex size-14 items-center justify-center rounded-full border border-white/25 bg-black/45 text-surface backdrop-blur-sm">
                              <Play size={22} weight="fill" />
                            </span>
                          </motion.button>
                        ) : null}
                      </AnimatePresence>

                      <div className="absolute bottom-4 right-4 z-[2] flex items-center gap-2">
                        <button
                          type="button"
                          onClick={togglePlayback}
                          className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-surface backdrop-blur-sm transition hover:bg-black/50"
                          aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                        >
                          {isPlaying ? (
                            <Pause size={16} weight="bold" />
                          ) : (
                            <Play size={16} weight="bold" />
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => setMuted((v) => !v)}
                          className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-surface backdrop-blur-sm transition hover:bg-black/50"
                          aria-label={muted ? "Ativar som" : "Silenciar"}
                        >
                          {muted ? (
                            <SpeakerSlash size={16} weight="bold" />
                          ) : (
                            <SpeakerHigh size={16} weight="bold" />
                          )}
                        </button>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <SidePeek
                  video={videos[(active + 1) % videos.length]}
                  side="right"
                  onClick={next}
                />
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-graphite transition hover:border-graphite/30 hover:bg-surface-secondary"
                aria-label="Vídeo anterior"
              >
                <CaretLeft size={18} weight="bold" />
              </button>

              <div className="flex items-center gap-2" role="tablist" aria-label="Vídeos">
                {videos.map((video, index) => (
                  <button
                    key={video.id}
                    type="button"
                    role="tab"
                    aria-selected={index === active}
                    aria-label={`Ir para vídeo ${index + 1}`}
                    onClick={() => goTo(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === active
                        ? "w-8 bg-graphite"
                        : "w-1.5 bg-silver hover:bg-silver-dark"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-graphite transition hover:border-graphite/30 hover:bg-surface-secondary"
                aria-label="Próximo vídeo"
              >
                <CaretRight size={18} weight="bold" />
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function SidePeek({
  video,
  side,
  onClick,
}: {
  video: InstaVideo;
  side: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative hidden aspect-[9/16] w-[140px] overflow-hidden rounded-[22px] border border-border bg-black opacity-45 transition duration-300 hover:opacity-100 md:block lg:w-[180px] xl:w-[200px]"
      aria-label={side === "left" ? "Vídeo anterior" : "Próximo vídeo"}
    >
      <video
        src={video.src}
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 size-full object-cover"
        aria-hidden
      />
      <div
        className={`absolute inset-0 ${
          side === "left"
            ? "bg-gradient-to-r from-surface via-surface/40 to-transparent"
            : "bg-gradient-to-l from-surface via-surface/40 to-transparent"
        }`}
        aria-hidden
      />
    </button>
  );
}
