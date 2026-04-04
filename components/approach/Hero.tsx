import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="font-general text-3xl font-medium tracking-tight text-slate-900 md:text-6xl">Our Approach</h1>
        <p className="font-inter text-xl font-regular text-slate-700 md:text-2xl">
          Bridging Curiosity, Research, and Real-World Impact
        </p>
      </div>
      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-md shadow-sm mb-5">
        <Image
          src="/assets/hero-images/our-approach-hero.webp"
          alt="Abstract golden swirls representing the learning journey"
          fill
          className="scale-100 object-cover"
          priority
        />
      </div>
      <div className="flex max-w-5xl flex-col gap-6">
        <p className="font-inter text-lg font-regular leading-relaxed text-slate-600 md:text-xl">
          At Edunautics, our approach to learning goes beyond courses&mdash;it&apos;s about cultivating a mindset of discovery. We believe education should not stop at understanding concepts but evolve into creating solutions that make a difference. Every learner here is encouraged to question, explore, and innovate, transforming research into real-world outcomes.
        </p>
        <p className="font-inter text-lg font-regular leading-relaxed text-slate-600 md:text-xl">
          Our model integrates academic excellence, industry collaboration, and AI-driven exploration to ensure students don&apos;t just learn - they lead the change.
        </p>
      </div>
    </section>
  );
}
