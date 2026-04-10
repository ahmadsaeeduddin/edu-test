'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const values = [
  {
    icon: '/assets/about_us-page_svgs/1.svg',
    title: 'Curiosity Over Conformity',
    body: 'Every breakthrough begins with a question. Instead of memorizing answers, we encourage learners to explore, challenge assumptions, and pursue deeper understanding.',
  },
  {
    icon: '/assets/about_us-page_svgs/2.svg',
    title: 'Research-Driven Growth',
    body: 'Every program and workshop is research-backed. We emphasize evidence-based learning that connects theory with real outcomes and prepares students to lead innovation.',
  },
  {
    icon: '/assets/about_us-page_svgs/3.svg',
    title: 'Ethical Use of AI and Technology',
    body: 'We see AI as a tool for discovery, not a shortcut. Learners understand ethics, responsibility, and social impact — building innovators who create with purpose.',
  },
  {
    icon: '/assets/about_us-page_svgs/4.svg',
    title: 'Collaboration Over Competition',
    body: 'We grow together. From peer circles to interdisciplinary teams, our spaces thrive on cooperation, shared knowledge, and mentorship that uplifts everyone.',
  },
  {
    icon: '/assets/about_us-page_svgs/5.svg',
    title: 'Real-World Relevance',
    body: 'Learning matters when it creates impact. Our content, partnerships, and projects reflect industry needs and global trends, bridging education and employment.',
  },
  {
    icon: '/assets/about_us-page_svgs/6.svg',
    title: 'Lifelong Learning Mindset',
    body: 'The world evolves, and so do we. We nurture adaptability, resilience, and a drive to learn and grow — essential for future leaders.',
  },
] as const;

const cardContainerVariants = {
  collapsed: {},
  expanded: {},
} as const;

const summaryLayerVariants = {
  collapsed: { opacity: 1 },
  expanded: { opacity: 0 },
} as const;

const detailLayerVariants = {
  collapsed: { opacity: 0 },
  expanded: { opacity: 1 },
} as const;

const cardBgVariants = {
  collapsed: { backgroundColor: 'var(--color-light-bg)' },
  expanded: { backgroundColor: '#ffffff' },
} as const;

type ValueItem = (typeof values)[number];

