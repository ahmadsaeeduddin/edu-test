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
        <p className="font-general font-medium mb-6 text-lg md:text-xl ">Careers</p>
        <h1 className="font-general text-3xl md:text-6xl font-medium leading-tight mb-8">
          Join Us in Shaping the <br />Future of Learning
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl leading-relaxed">
          Help us redefine education through research, technology, and innovation.
        </p>
        <div className="flex space-x-4">
          <Link
            href="#culture"
            className="btn-dual-line inline-flex items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 font-medium font-general text-white transition-colors hover:border-slate-900 hover:bg-white hover:text-slate-900"
          >
            <span className="btn-dual-line__viewport">
              <span className="btn-dual-line__stack">
                <span className="btn-dual-line__line">Our Culture</span>
                <span className="btn-dual-line__line">Our Culture</span>
              </span>
            </span>
          </Link>
          <Link
            href="/apply"
            className="btn-dual-line inline-flex items-center justify-center rounded-md border border-white px-8 py-3 font-general font-medium text-white transition-colors hover:border-edu-gold hover:bg-white hover:text-edu-gold"
          >
            <span className="btn-dual-line__viewport">
              <span className="btn-dual-line__stack">
                <span className="btn-dual-line__line">Apply Now</span>
                <span className="btn-dual-line__line">Apply Now</span>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
