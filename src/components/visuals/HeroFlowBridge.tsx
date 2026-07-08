import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

/**
 * Editorial bridge between hero photography and the white surface section.
 * Soft dissolve + technical flow curve — not a decorative wave blob.
 */
export function HeroFlowBridge() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0.15, 0.65], [0, 1]);

  return (
    <div
      ref={ref}
      className="relative z-10 -mt-[min(18vw,160px)] h-[min(22vw,180px)] w-full overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/45 to-surface" />

      <svg
        className="absolute inset-x-0 bottom-0 h-full w-full"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="bridgeFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="38%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="flowStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(125,128,124,0)" />
            <stop offset="18%" stopColor="rgba(120,150,160,0.35)" />
            <stop offset="50%" stopColor="rgba(10,11,10,0.55)" />
            <stop offset="82%" stopColor="rgba(120,150,160,0.35)" />
            <stop offset="100%" stopColor="rgba(125,128,124,0)" />
          </linearGradient>
        </defs>

        <path
          d="M0 78 C 240 18, 480 148, 720 78 C 960 8, 1200 128, 1440 58 L 1440 180 L 0 180 Z"
          fill="url(#bridgeFill)"
        />
        <path
          d="M0 92 C 240 32, 480 162, 720 92 C 960 22, 1200 142, 1440 72 L 1440 180 L 0 180 Z"
          fill="#FFFFFF"
        />

        <path
          d="M0 86 C 240 26, 480 156, 720 86 C 960 16, 1200 136, 1440 66"
          stroke="rgba(10,11,10,0.08)"
          strokeWidth="1"
        />

        <motion.path
          d="M0 86 C 240 26, 480 156, 720 86 C 960 16, 1200 136, 1440 66"
          stroke="url(#flowStroke)"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            pathLength: reduced ? 1 : pathLength,
          }}
        />
      </svg>
    </div>
  );
}
