import Image from 'next/image';
import Link from 'next/link';
import type { WhatWeOfferProgram } from '@/data/whatWeOffer';

export function Hero({ program }: { program: WhatWeOfferProgram }) {
  const heroImage = program.id === 'self-paced' ? '/selfpaced1.png' : program.cardImage;
  const heroAlt = `${program.title}: program overview`;

  return (
    <section className="bg-white">
      <div className="pb-6 pt-10 md:pb-8 md:pt-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-inter text-sm font-regular text-slate-600 transition-colors hover:text-slate-900"
        >
          <span aria-hidden className="text-slate-500">
            &lt;
          </span>
          Back to Homepage
        </Link>
      </div>

      <div className="grid grid-cols-1 items-center gap-12 pb-16 md:grid-cols-2 md:gap-14 lg:gap-20">
        <div className="max-w-xl">
          <h1 className="mb-6 font-general text-3xl font-medium tracking-tight text-slate-900 md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {program.title}
          </h1>
          <p className="font-inter text-base font-regular leading-relaxed text-slate-600 md:text-lg">{program.summary}</p>
        </div>

        <div className="relative mx-auto w-full max-w-md md:max-w-lg">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
            <Image
              src={heroImage}
              alt={heroAlt}
              fill
              className="object-contain object-center"
              sizes="(min-width: 768px) 28rem, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
