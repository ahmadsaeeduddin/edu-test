'use client';

import { useRef } from 'react';
import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { WhyChoose } from '@/components/home/WhyChoose';
import { WhatWeOffer } from '@/components/home/WhatWeOffer';
import { FAQ } from '@/components/home/FAQ';
import { CTA } from '@/components/home/CTA';
import { HomeHashScroll } from '@/components/home/HomeHashScroll';

export default function Home() {
  const whatWeOfferRef = useRef<HTMLElement>(null);

  return (
    <div className="min-h-screen overflow-x-clip bg-white text-gray-900">
      <HomeHashScroll />
      <Hero whatWeOfferRef={whatWeOfferRef} />
      <About />
      <WhyChoose />
      <WhatWeOffer ref={whatWeOfferRef} />
      <FAQ />
      <CTA />
    </div>
  );
}
