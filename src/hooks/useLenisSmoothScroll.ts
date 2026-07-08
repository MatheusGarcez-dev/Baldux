import Lenis from "lenis";
import { useEffect } from "react";

const DESKTOP_QUERY = "(min-width: 1024px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Smooth scrolling with Lenis — desktop only.
 * Skips mobile/tablet and users who prefer reduced motion.
 */
export function useLenisSmoothScroll() {
  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const reduced = window.matchMedia(REDUCED_MOTION_QUERY);

    let lenis: Lenis | null = null;
    let rafId = 0;

    const destroy = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
      if (lenis) {
        lenis.destroy();
        lenis = null;
      }
      document.documentElement.classList.remove("lenis");
    };

    const raf = (time: number) => {
      lenis?.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    const setup = () => {
      destroy();

      if (!desktop.matches || reduced.matches) return;

      lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
      });

      document.documentElement.classList.add("lenis");
      rafId = requestAnimationFrame(raf);
    };

    setup();

    const onChange = () => setup();
    desktop.addEventListener("change", onChange);
    reduced.addEventListener("change", onChange);

    const onAnchorClick = (event: MouseEvent) => {
      if (!lenis) return;

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const el = document.querySelector(hash);
      if (!(el instanceof HTMLElement)) return;

      event.preventDefault();
      lenis.scrollTo(el, { offset: 0 });
      history.pushState(null, "", hash);
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      desktop.removeEventListener("change", onChange);
      reduced.removeEventListener("change", onChange);
      document.removeEventListener("click", onAnchorClick);
      destroy();
    };
  }, []);
}
