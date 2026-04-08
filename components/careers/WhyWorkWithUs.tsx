'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const cardVariants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow:
      '0px 0px 0px 0px rgba(232, 160, 32, 0), 0px 0px 0px 0px rgba(17, 17, 16, 0)',
  },
  hover: {
    scale: 1.001,
    y: -0.5,
    boxShadow:
      '3px 4px 0 0 rgba(232, 160, 32, 0.16), 10px 14px 22px -6px rgba(17, 17, 16, 0.12)',
  },
} as const;

const cardTransition = {
  type: 'tween' as const,
  duration: 0.16,
  ease: [0.4, 0, 0.2, 1] as const,
};

const reasons = [
  'Work on cutting-edge AI and STEM initiatives',
  'Collaborate with universities and industry leaders',
  'Flexible, innovation-focused environment',
  'Opportunity to shape future-ready education',
  'Meaningful projects with real-world outcomes',
] as const;

export default function WhyWorkWithUs() {
  return (
    <section className="flex flex-col">
      <h2 className="mb-12 font-general text-2xl font-medium md:text-4xl">Why Work With Us</h2>
      <div className="grid grid-cols-1 gap-1 md:gap-2 md:grid-cols-2 md:gap-x-12 md:gap-y-4">
        {reasons.map((reason) => (
          <motion.div
            key={reason}
            variants={cardVariants}
            initial="rest"
            whileHover="hover"
            transition={cardTransition}
            className="cursor-default rounded-2xl border border-[#111110]/[0.06] bg-white p-5 md:p-6"
          >
            <div className="flex items-center gap-1 md:gap-2">
              <div className="shrink-0 rounded-full bg-edu-gold p-1">
                <Check className="h-4 w-4 text-white" strokeWidth={3} />
              </div>
              <span className="max-w-md font-general text-md font-medium text-gray-700 md:max-w-lg md:text-lg">
                {reason}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
