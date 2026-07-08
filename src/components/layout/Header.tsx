import { List, X } from "@phosphor-icons/react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useState } from "react";
import { navLinks } from "../../data/pricing";
import { whatsapp } from "../../data/whatsapp";
import { BrandLogo } from "../ui/BrandLogo";
import { Button } from "../ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#solucao");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 40);
  });

  const floating = scrolled || open;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
      <motion.div
        layout
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`pointer-events-auto w-full transition-[max-width,border-radius,background,box-shadow,border-color,backdrop-filter] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          floating
            ? "max-w-[920px] rounded-full border border-border bg-surface/80 shadow-[0_8px_32px_rgba(10,11,10,0.08)] backdrop-blur-xl"
            : "max-w-[1280px] rounded-none border border-transparent bg-transparent shadow-none"
        }`}
      >
        <div
          className={`flex items-center justify-between gap-3 ${
            floating
              ? "h-[58px] px-4 sm:px-5 lg:px-6"
              : "h-16 px-[18px] sm:px-6 md:px-8 lg:h-[68px] lg:px-10"
          }`}
        >
          <a
            href="#topo"
            className="relative z-10 flex h-full shrink-0 items-center"
            aria-label="Baldux, início"
            onClick={() => setOpen(false)}
          >
            <BrandLogo
              className="leading-none"
              imgClassName={
                floating
                  ? "h-11 w-auto sm:h-12"
                  : "h-12 w-auto sm:h-[3.25rem] lg:h-14"
              }
            />
          </a>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex"
            aria-label="Principal"
          >
            {navLinks.map((link) => {
              const active = activeHref === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveHref(link.href)}
                  className={`rounded-full px-3.5 py-2 text-[13px] transition-colors duration-200 ${
                    active
                      ? "bg-surface-secondary text-graphite"
                      : "text-graphite/70 hover:text-graphite"
                  }`}
                >
                  <span className="relative inline-block">
                    {link.label}
                    {active ? (
                      <span
                        className="absolute inset-x-1 -bottom-1.5 h-px bg-graphite/50"
                        aria-hidden
                      />
                    ) : null}
                  </span>
                </a>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Button
              href={whatsapp.knowHeader}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              className="hidden sm:inline-flex"
            >
              Quero conhecer
            </Button>

            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-graphite lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X size={18} weight="bold" />
              ) : (
                <List size={18} weight="bold" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className={`overflow-hidden lg:hidden ${
                floating
                  ? "mx-3 mb-3 rounded-[22px] border border-border bg-surface"
                  : "border-t border-border"
              }`}
            >
              <div className="flex flex-col gap-1 px-3 py-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-3 py-3 text-[15px] text-graphite hover:bg-surface-secondary"
                    onClick={() => {
                      setActiveHref(link.href);
                      setOpen(false);
                    }}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2 sm:hidden" onClick={() => setOpen(false)}>
                  <Button
                    href={whatsapp.knowHeader}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    className="w-full"
                  >
                    Quero conhecer
                  </Button>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
