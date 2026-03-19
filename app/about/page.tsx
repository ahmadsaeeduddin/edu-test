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
    <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-24 py-16 px-6 md:px-12">
      <Hero />
      <OurVision />
      <OurValues />
      <OurPromise />
      <CTA />
    </div>
  );
}
