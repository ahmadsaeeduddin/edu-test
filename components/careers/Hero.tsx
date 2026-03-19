import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative text-white pt-32 pb-48 overflow-hidden">
      <Image
        src="/Career.jpg"
        alt="Careers at Edunautics"
        fill
        className="object-cover object-[70%_100%]"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/80 via-amber-600/70 to-amber-700/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.2)_0%,transparent_60%)]" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        <p className="text-lg font-medium mb-6">Careers</p>
        <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl md:text-6xl font-bold leading-tight mb-8">
          Join Us in Shaping the <br />Future of Learning
        </h1>
        <p className="text-xl opacity-90 mb-10 max-w-2xl leading-relaxed">
          Help us redefine education through research, technology, and innovation.
        </p>
        <div className="flex space-x-4">
          <Link href="#culture" className="bg-black text-white px-8 py-3 rounded text-sm font-semibold hover:bg-gray-900 transition">
            Our Culture
          </Link>
          <Link href="/apply" className="border border-white text-white px-8 py-3 rounded text-sm font-semibold hover:bg-white hover:text-amber-600 transition">
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}