function ValueCard({
  item,
  index,
  isOpen,
  pinned,
  onHoverIn,
  onHoverOut,
  onPin,
  onUnpin,
}: {
  item: ValueItem;
  index: number;
  isOpen: boolean;
  pinned: boolean;
  onHoverIn: (index: number) => void;
  onHoverOut: (index: number) => void;
  onPin: (index: number) => void;
  onUnpin: (index: number) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4, delay: 0.06 * index, ease: [0.4, 0, 0.2, 1] }}
      className="relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
    >
      <motion.div
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-label={`${item.title}. Hover to preview; click to keep open.`}
        variants={cardContainerVariants}
        initial="collapsed"
        animate={isOpen ? 'expanded' : 'collapsed'}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`relative flex h-[300px] cursor-pointer flex-col overflow-hidden rounded-[4px] border-t-4 bg-transparent p-6 shadow-sm outline-none transition-[border-color] duration-300 focus-visible:ring-2 focus-visible:ring-edu-gold focus-visible:ring-offset-2 md:h-[360px] md:p-8 ${
          isOpen ? 'border-t-[var(--color-edu-gold)]' : 'border-t-transparent'
        }`}
        onMouseEnter={() => onHoverIn(index)}
        onMouseLeave={() => onHoverOut(index)}
        onClick={() => onPin(index)}
      >
        {/* BACKGROUND LAYER */}
        <motion.div
          variants={cardBgVariants}
          className="absolute inset-0 rounded-[4px]"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          aria-hidden
        />

        {/* CLOSE BUTTON - Absolute positioned so it floats OVER content */}
        {pinned && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onUnpin(index);
            }}
            className="absolute right-4 top-4 z-30 flex h-8 w-8 items-center justify-center rounded-full text-black transition-colors hover:bg-white/20 focus:outline-none"
            aria-label="Close"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
        )}

        {/* SUMMARY LAYER (Collapsed) */}
        <motion.div
          variants={summaryLayerVariants}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          aria-hidden={isOpen}
          className={`relative z-10 flex h-full flex-col text-left ${
            isOpen ? 'pointer-events-none' : ''
          }`}
        >
          <div className="shrink-0 mb-4 ">
            <Image
              src={item.icon}
              alt=""
              width={64}
              height={64}
              className="h-9 w-9 object-contain md:h-11 md:w-11 brightness-0"
            />
          </div>
          {/* Aligned to bottom-left via mt-auto */}
          <div className="mt-auto">
            <h4 className="font-general text-base font-medium leading-snug text-slate-900 md:text-2xl w-[70%]">
              {item.title}
            </h4>
          </div>
        </motion.div>

        {/* DETAIL LAYER (Expanded) */}
        <motion.div
          variants={detailLayerVariants}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          aria-hidden={!isOpen}
          className={`absolute inset-0 z-20 flex flex-col items-start gap-4 p-6 text-left md:gap-5 md:p-8 ${
            isOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          {/* Content starts from Top Left */}
          <h4
            className={`min-w-0 max-w-full font-general text-lg font-medium leading-tight text-slate-900 md:text-2xl ${
              isOpen ? 'w-[70%]' : 'w-full'
            }`}
          >
            {item.title}
          </h4>
          <p className="w-full font-inter text-md font-regular leading-snug text-slate-700 md:text-lg md:leading-relaxed">
            {item.body}
          </p>
        </motion.div>
      </motion.div>
    </motion.article>
  );
}

export default function OurValues() {
  const [pinned, setPinned] = useState<boolean[]>(() => Array.from({ length: values.length }, () => false));
  const [hovered, setHovered] = useState<boolean[]>(() => Array.from({ length: values.length }, () => false));

  const setHover = (index: number, value: boolean) => {
    setHovered((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const pinCard = (index: number) => {
    setPinned((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
  };

  const unpinCard = (index: number) => {
    setPinned((prev) => {
      const next = [...prev];
      next[index] = false;
      return next;
    });
  };

  const expandAll = () => {
    setPinned(values.map(() => true));
  };

  const collapseAll = () => {
    setPinned(values.map(() => false));
    setHovered(values.map(() => false));
  };

  return (
    <section className="flex flex-col gap-12">
      <div className="mb-4 flex flex-col gap-4">
        <h2 className="mb-6 font-general text-2xl font-medium tracking-tight md:text-4xl">Our Values</h2>
        <h3 className="font-inter text-xl font-regular text-slate-800 md:text-2xl">
          Principles That Power Every Learner&apos;s Journey
        </h3>
        <p className="max-w-5xl font-inter text-md font-regular text-slate-600 md:text-lg">
          At Edunautics, our values are the compass guiding how we teach, learn, and innovate. They shape our culture,
          our programs, and every collaboration - ensuring that learning isn&apos;t just about growth, but about impact
          with integrity.
        </p>
      </div>

      <div className="flex flex-col">
        <div className="mb-4 flex flex-wrap items-center justify-end gap-3">
          <button
            type="button"
            onClick={pinned.every((v) => v) ? collapseAll : expandAll}
            className="btn-dual-line-group bg-transparent px-4 py-2.5 font-inter text-sm font-medium text-slate-900 transition-colors hover:text-slate-600 focus:outline-none underline underline-offset-4"
          >
            <span className="btn-dual-line__viewport">
              <span className="btn-dual-line__stack">
                <span className="btn-dual-line__line">
                  {pinned.every((v) => v) ? 'Collapse All' : 'Expand All'}
                </span>
                <span className="btn-dual-line__line">
                  {pinned.every((v) => v) ? 'Collapse All' : 'Expand All'}
                </span>
              </span>
            </span>
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {values.map((item, index) => {
            const isPinned = pinned[index] ?? false;
            const isHovered = hovered[index] ?? false;
            const isOpen = isPinned || isHovered;
            return (
              <ValueCard
                key={item.title}
                item={item}
                index={index}
                isOpen={isOpen}
                pinned={isPinned}
                onHoverIn={(i) => setHover(i, true)}
                onHoverOut={(i) => setHover(i, false)}
                onPin={pinCard}
                onUnpin={unpinCard}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
