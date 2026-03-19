import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { WhyChoose } from '@/components/home/WhyChoose';
import { WhatWeOffer } from '@/components/home/WhatWeOffer';
import { FAQ } from '@/components/home/FAQ';
import { Testimonials } from '@/components/home/Testimonials';
import { CTA } from '@/components/home/CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <About />
      <WhyChoose />
      <WhatWeOffer />
      <FAQ />
      <Testimonials />
      <CTA />
    </div>
  );
}
