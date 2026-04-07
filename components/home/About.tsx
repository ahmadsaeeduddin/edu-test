import Image from 'next/image';
import Link from 'next/link';

export function About() {
  return (
    <section className="relative z-10 -mt-15 pb-20">
      <div className="layout-container">
        <div className="bg-white p-6 shadow-sm md:p-12">
          <h2 className="mb-8 flex w-full items-baseline gap-4 font-general text-3xl font-medium text-slate-900 md:mb-10 md:text-5xl">
            <span className="shrink-0">The Challenge</span>
            <span className="h-[1px] min-w-0 flex-1 bg-gray-300" aria-hidden />
          </h2>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <div className="lg:col-span-7">
              <div className="flex w-full max-w-2xl flex-col">
                <h3 className="w-full font-general text-3xl font-medium leading-tight tracking-tight md:text-4xl lg:text-[2.125rem] lg:leading-snug">
                  <span className="text-slate-900">When Education Stops </span>
                  <span className="text-slate-500">at</span>
                  <span className="block text-slate-500">Classrooms, Innovation Stops Too</span>
                </h3>
                <div className="mt-6 w-full space-y-4 font-inter text-base font-regular leading-relaxed text-slate-600 md:text-lg max-w-xl">
                  <p>
                    Today&apos;s education system faces a critical gap. Students are trained to pass exams but rarely
                    guided to question, research, and create. Research often ends in reports instead of real-world
                    solutions. Meanwhile, industries evolve faster than academic curricula, leaving graduates
                    underprepared for modern challenges.
                  </p>
                  <p>
                    This disconnect between learning and application limits innovation, curiosity, and confidence — the
                    very traits needed to thrive in a world driven by technology and change.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-stretch gap-7 lg:col-span-5 lg:items-end">
              <Link
                href="/about"
                className="inline-flex w-fit shrink-0 items-center justify-center self-start rounded-lg border border-[#000000] bg-white px-5 py-2.5 font-inter text-sm font-medium text-slate-900 transition-colors hover:bg-gray-50 lg:self-end"
              >
                Learn More
              </Link>
              <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-xl lg:ml-auto lg:max-w-none">
                <Image
                  src="/assets/main_page_svgs/why-choose-img.webp"
                  alt="Students collaborating in a learning environment"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
