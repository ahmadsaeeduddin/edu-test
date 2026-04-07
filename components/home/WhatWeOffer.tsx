import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  WHAT_WE_OFFER_SECTION_INTRO,
  WHAT_WE_OFFER_SECTION_TITLE,
  whatWeOfferPrograms,
} from '@/data/whatWeOffer';

const offers = whatWeOfferPrograms.map((p) => ({
  id: p.id,
  title: p.title,
  desc: p.cardDescription,
  img: p.cardImage,
}));

function OfferCard({
  offer,
  className,
}: {
  offer: (typeof offers)[number];
  className?: string;
}) {
  const detailHref = offer.id === 'self-paced' ? '/services' : null;
  const cta = (
    <span
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[4px] bg-white text-slate-900 shadow-sm transition duration-300 ease-out group-hover:scale-[1.06] group-hover:shadow-md group-hover:ring-1 group-hover:ring-black/5 ${
        detailHref ? 'hover:bg-slate-50' : 'cursor-default'
      }`}
      aria-hidden={!detailHref}
    >
      <ArrowRight
        className="h-4 w-4 text-slate-900 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
        strokeWidth={2}
      />
    </span>
  );

  return (
    <div
      className={`group relative shrink-0 overflow-hidden rounded-[4px] ${className ?? ''}`}
    >
      <Image
        alt={offer.title}
        src={offer.img}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        sizes="(max-width: 768px) 280px, 33vw"
      />
      <div className="absolute bottom-2 left-2 right-2 box-border flex h-[98px] min-h-[98px] max-h-[98px] shrink-0 items-start justify-between gap-2 overflow-hidden rounded-[4px] bg-white/60 px-3 py-2 shadow-sm backdrop-blur-md">
        <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-start overflow-hidden text-left">
          <h4 className="line-clamp-2 font-general text-base md:text-lg font-medium leading-tight text-slate-900">
            {offer.title}
          </h4>
          <p className="mt-1 line-clamp-2 font-inter text-sm font-regular leading-snug text-slate-800 md:text-md">
            {offer.desc}
          </p>
        </div>
        {detailHref ? (
          <Link
            href={detailHref}
            className="shrink-0"
            aria-label={`Learn more about ${offer.title}`}
          >
            {cta}
          </Link>
        ) : (
          <span className="shrink-0" aria-label={`${offer.title} — details coming soon`}>
            {cta}
          </span>
        )}
      </div>
    </div>
  );
}

export function WhatWeOffer() {
  return (
    <section className="py-24">
      <div className="layout-container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-6 font-general text-3xl font-medium md:text-5xl">{WHAT_WE_OFFER_SECTION_TITLE}</h2>
          <p className="font-inter text-lg font-regular text-gray-500">{WHAT_WE_OFFER_SECTION_INTRO}</p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
          {offers.map((offer) => (
            <OfferCard
              key={offer.title}
              offer={offer}
              className="h-[460px] w-[280px] snap-center md:h-[400px] md:w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
