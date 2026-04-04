'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    q: 'Can institutions customise the program?',
    a: 'Absolutely. We offer tailored solutions based on institutional goals and student needs.',
  },
  { q: 'How is this different from traditional learning?', a: 'Content coming soon...' },
  { q: 'Do you provide mentor support?', a: 'Content coming soon...' },
  { q: 'Who is this platform designed for?', a: 'Content coming soon...' },
  { q: 'How can we get started?', a: 'Content coming soon...' },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section id="faqs" className="scroll-mt-24 bg-white py-24">
      <div className="layout-container">
        <div className="h-px w-full bg-[#979797]" aria-hidden />
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="font-general text-2xl font-medium leading-tight text-gray-900 md:text-4xl">
              Frequently <br />
              Asked Questions
            </h2>
          </div>
          <div className="space-y-4 md:col-span-8">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.q} className="rounded-[4px] bg-lightGray p-4 md:p-5">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 text-left"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                  >
                    <span className="font-general font-medium text-base text-gray-900 md:text-[17px]">{faq.q}</span>
                    <span className="inline-flex shrink-0 text-gray-900" aria-hidden>
                      {isOpen ? <X className="h-5 w-5" strokeWidth={2} /> : <Plus className="h-5 w-5" strokeWidth={2} />}
                    </span>
                  </button>
                  <motion.div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                    initial={false}
                    animate={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-general font-regular pt-2 text-md leading-relaxed text-gray-600">{faq.a}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
