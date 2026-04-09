 'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const pillars = [
  {
    number: '01',
    title: 'Research at the Core',
    body: 'We begin with curiosity. Our programs are built on research-based learning where students question deeply, experiment confidently, and transform insights into real innovation.',
  },
  {
    number: '02',
    title: 'AI as an Enabler',
    body: 'AI is more than a subject — it’s a tool for discovery. We use it to foster critical thinking, creative automation, and new possibilities beyond traditional education.',
  },
  {
    number: '03',
    title: 'Industry-Relevant Learning',
    body: 'Through partnerships with universities, research labs and companies, students gain access to advanced tools, expert mentors, and hands-on experience aligned with global standards.',
  },
  {
    number: '04',
    title: 'From Classroom to Impact',
    body: 'Learning extends beyond lectures. Students apply ideas in innovation labs, community projects, and industry collaborations — turning theory into meaningful outcomes.',
  },
  {
    number: '05',
    title: 'Skills for the Future',
    body: 'We combine STEM, AI, and data science with communication, leadership, and problem-solving skills — preparing learners not just for exams, but for long-term success.',
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

type PillarItem = (typeof pillars)[number];

function PillarCard({
  item,
  index,
  isOpen,
  pinned,
  onHoverIn,
  onHoverOut,
  onPin,
  onUnpin,
}: {
  item: PillarItem;
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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4, delay: 0.06 * index, ease: [0.4, 0, 0.2, 1] }}
      className="relative w-full"
    >
      <motion.div
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-label={`${item.title}. Hover to preview; click to keep open.`}
        variants={cardContainerVariants}
        initial="collapsed"
        animate={isOpen ? 'expanded' : 'collapsed'}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className={[
          'relative flex h-[260px] cursor-pointer flex-col overflow-hidden rounded-[4px] bg-[var(--color-light-bg)] p-7 shadow-sm outline-none md:h-[290px] md:p-8',
          'border-l-4 transition-[border-color] duration-300 focus-visible:ring-2 focus-visible:ring-edu-gold focus-visible:ring-offset-2',
          isOpen ? 'border-l-[var(--color-edu-gold)]' : 'border-l-transparent',
        ].join(' ')}
        onMouseEnter={() => onHoverIn(index)}
        onMouseLeave={() => onHoverOut(index)}
        onClick={() => onPin(index)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onPin(index);
        }}
      >
        {pinned ? (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onUnpin(index);
            }}
            className="absolute right-4 top-4 z-30 flex h-8 w-8 items-center justify-center rounded-full text-slate-900 transition-colors hover:bg-white/40 focus:outline-none"
            aria-label="Close"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
        ) : null}

        {/* Closed layer: number + title only */}
        <motion.div
          variants={summaryLayerVariants}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          aria-hidden={isOpen}
          className={`relative z-10 flex h-full flex-col text-left ${isOpen ? 'pointer-events-none' : ''}`}
        >
          <span className="font-inter text-4xl font-extrabold text-pillarNumber">{item.number}</span>
          <div className="mt-3">
            <h3 className="font-general text-xl font-medium leading-snug text-slate-900 md:text-2xl">
              {item.title}
            </h3>
          </div>
        </motion.div>

        {/* Open layer: title + description */}
        <motion.div
          variants={detailLayerVariants}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          aria-hidden={!isOpen}
          className={`absolute inset-0 z-20 flex flex-col items-start p-7 text-left md:p-8 ${
            isOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          <h3 className="font-general text-xl font-medium leading-snug text-slate-900 md:text-2xl">
            {item.title}
          </h3>
          <p className="mt-4 font-inter text-md font-regular leading-relaxed text-slate-600 md:text-lg">
            {item.body}
          </p>
        </motion.div>
      </motion.div>
    </motion.article>
  );
}

export default function CorePillars() {
  const [pinned, setPinned] = useState<boolean[]>(() => Array.from({ length: pillars.length }, () => false));
  const [hovered, setHovered] = useState<boolean[]>(() => Array.from({ length: pillars.length }, () => false));

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
    setPinned(pillars.map(() => true));
  };

  const collapseAll = () => {
    setPinned(pillars.map(() => false));
    setHovered(pillars.map(() => false));
  };

  return (
    <section className="w-full bg-white py-12">

      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-12">
        <div className="mb-4 flex flex-wrap items-center justify-end gap-3">
          <button
            type="button"
            onClick={pinned.every((v) => v) ? collapseAll : expandAll}
            className="bg-transparent px-4 py-2.5 font-inter text-sm font-medium text-slate-900 transition-colors hover:text-slate-600 focus:outline-none underline underline-offset-4"
          >
            {pinned.every((v) => v) ? 'Collapse All' : 'Expand All'}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {pillars.map((p, index) => {
            const isOpen = pinned[index] || hovered[index];
            return (
              <PillarCard
                key={p.number}
                item={p}
                index={index}
                isOpen={isOpen}
                pinned={pinned[index]}
                onHoverIn={(i) => setHover(i, true)}
                onHoverOut={(i) => setHover(i, false)}
                onPin={pinCard}
                onUnpin={unpinCard}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
