import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col gap-12 md:gap-16">
      {/* Top: two-column grid */}
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
        <h1 className="font-general text-4xl font-medium leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
          Our Approach
        </h1>
        <div className="flex flex-col text font-general font-medium text-2xl md:text-4xl">
  {/* First line: Bridging Curiosity (900) + Research (500) */}
  <div>
    <span className="text-slate-900">Bridging Curiosity, </span>
    <span className="text-slate-500">Research, </span>
  </div>

  {/* Second line: and Real-World Impact (500) */}
  <div>
    <span className="text-slate-500">and Real-World Impact</span>
  </div>
</div>
      </div>

      {/* Middle: layered image + framed text card */}
      <div className="relative isolate w-full md:h-[670px]">
        {/* Image layer: constrained to current container width */}
        <div className="pointer-events-none absolute inset-0 z-20 hidden md:block">
          <div className="absolute left-0 top-0 h-[570px] w-[62%] overflow-hidden rounded-md">
            <Image
              src="/assets/hero-images/our-approach-hero.webp"
              alt="Abstract golden swirls representing the learning journey"
              fill
              className="scale-x-[-1] object-cover"
              priority
              sizes="(min-width: 568px) 40vw, 80vw"
            />
          </div>
        </div>

        {/* Text + ghost layer: bottom-aligned with image bottom */}
        <div className="absolute inset-0 z-30 hidden md:flex items-end justify-end pb-22">
          <div className="relative w-[70%]">
            {/* ghost underlay */}
            <div
              className="pointer-events-none absolute w-[70%] inset-0 translate-x-3 translate-y-3 bg-white/60"
              aria-hidden
            />

            <div className="relative bg-white px-8 py-8 border-r-12 border-b-12 border-edu-gold md:px-10 md:py-10">
              <p className="font-inter text-lg font-regular leading-relaxed text-slate-700 md:text-2xl">
                <span className="text-dark font-medium font-general">
                  At Edunautics, our approach to learning goes beyond courses: it&apos;s about cultivating
                </span>{' '}
                a mindset of discovery. We believe education should not stop at understanding concepts but evolve into
                creating solutions that make a difference.
              </p>
              <p className="mt-6 font-inter text-lg font-regular leading-relaxed text-slate-700 md:text-2xl">
                Our model integrates academic excellence, industry collaboration, and AI-driven exploration to ensure
                learners don&apos;t just learn: they lead the change.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="relative z-0 h-[240px] w-full overflow-hidden rounded-md sm:h-[300px] md:hidden">
          <Image
            src="/assets/hero-images/our-approach-hero.webp"
            alt="Abstract golden swirls representing the learning journey"
            fill
            className="scale-x-[-1] object-cover"
            priority
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 -mt-6 flex w-full justify-start sm:-mt-8 md:hidden">
          <div className="w-full bg-white border-r-4 border-b-4 border-edu-gold px-5 py-6">
            <p className="font-inter text-lg font-regular leading-relaxed text-slate-700">
              At Edunautics, our approach to learning goes beyond courses: it&apos;s about cultivating a mindset of
              discovery. We believe education should not stop at understanding concepts but evolve into creating solutions
              that make a difference.
            </p>
            <p className="mt-5 font-inter text-lg font-regular leading-relaxed text-slate-700">
              Our model integrates academic excellence, industry collaboration, and AI-driven exploration to ensure learners
              don&apos;t just learn: they lead the change.
            </p>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-[#B2B2B2]" aria-hidden />
    </section>
  );
}
