import Image from 'next/image';

const steps = [
  {
    title: 'Hands-on, Mentor-Led Learning',
    body: 'Every program combines guided exploration with teamwork and personalized mentorship.',
  },
  {
    title: 'Community & Collaboration',
    body: 'Open learning circles and innovation labs create spaces for knowledge exchange and creativity.',
  },
  {
    title: 'Continuous Evolution',
    body: 'We adapt our courses and research tracks with the evolving EdTech landscape to stay ahead of trends.',
  },
] as const;

export default function WhyItWorks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <h2 className="mb-16 text-center font-general text-2xl font-medium tracking-tight text-slate-900 md:text-4xl">
          Why Our Approach Works
        </h2>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8">
          <div className="relative aspect-square w-full overflow-hidden rounded-md lg:max-w-[min(100%,28rem)] lg:shrink-0">
            <Image
              src="/assets/why_it_works-image.webp"
              alt="Supporting abstract imagery"
              fill
              className="object-cover"
            />
          </div>

          {/* Rail + steps: grid aligns dots with each step row (desktop only) */}
          <div className="min-w-0 flex-1">
            <div className="space-y-12 lg:hidden">
              {steps.map((step) => (
                <div key={step.title}>
                  <h3 className="mb-3 font-general text-xl font-medium">{step.title}</h3>
                  <p className="font-inter font-regular leading-relaxed text-slate-600">{step.body}</p>
                </div>
              ))}
            </div>

            <div className="hidden lg:grid lg:grid-cols-[minmax(18px,20px)_minmax(0,1fr)] lg:gap-x-6 lg:gap-y-12">
              {/* Pill rail + vertical white line (starts ~first dot, fades before bottom) */}
              <div
                className="relative col-start-1 h-full w-5 justify-self-center"
                style={{ gridRow: `1 / span ${steps.length}` }}
              >
                <div className="why-works-rail-gradient absolute inset-0 rounded-full" aria-hidden />
                {/* pt-1.5 (6px) + half dot (4px) ≈ first dot center; bottom inset leaves fade zone above pill end */}
                <div
                  className="pointer-events-none absolute left-1/2 z-[1] w-px -translate-x-1/2 rounded-full"
                  style={{
                    top: '0.625rem',
                    bottom: '14%',
                    background:
                      'linear-gradient(180deg, #ffffff 0%, #ffffff 62%, rgba(255, 255, 255, 0.55) 82%, rgba(255, 255, 255, 0) 100%)',
                  }}
                  aria-hidden
                />
              </div>

              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="col-start-1 z-[2] flex justify-center self-start pt-1.5 pointer-events-none"
                  style={{ gridRowStart: index + 1 }}
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-white shadow-sm ring-2 ring-white/90" />
                </div>
              ))}

              {steps.map((step, index) => (
                <div key={step.title} className="col-start-2 min-w-0" style={{ gridRowStart: index + 1 }}>
                  <h3 className="mb-3 font-general text-xl font-medium">{step.title}</h3>
                  <p className="font-inter font-regular leading-relaxed text-slate-600">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-24 max-w-4xl text-center">
          <p className="font-inter text-xl font-regular leading-tight text-slate-700 md:text-2xl">
            At Edunautics, learning is not{' '}
            <span className="font-medium">just preparation for the future - it creates the future.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
