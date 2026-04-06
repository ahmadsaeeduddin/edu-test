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

        <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-8">
  {/* Left Image Side */}
  <div className="relative aspect-square w-full overflow-hidden rounded-md lg:max-w-[28rem] lg:shrink-0">
    <Image
      src="/assets/why_it_works-image.webp"
      alt="Supporting abstract imagery"
      fill
      className="object-cover"
    />
  </div>

  {/* Right Content Side (Stretches to Image Height) */}
  <div className="relative flex flex-1 flex-col justify-between py-2">
    
    {/* 1. The Rail Container (Desktop Only) */}
    <div className="absolute bottom-0 left-0 top-0 hidden w-5 lg:block" aria-hidden>
      {/* Orange Background Pill */}
      <div className="why-works-rail-gradient h-full w-full rounded-full" />
      
      {/* The Connecting White Line 
          'top-3.5' and 'bottom-3.5' ensure the line starts/ends 
          at the exact center of the 28px (h-7) dot containers. 
      */}
      <div className="absolute left-1/2 top-3.5 bottom-3.5 w-px -translate-x-1/2 bg-white/40" />
    </div>

    {/* 2. The Steps */}
    {steps.map((step) => (
      <div key={step.title} className="relative flex items-start gap-x-6">
        
        {/* Dot Container: h-7 matches the leading-7 of the H3 for perfect alignment */}
        <div className="relative hidden h-7 w-5 shrink-0 items-center justify-center lg:flex">
          {/* The White Dot */}
          <span className="relative z-10 h-2.5 w-2.5 rounded-full bg-white shadow-sm ring-2 ring-white" />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          {/* leading-7 (28px) ensures the first line of text is centered with the dot */}
          <h3 className="font-general text-xl font-medium leading-7">
            {step.title}
          </h3>
          <p className="mt-2 font-inter text-base leading-relaxed text-slate-600">
            {step.body}
          </p>
        </div>
      </div>
    ))}
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
