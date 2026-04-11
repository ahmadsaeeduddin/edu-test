import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function About() {
  return (
    <section className="relative z-10 -mt-[clamp(7.5rem,13.5svh,11rem)] pb-20 md:-mt-[clamp(8.5rem,12.5vh,10.5rem)] lg:-mt-[clamp(9.25rem,13.5vh,11.5rem)]">
      <div className="layout-container">
        <div className="bg-white p-6 md:p-12">
          <h2 className="mb-6 flex w-full items-baseline gap-4 font-general text-3xl font-medium text-slate-900 sm:mb-8 md:mb-10 md:text-5xl">
            <span className="shrink-0">The Challenge</span>
            <span className="h-[1px] min-w-0 flex-1 bg-gray-300" aria-hidden />
          </h2>

          <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <h3 className="w-full max-w-xl font-general text-2xl font-medium leading-relaxed  md:text-4xl">
                <span className="block text-slate-900">When Education</span>
                <span className="mt-2 block text-slate-900">Stops at Classrooms,</span>
                <span className="mt-2 block text-[var(--color-edu-gold)]">Innovation Stops Too</span>
              </h3>
            </div>

            <div className="order-1 max-w-2xl lg:order-2">
              <div className="space-y-7 font-inter text-base font-regular leading-relaxed text-slate-600 text-lg md:text-xl mr-4">
                <p className=" leading-relaxed ">
                  Today&apos;s education system faces a critical gap. Learners are trained to pass exams but rarely
                  guided to question, research, and create. Research often ends in reports instead of real-world
                  solutions. Meanwhile, industries evolve faster than academic curricula, leaving graduates underprepared
                  for modern challenges.
                </p>
                <p className="leading-relaxed ">
                  This disconnect between learning and application limits innovation, curiosity, and confidence: the
                  very traits needed to thrive in a world driven by technology and change.
                </p>
              </div>

              <Link
                href="/about"
                className="btn-dual-line mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-md border border-slate-700 bg-white px-6 py-3 font-general text-xl font-medium text-slate-900 transition-colors hover:border-white hover:bg-dark hover:text-white"
              >
                <span className="btn-dual-line__viewport btn-dual-line__viewport--2 max-w-[min(100%,18rem)] text-center md:max-w-[20rem]">
                  <span className="btn-dual-line__stack">
                    <span className="btn-dual-line__line">Know More About Edunautics</span>
                    <span className="btn-dual-line__line">Know More About Edunautics</span>
                  </span>
                </span>
                <ChevronRight className="h-5 w-5 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
