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

const impactItems = [
  '500+ students trained through AI and STEM bootcamps',
  "Our growth reflects the real change we're creating in education and innovation.",
  'Dozens of student-led projects turned into real-world prototypes',
  'A growing network of mentors and collaborators from academia and industry',
] as const;

export default function ImpactInNumbers() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <h2 className="mb-4 font-general text-2xl font-medium tracking-tight text-slate-900 md:text-4xl">
          Impact in Numbers
        </h2>
        <p className="mb-12 font-inter text-lg font-regular text-slate-600">
          Our growth reflects the real change we&apos;re creating in education and innovation.
        </p>

        <div className="flex flex-col gap-1 md:gap-2">
          {impactItems.map((text) => (
            <motion.div
              key={text}
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              transition={cardTransition}
              className="cursor-default rounded-2xl border border-[#111110]/[0.06] bg-white p-5 md:p-6"
            >
              <div className="flex items-center gap-4 md:gap-5">
                <div className="shrink-0 rounded-full bg-edu-gold p-1">
                  <Check className="h-4 w-4 text-white" strokeWidth={3} />
                </div>
                <p className="font-inter text-lg font-regular text-slate-700">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
