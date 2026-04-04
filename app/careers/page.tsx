import type { Metadata } from 'next';
import Hero from '@/components/careers/Hero';
import Intro from '@/components/careers/Intro';
import Culture from '@/components/careers/Culture';
import WhyWorkWithUs from '@/components/careers/WhyWorkWithUs';
import HiringSteps from '@/components/careers/HiringSteps';
import CTA from '@/components/about/CTA';

export const metadata: Metadata = {
  title: 'Careers - Edunautics',
  description: 'Join Us in Shaping the Future of Learning',
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white font-inter text-gray-900">
      <Hero />
      <Intro />
      {/* Full viewport–width band; content aligned with max-w (same pattern as About OurValues / OurPromise) */}
      <div className="w-full bg-light-bg">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-24 px-6 py-24 md:px-12">
          <Culture />
          <WhyWorkWithUs />
        </div>
      </div>
      <HiringSteps />
      <CTA />
    </div>
  );
}
