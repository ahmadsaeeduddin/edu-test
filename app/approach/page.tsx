import type { Metadata } from 'next';
import Hero from '@/components/approach/Hero';
import CorePillars from '@/components/approach/CorePillars';
import WhyItWorks from '@/components/approach/WhyItWorks';
import OurImpact from '@/components/approach/OurImpact';
import ImpactInNumbers from '@/components/approach/ImpactInNumbers';
import CTA from '@/components/approach/CTA';

export const metadata: Metadata = {
  title: 'Our Approach: Edunautics',
  description: 'Bridging Curiosity, Research, and Real-World Impact',
};

export default function ApproachPage() {
  return (
    <div className="flex w-full flex-col overflow-x-clip">
      <div className="mx-auto w-full max-w-[1200px] px-6 pt-16 pb-24 md:px-12">
        <Hero />
      </div>
      <CorePillars />
      <WhyItWorks />
      {/* Full viewport-width band; content aligned with max-w above (same as About OurValues / OurPromise) */}
      <div className="w-full bg-light-yellow">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col px-6 py-24 md:px-12">
          <OurImpact />
        </div>
      </div>
      <ImpactInNumbers />
      <CTA />
    </div>
  );
}
