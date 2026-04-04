import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const offers = [
  {
    title: 'Self-Paced Learning Programs',
    desc: 'Learn from anywhere with flexible scheduling',
    img: '/assets/WhatWeOffer/Self-Paced_Learning_Programs.webp',
  },
  {
    title: 'In-Person Learning Programs',
    desc: 'Face to face collaboration and hands-on experience',
    img: '/assets/WhatWeOffer/In-Person_Learning_Programs.webp',
  },
  {
    title: 'Innovation & Community Spaces',
    desc: 'Collaborative projects and networking opportunities',
    img: '/assets/WhatWeOffer/Innovation_Community_Spaces.webp',
  },
] as const;

function OfferCard({
  offer,
  className,
}: {
  offer: (typeof offers)[number];
  className?: string;
}) {
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
        <Link
          href="/services"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[4px] bg-white text-slate-900 shadow-sm transition hover:bg-slate-50"
          aria-label={`Learn more about ${offer.title}`}
        >
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}

export function WhatWeOffer() {
  return (
    <section className="py-24">
      <div className="layout-container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-6 font-general text-3xl font-medium md:text-5xl">What We Offer</h2>
          <p className="font-inter text-lg font-regular text-gray-500">
            At Edunautics, we design experiences that go beyond courses - connecting curiosity with capability and
            research with real-world application.
          </p>
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
