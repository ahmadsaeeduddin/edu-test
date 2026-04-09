import Image from 'next/image';

export default function OurVision() {
  return (
    <section className="flex flex-col gap-10">
      {/* Top: layered image + text card */}
      <div className="relative isolate w-full md:h-[560px]">
        {/* Desktop: 3-layer composition */}
        <div className="hidden md:block">
          {/* 1) Text block at top */}
          <div className="absolute inset-x-0 top-0 z-30 flex justify-end">
            <div className="h-[420px] w-[78%] bg-white px-8 py-8 md:px-10 md:py-10">
              <p className="font-inter text-lg font-medium leading-relaxed text-slate-900 md:text-xl">
                Our programs integrate STEM foundations, AI, data science, and automation tools with essential soft skills
                like teamwork, creativity, and critical thinking.
              </p>
              <p className="mt-5 font-inter text-lg font-regular leading-relaxed text-slate-600 md:text-xl">
                Through our research-driven approach and partnerships with universities and industry leaders globally, we
                ensure that every learner gains both academic strength and practical readiness.
              </p>
              <p className="mt-5 font-inter text-lg font-regular leading-relaxed text-slate-600 md:text-xl">
                With modern interactive tools, hands-on projects, and real-world mentorship, Edunautics transforms
                classrooms into ecosystems of discovery and innovation - where students don&apos;t just learn about the
                future; they help build it.
              </p>
            </div>
          </div>

          {/* 2) Image block with bottom aligned to text block */}
          <div className="absolute inset-x-0  z-20 -top-12">
            <div className="relative h-[468px] w-[68%] overflow-hidden rounded-md">
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
          <div className="absolute inset-x-0 top-0 z-10 flex justify-end">
            <div className="h-[420px] w-[70%] translate-x-1 translate-y-1 border-r-4 border-b-4 border-edu-gold" />
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
  {/* Top Left Accent - Adjusted to start exactly where the white box starts */}
  <div
    className="pointer-events-none absolute left-0 top-0 h-[74px] w-[90px] border-l-4 border-t-4 border-edu-gold z-10"
    aria-hidden
  />
  
  {/* Bottom Right Accent - Adjusted to overlap the white box */}
  <div
    className="pointer-events-none absolute bottom-0 right-0 h-[72px] w-[74px] border-b-4 border-r-4 border-[#B2B2B2] z-10"
    aria-hidden
  />

  {/* Main Content Box - Added margins to allow the "ghost" borders to peak out */}
  <div className="relative bg-white mx-1 my-1 px-8 py-8 md:px-10 md:py-9 shadow-sm">
    <h2 className="font-general text-3xl md:text-4xl font-medium tracking-tight text-slate-900">
      Our Vision
    </h2>
    <p className="mt-4 max-w-4xl font-inter text-lg md:text-xl leading-relaxed font-regular text-slate-600">
      To bridge the gap between education and industry by empowering learners to turn ideas into impact - through
      curiosity, research, and technology.
    </p>
  </div>
</div>
    </section>
  );
}
