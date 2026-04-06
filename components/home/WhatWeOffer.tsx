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
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[4px] bg-white text-slate-900 shadow-sm transition ${detailHref ? 'hover:bg-slate-50' : 'cursor-default opacity-60'}`}
      aria-hidden={!detailHref}
    >
      <ArrowRight className="h-4 w-4" strokeWidth={2} />
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
      <div className="absolute bottom-2 left-2 right-2 flex items-start justify-between gap-3 rounded-[4px] bg-white/30 p-4 shadow-sm backdrop-blur-md">
        <div className="min-w-0 flex-1 text-left">
          <h4 className="font-general text-sm font-bold text-slate-900 md:text-base">{offer.title}</h4>
          <p className="mt-1 font-inter text-xs font-regular leading-snug text-slate-800 md:text-sm">
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
              className="h-[400px] w-[280px] snap-center md:h-[400px] md:w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
