type ProductPlaceholderProps = {
  src?: string;
  alt: string;
  className?: string;
  aspect?: string;
  priority?: boolean;
  caption?: string;
};

/**
 * Replace `src` with real product photography when available.
 * Current assets under src/assets/images/ are studio placeholders.
 */
export function ProductPlaceholder({
  src,
  alt,
  className = "",
  aspect = "aspect-square",
  priority = false,
  caption,
}: ProductPlaceholderProps) {
  return (
    <figure className={`relative overflow-hidden ${className}`}>
      <div
        className={`relative ${aspect} overflow-hidden rounded-[24px] md:rounded-[32px] bg-gradient-to-br from-surface via-silver-light/60 to-surface-secondary`}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
            className="absolute inset-0 size-full object-cover"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center tech-grid"
            aria-hidden
          >
            <div className="relative flex h-[58%] w-[42%] items-end justify-center rounded-t-[18%] rounded-b-[12%] border border-silver/50 bg-gradient-to-b from-silver-light via-surface to-silver/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
              <div className="absolute top-[12%] h-[6%] w-[70%] rounded-full bg-silver/40" />
              <span className="mb-6 text-[10px] font-medium uppercase tracking-[0.28em] text-silver-dark">
                Baldux
              </span>
            </div>
          </div>
        )}
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-black/5"
          aria-hidden
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-[12px] tracking-wide text-silver-dark">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
