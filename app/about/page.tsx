import type { Metadata } from 'next';
import Hero from '@/components/about/Hero';
import OurVision from '@/components/about/OurVision';
import OurValues from '@/components/about/OurValues';
import OurPromise from '@/components/about/OurPromise';
import CTA from '@/components/about/CTA';

export const metadata: Metadata = {
  title: 'About Us - Edunautics',
  description: 'Equipping Research with Tools That Create Impact Beyond Classrooms',
};

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col overflow-x-clip">
      <div className="mx-auto w-full max-w-[1200px] px-6 pt-16 pb-24 md:px-12">
        <div className="flex flex-col gap-24">
          <Hero />
          <OurVision />
        </div>
      </div>

      {/* Full viewport–width band; content stays aligned with max-w above */}
      <div className="w-full bg-light-yellow">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-24 px-6 py-24 md:px-12">
          <OurValues />
          <OurPromise />
        </div>
      </div>

      <CTA />
    </div>
  );
}
