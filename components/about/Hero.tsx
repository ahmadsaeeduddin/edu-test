import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="font-general text-slate-900 text-3xl md:text-6xl font-medium tracking-tight">
          About Edunautics
        </h1>
        <p className="text-slate-700 text-xl md:text-2xl font-inter font-regular">
          Equipping Research with Tools That Create Impact Beyond Classrooms
        </p>
      </div>
      <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-sm relative">
        <Image
          alt="Abstract orange waves"
          className="object-cover scale-100"
          fill
          priority
          src="/assets/hero-images/about-us-hero.webp"
        />
      </div>
    </section>
  );
}
