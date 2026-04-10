'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    q: 'Can institutions customize the program?',
    a: 'Yes, institutions can tailor the program to fit their curriculum, goals, and student needs. We offer flexible modules and collaborative planning to ensure the program aligns with your requirements.',
  },
  {
    q: 'How is this different from traditional learning?',
    a: 'Our approach focuses on practical, real-world learning rather than just theory. Students engage in hands-on projects, industry-based tasks, and collaborative experiences that prepare them for real challenges.',
  },
  {
    q: 'Do you provide mentor support?',
    a: 'Yes, learners receive guidance from experienced mentors who provide support, feedback, and industry insights throughout the program.',
  },
  {
    q: 'Who is this platform designed for?',
    a: 'The platform is designed for educational institutions, students, and organizations looking to enhance learning through practical and industry-relevant experiences.',
  },
  {
    q: 'How can we get started?',
    a: "Getting started is simple—reach out to our team, share your requirements, and we'll guide you through onboarding and program setup.",
  },
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
                    <span className="min-w-0 flex-1 font-general font-medium text-base text-gray-900 md:text-[17px]">
                      {faq.q}
                    </span>
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
