import Image from 'next/image';

export default function WhyItWorks() {
  return (
    <section className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <h2 className="mb-16 text-center font-general text-2xl font-medium tracking-tight text-slate-900 md:text-4xl">
          Why Our Approach Works
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-md overflow-hidden relative aspect-square">
            <Image
              src="/assets/why_it_works-image.webp"
              alt="Supporting abstract imagery"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-12 relative">
            <div className="absolute left-[-1.5rem] top-2 bottom-2 w-1.5 bg-edu-gold rounded-full"></div>

            <div className="relative pl-8">
              <div className="absolute left-[-2.05rem] top-1 w-4 h-4 rounded-full bg-white border-4 border-edu-gold"></div>
              <h3 className="mb-3 font-general text-xl font-medium">Hands-on, Mentor-Led Learning</h3>
              <p className="font-inter font-regular leading-relaxed text-slate-600">
                Every program combines guided exploration with teamwork and personalized mentorship.
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-[-2.05rem] top-1 w-4 h-4 rounded-full bg-white border-4 border-edu-gold"></div>
              <h3 className="mb-3 font-general text-xl font-medium">Community &amp; Collaboration</h3>
              <p className="font-inter font-regular leading-relaxed text-slate-600">
                Open learning circles and innovation labs create spaces for knowledge exchange and creativity.
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-[-2.05rem] top-1 w-4 h-4 rounded-full bg-white border-4 border-edu-gold"></div>
              <h3 className="mb-3 font-general text-xl font-medium">Continuous Evolution</h3>
              <p className="font-inter font-regular leading-relaxed text-slate-600">
                We adapt our courses and research tracks with the evolving EdTech landscape to stay ahead of trends.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center max-w-4xl mx-auto">
          <p className="font-inter text-xl font-regular leading-tight text-slate-700 md:text-2xl">
            At Edunautics, learning is not{' '}
            <span className="font-medium">just preparation for the future - it creates the future.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
