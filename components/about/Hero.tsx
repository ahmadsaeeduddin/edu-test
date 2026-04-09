import Image from 'next/image';

const columnShell =
  'absolute inset-y-0 left-0 hidden md:flex md:w-[58%] lg:w-[52%] items-center justify-start';

const cardShell =
  'flex h-auto w-full max-w-xl flex-col justify-center sm:max-w-[34rem] md:h-[450px] md:max-w-[min(100%,36rem)] lg:max-w-[38rem]';

function HeroIntroText({ className }: { className?: string }) {
  return (
    <p className={className}>
      <span className="font-bold font-general text-darkBlack">Edunautics</span> is more than an EdTech platform — it&apos;s an
      initiative to reimagine education through research,
      innovation, and industry collaboration. We prepare learners{' '}
      <span className="text-slate-500">
        not just to understand knowledge, but to apply it where it truly matters.
      </span>
    </p>
  );
}

export default function Hero() {
  return (
    <section className="flex flex-col gap-12 md:gap-16 lg:gap-20">
      {/* Top: two-column grid */}
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
        <h1 className="font-general text-4xl font-medium leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
          <span className="block">About</span>
          <span className="mt-1 block text-edu-gold">Edunautics</span>
        </h1>
        <p className="font-general text-xl font-medium leading-snug text-slate-900 md:text-right md:text-2xl lg:text-[1.65rem] lg:leading-snug">
          <span className="text-slate-900">Equipping Learners with Tools </span>
          <span className="text-slate-500">That Create Impact Beyond Classrooms</span>
        </p>
      </div>

      {/* Middle: blank L-card (z-10) → image (z-20) → text (z-30) */}
      <div className="relative isolate w-full md:h-[620px]">
        {/* 1 — Blank white card with gold L (left + bottom only) */}
        <div className={`${columnShell} z-10 pointer-events-none`} aria-hidden>
          <div
            className={`${cardShell} shrink-0 bg-white py-6 md:py-0 border-b-4 border-l-4 border-edu-gold md:border-b-[6px] md:border-l-[6px]`}
          />
        </div>

        {/* 2 — Image on top of blank card */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 hidden h-[620px] w-screen max-w-none -translate-x-1/2 md:block">
          <div className="absolute left-[calc(40vw+4rem)] top-0 h-[620px] w-[calc(min(100vw,100rem)/2-1.5rem-4rem)] overflow-hidden rounded-2xl">
            <Image
              alt="Abstract warm shapes suggesting innovation and learning"
              className="object-cover"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              src="/assets/hero-images/about-us-hero.webp"
            />
          </div>
        </div>

        {/* 3 — Text on top of image; inset white so gold L on blank (z-10) shows in left/bottom gutter (z-20 image wrapper is transparent outside the photo) */}
        <div className={`${columnShell} z-30`}>
          <div className={`${cardShell} bg-transparent py-6 md:py-0`}>
            <div className="flex min-h-0 flex-1 flex-col justify-center pl-0 pr-0 pt-0">
              <div className="mb-1 ml-1 flex min-h-0 flex-1 flex-col justify-center bg-white px-5 py-5 md:mb-1.5 md:ml-1.5 md:px-9 md:py-6 lg:px-10">
                <HeroIntroText className="font-inter text-lg font-regular leading-relaxed tracking-wider text-dark-text md:text-2xl md:overflow-y-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: image then stacked card with full L border */}
        <div className="relative z-0 h-[240px] w-full overflow-hidden rounded-2xl sm:h-[300px] md:hidden">
          <div className="relative h-full w-full">
            <Image
              alt="Abstract warm shapes suggesting innovation and learning"
              className="object-cover"
              fill
              priority
              sizes="100vw"
              src="/assets/hero-images/about-us-hero.webp"
            />
          </div>
        </div>

        <div className="relative z-10 -mt-6 flex w-full justify-start sm:-mt-8 md:hidden">
          <div className={`${cardShell} bg-white py-6`}>
            <div className="flex h-full min-h-0 flex-col justify-center border-b-4 border-l-4 border-edu-gold border-r-0 border-t-0 px-5 py-5 md:px-9 md:py-6 lg:px-10">
              <HeroIntroText className="font-inter text-lg font-regular leading-relaxed tracking-wider text-slate-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: separator + two-column grid */}
      {/* <div className="flex flex-col gap-8 md:gap-10">
        <div className="h-px w-full bg-[#E5E5E5]" aria-hidden />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <p className="font-inter text-md font-regular leading-relaxed text-slate-600 md:text-lg">
            Our programs integrate{' '}
            <strong className="font-medium text-slate-800">
              STEM foundations, AI, data science, and automation tools
            </strong>{' '}
            with essential soft skills like teamwork, creativity, and critical thinking. Through our research-driven
            approach and partnerships with universities and industry leaders globally, we ensure that every learner gains
            both academic strength and practical readiness.
          </p>
          <p className="font-inter text-md font-regular leading-relaxed text-slate-600 md:text-lg">
            With modern interactive tools, hands-on projects, and real-world mentorship, Edunautics transforms classrooms
            into ecosystems of discovery and innovation — where students don&apos;t just learn about the future; they
            help build it.
          </p>
        </div>
      </div> */}
    </section>
  );
}
