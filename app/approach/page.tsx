import type { Metadata } from 'next';
import Hero from '@/components/approach/Hero';
import CorePillars from '@/components/approach/CorePillars';
import WhyItWorks from '@/components/approach/WhyItWorks';
import OurImpact from '@/components/approach/OurImpact';
import ImpactInNumbers from '@/components/approach/ImpactInNumbers';
import CTA from '@/components/approach/CTA';

export const metadata: Metadata = {
  title: 'Our Approach - Edunautics',
  description: 'Bridging Curiosity, Research, and Real-World Impact',
};

export default function ApproachPage() {
  return (
    <div className="bg-white text-gray-800">
      <Hero />
      <CorePillars />
      <WhyItWorks />
      <OurImpact />
      <ImpactInNumbers />
      <CTA />
    </div>
  );
}
