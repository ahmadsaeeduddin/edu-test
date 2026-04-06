import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { WhyChoose } from '@/components/home/WhyChoose';
import { WhatWeOffer } from '@/components/home/WhatWeOffer';
import { FAQ } from '@/components/home/FAQ';
import { CTA } from '@/components/home/CTA';
import { HomeHashScroll } from '@/components/home/HomeHashScroll';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white text-gray-900">
      <HomeHashScroll />
      <Hero />
      <About />
      <WhyChoose />
      <WhatWeOffer />
      <FAQ />
      <CTA />
    </div>
  );
}
