import { Check } from 'lucide-react';

export function About() {
  return (
    <section className="relative -mt-15 z-10 pb-20">
      <div className="layout-container">
        <div className="bg-white p-6 shadow-sm md:p-12">
          <div className="w-full">
            <h2 className="font-general mb-6 flex w-full items-baseline gap-4 text-2xl font-medium md:mb-8 md:text-3xl">
              <span className="shrink-0">About Edunautics</span>
              <span className="flex min-w-0 flex-1 justify-center" aria-hidden>
                <span className="h-0.5 w-27 shrink-0 bg-gray-200  md:w-67 lg:w-126" />
              </span>
            </h2>
            <p className="text-base leading-snug text-gray-400 md:text-3xl w-[70%]">
              Edunautics is more than an EdTech platform - <span className="text-gray-800">it&apos;s an initiative to reimagine education through research, innovation and industry collaboration.</span>
            </p>
          </div>

          <div className="mt-5 skew-card rounded-xl bg-gradient-to-br from-[#2b251a] via-[#1f1a12] to-[#3a2f1e] p-6 text-white md:mt-20 md:p-16">
            <div className="unskew grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2 md:gap-y-8">
              {[
                'Mentorship Programs',
                'Hands-On Projects',
                'Research-Driven Learning',
                'Experiential Learning',
                'Artificial Intelligence Learning',
                'Innovation Ecosystem',
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white md:size-9">
                    <Check className="size-4 text-[#FFFFFF] md:size-5" strokeWidth={2} />
                  </span>
                  <span className="text-sm font-medium text-[#FFFFFF] md:text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
