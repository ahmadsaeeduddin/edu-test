'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const transition = { type: 'tween' as const, duration: 0.28, ease: [0.4, 0, 0.2, 1] as const };

const buttonVariants = {
  rest: {},
  hover: {},
} as const;

export function FooterSubscribeButton() {
  return (
    <motion.button
      type="button"
      variants={buttonVariants}
      className="btn-dual-line-group box-border inline-flex h-14 min-h-14 shrink-0 items-center justify-center gap-2 self-stretch border-b border-l-0 border-r border-t border-[var(--color-edu-gold)] bg-edu-gold px-8 py-0 text-base font-bold whitespace-nowrap text-darkText transition-colors hover:border-l hover:border-[var(--color-edu-gold)] hover:bg-white hover:text-edu-gold"
      initial="rest"
      whileHover="hover"
    >
      <span className="btn-dual-line__viewport">
        <span className="btn-dual-line__stack">
          <span className="btn-dual-line__line">Subscribe Now</span>
          <span className="btn-dual-line__line">Subscribe Now</span>
        </span>
      </span>
      <motion.span
        variants={{ rest: { x: 0 }, hover: { x: 5 } }}
        transition={transition}
        className="inline-block"
      >
        <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
      </motion.span>
    </motion.button>
  );
}
