import type { Metadata } from 'next';
import { Hero } from '@/components/apply/Hero';
import { ApplicationForm } from '@/components/apply/ApplicationForm';

export const metadata: Metadata = {
  title: 'Apply Now - Edunautics',
  description: 'Apply now to join Edunautics',
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Hero />
        <ApplicationForm />
      </div>
    </div>
  );
}
