import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/services/Breadcrumb';
import { Hero } from '@/components/services/Hero';
import { Features } from '@/components/services/Features';
import { CtaBand } from '@/components/services/CtaBand';

export const metadata: Metadata = {
  title: 'Self-Paced Learning Programs - Edunautics',
  description: 'Self-Paced Learning Programs',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-1">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full">
          <Breadcrumb />
          <Hero />
          <Features />
        </div>
        <CtaBand />
      </div>
    </div>
  );
}
