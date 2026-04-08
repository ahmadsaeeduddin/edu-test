'use client';

import { motion } from 'framer-motion';
import type { WhatWeOfferProgram } from '@/data/whatWeOffer';

function formatHighlightTitle(heading: string) {
  return heading.replace(/:\s*$/, '');
}

const cardVariants = {
  rest: {
    scale: 1,
    boxShadow:
      '0px 0px 0px 0px rgba(232, 160, 32, 0), 0px 0px 0px 0px rgba(17, 17, 16, 0)',
  },
  hover: {
    scale: 1.001,
    boxShadow:
      '6px 7px 0 0 rgba(232, 160, 32, 0.16), 10px 14px 22px -6px rgba(17, 17, 16, 0.12)',
  },
} as const;

const cardTransition = {
  type: 'tween' as const,
  duration: 0.2,
  ease: [0.4, 0, 0.2, 1] as const,
};

export default function Features({ program }: { program: WhatWeOfferProgram }) {
  return (
    <div>
      <div className="flex flex-col gap-8 md:gap-10">
        {program.highlights.map((highlight, index) => (
          <motion.div
            key={`${program.id}-${index}`}
            variants={cardVariants}
            initial="rest"
            whileHover="hover"
            transition={cardTransition}
            className="cursor-default rounded-2xl border border-[#111110]/[0.06] bg-light-bg p-4 md:p-6"
          >
            <div className="flex gap-6 md:gap-8">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#E8A020] text-base font-medium text-[#111110]">
                {index + 1}
              </div>
              <div className="max-w-full">
                <h3 className="mb-3 font-general font-medium text-[28px] tracking-[-0.2px] text-[#111110]">
                  {formatHighlightTitle(highlight.heading)}
                </h3>
                <p className="font-inter text-base font-regular leading-[1.6] text-[#666660]">{highlight.body}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
