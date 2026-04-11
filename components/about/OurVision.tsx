import Image from 'next/image';

export default function OurVision() {
  return (
    <section className="flex flex-col gap-15 md:gap-24 py-9 md:py-15">
      {/* Top: layered image + text card */}
      <div className="relative isolate layout-container md:h-[500px]">
        {/* Desktop: 3-layer composition */}
        <div className="hidden md:block">
          {/* 1) Text block at top */}
          <div className="absolute inset-x-0 top-0 z-30 flex justify-start">
            <div className="h-[500px] w-[70%] ml-[25%] bg-white px-8 py-8 md:px-10 md:py-10 flex flex-col justify-center">
              <p className="font-inter text-xl font-medium leading-relaxed text-slate-900 md:text-2xl">
                Our programs integrate STEM foundations, AI, data science, and automation tools with essential soft skills
                like teamwork, creativity, and critical thinking.
              </p>
              <p className="mt-5 font-inter text-lg font-regular leading-relaxed text-slate-600 md:text-xl">
                Through our research-driven approach and partnerships with universities and industry leaders globally, we
                ensure that every learner gains both academic strength and practical readiness.
              </p>
              <p className="mt-5 font-inter text-lg font-regular leading-relaxed text-slate-600 md:text-xl">
                With modern interactive tools, hands-on projects, and real-world mentorship, Edunautics transforms
                classrooms into ecosystems of discovery and innovation: where learners don&apos;t just learn about the
                future; they help build it.
              </p>
            </div>
          </div>

          {/* 2) Image: bottom edge aligned with text card bottom (500px from top) */}
          <div className="absolute inset-x-0 bottom-[calc(100%-500px)] z-20">
            <div className="relative h-[580px] w-[70%] overflow-hidden rounded-md">
              <Image
                src="/assets/about-us-bg-2.webp"
                alt="Warm abstract background"
                fill
                className="object-cover"
                sizes="60vw"
              />
            </div>
          </div>

          {/* 3) Ghost frame (narrower than text block) */}
          <div className="absolute inset-x-0 top-0 z-10 flex justify-start">
            <div className="h-[500px] w-[63%] ml-[32%] translate-x-3 translate-y-3 border-r-12 border-b-12 border-edu-gold" />
          </div>
        </div>

        {/* Mobile fallback remains the same */}
        <div className="relative z-0 h-[240px] w-full overflow-hidden rounded-md sm:h-[300px] md:hidden">
          <Image
            src="/assets/about-us-bg-2.webp"
            alt="Warm abstract background"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 -mt-6 flex w-full justify-start sm:-mt-8 md:hidden">
          <div className="w-full bg-white border-r-4 border-b-4 border-edu-gold px-5 py-6">
            <p className="font-inter text-lg font-medium leading-relaxed text-slate-900">
              Our programs integrate STEM foundations...
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-6xl">
  {/* Top-left gold L: inner corner at (8,8) to match white outer corner (mx-2 my-2); box grown +8px vs border-4 so arms stay similar */}
  <div
    className="pointer-events-none absolute left-0 top-0 z-10 h-[82px] w-[98px] border-l-8 border-t-8 border-edu-gold"
    aria-hidden
  />

  {/* Bottom-right gray L: inner corner aligns with white outer BR; mirrored sizing */}
  <div
    className="pointer-events-none absolute bottom-0 right-0 z-10 h-[80px] w-[82px] border-b-8 border-r-8 border-[#B2B2B2]"
    aria-hidden
  />

  {/* Main box: 8px inset matches border-8 so accent inner corners line up with this card’s edges */}
  <div className="relative z-20 mx-2 my-2 bg-white px-8 py-8 shadow-sm md:px-10 md:py-9">
    <h2 className="font-general text-3xl md:text-4xl font-medium tracking-tight text-slate-900">
      Our Vision
    </h2>
    <p className="mt-4 max-w-4xl font-inter text-lg md:text-xl leading-relaxed font-regular text-slate-600">
      To bridge the gap between education and industry by empowering learners to turn ideas into impact: through
      curiosity, research, and technology.
    </p>
  </div>
</div>
    </section>
  );
}
