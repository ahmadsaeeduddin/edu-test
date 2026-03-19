import type { Metadata } from 'next';
import Hero from '@/components/careers/Hero';
import Intro from '@/components/careers/Intro';
import Culture from '@/components/careers/Culture';
import WhyWorkWithUs from '@/components/careers/WhyWorkWithUs';
import HiringSteps from '@/components/careers/HiringSteps';
import BottomCTA from '@/components/careers/BottomCTA';

export const metadata: Metadata = {
  title: 'Careers - Edunautics',
  description: 'Join Us in Shaping the Future of Learning',
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Hero />
      <Intro />
      <Culture />
      <WhyWorkWithUs />
      <HiringSteps />
      <BottomCTA />
    </div>
  );
}
