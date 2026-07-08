import { Minus, Plus } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useId, useState } from "react";
import { faqItems } from "../../data/faq";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-surface py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.035em] text-graphite">
                Perguntas frequentes
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <ul className="border-t border-border">
              {faqItems.map((item, index) => (
                <FAQItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  open={openIndex === index}
                  onToggle={() =>
                    setOpenIndex((current) => (current === index ? null : index))
                  }
                />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();
  const reduced = useReducedMotion();

  return (
    <li className="border-b border-border">
      <h3>
        <button
          id={buttonId}
          type="button"
          className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-black"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="text-[16px] font-medium tracking-[-0.01em] text-graphite md:text-[17px]">
            {question}
          </span>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-graphite">
            {open ? (
              <Minus size={14} weight="bold" aria-hidden />
            ) : (
              <Plus size={14} weight="bold" aria-hidden />
            )}
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-[58ch] pb-6 pr-12 text-[15px] leading-relaxed text-graphite/70">
              {answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  );
}
