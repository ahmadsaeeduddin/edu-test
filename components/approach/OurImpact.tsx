'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const impactItems = [
  {
    icon: '/assets/our_impact-svgs/1-student.svg',
    title: 'Empowering Students as Innovators',
    body: "Through our workshops, bootcamps, and research labs, learners don't just study emerging technologies - they use them to create. From building AI-powered prototypes to developing community-focused projects, our students turn ideas into solutions with measurable social and industrial value.",
  },
  {
    icon: '/assets/our_impact-svgs/2-building.svg',
    title: 'Bridging Academia and Industry',
    body: 'Our collaborations with universities, research hubs, and tech companies connect learners directly to professional ecosystems. These partnerships translate academic curiosity into employable skills, internships, and innovation pipelines that strengthen both the education and technology sectors.',
  },
  {
    icon: '/assets/our_impact-svgs/3-search.svg',
    title: 'Research with Purpose',
    body: 'We champion research that drives transformation — AI models improving education systems, STEM solutions tackling sustainability challenges, and data-driven innovations reimagining how learning happens. Each project at Edunautics is a step toward building a smarter, more inclusive future.',
  },
  {
    icon: '/assets/our_impact-svgs/4-framework.svg',
    title: 'Community and Collaboration',
    body: 'Our open learning circles and peer-driven communities foster collaboration, creativity, and confidence. By connecting students, mentors, and organizations, we build networks that last well beyond graduation.',
  },
] as const;

export default function OurImpact() {
  const [expanded, setExpanded] = useState<boolean[]>(() =>
    Array.from({ length: impactItems.length }, () => false),
  );

  const toggle = (index: number) => {
    setExpanded((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const expandAll = () => {
    setExpanded(impactItems.map(() => true));
  };

  const collapseAll = () => {
    setExpanded(impactItems.map(() => false));
  };

  return (
    <section className="flex flex-col">
      <div className="mb-16">
        <h2 className="mb-6 font-general text-2xl font-medium tracking-tight text-slate-900 md:text-4xl">Our Impact</h2>
        <p className="mb-6 font-inter text-xl font-regular text-slate-800 md:text-2xl">
          Principles That Power Every Learner&apos;s Journey
        </p>
        <p className="max-w-4xl font-inter font-regular leading-relaxed text-slate-600 md:text-lg">
          At Edunautics, impact is not a buzzword &mdash; it&apos;s our benchmark. Every program, partnership, and research initiative is designed to create meaningful outcomes that extend far beyond classrooms. We measure our success not just by what students learn, but by how they apply it to solve real problems, shape industries, and inspire others.
        </p>
      </div>

      <div className="flex flex-col">
        <div className="mb-4 flex flex-wrap items-center justify-end gap-3">
          <button
            type="button"
            onClick={expandAll}
            className="rounded-md bg-lightGray px-4 py-2.5 font-inter text-sm font-medium text-slate-900 transition-colors hover:bg-gray-200/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-edu-gold focus-visible:ring-offset-2"
          >
            Expand all
          </button>
          <button
            type="button"
            onClick={collapseAll}
            className="rounded-md border border-gray-200 bg-white px-4 py-2.5 font-inter text-sm font-medium text-slate-900 transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-edu-gold focus-visible:ring-offset-2"
          >
            Collapse all
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="border-t border-gray-200"
        >
          {impactItems.map((item, index) => {
            const isOpen = expanded[index] ?? false;
            return (
              <div key={item.title} className="border-b border-gray-200">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="group flex w-full items-center justify-between gap-4 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-edu-gold focus-visible:ring-offset-2"
                  aria-expanded={isOpen}
                  aria-controls={`impact-panel-${index}`}
                  id={`impact-trigger-${index}`}
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <Image
                      src={item.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="h-8 w-8 shrink-0 object-contain"
                    />
                    <h3
                      className={`font-general text-xl font-medium transition-colors duration-100 ${
                        isOpen ? 'text-edu-gold' : 'text-slate-700 group-hover:text-edu-gold-light'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </span>
                  <span className="shrink-0 text-slate-500" aria-hidden>
                    {isOpen ? <Minus className="h-6 w-6" strokeWidth={2} /> : <Plus className="h-6 w-6" strokeWidth={2} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`impact-panel-${index}`}
                      role="region"
                      aria-labelledby={`impact-trigger-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pl-12 font-inter text-lg font-regular leading-relaxed text-slate-600 md:pl-14">
                        {item.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
