import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Application Received - Edunautics',
  description: 'Thank you for applying to Edunautics.',
};

export default function ApplicationReceivedPage() {
  return (
    <div className="bg-[#F9FAFB] text-[#111827] flex-grow flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="mb-8 flex justify-center">
          <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-[#EAB308] rounded-md inline-block relative overflow-hidden">
            <svg fill="none" height="40" viewBox="0 0 60 40" width="60" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H56V36H4V4Z" stroke="#EAB308" strokeWidth="2.5"></path>
              <path d="M4 4L30 22L56 4" stroke="#EAB308" strokeWidth="2.5"></path>
            </svg>
          </div>
        </div>
        <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl md:text-5xl font-bold text-[#111827] mb-6 tracking-tight">
          Thank you for Applying!
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-xl mx-auto">
          Every application is carefully reviewed by our team. If your experience aligns with what we&apos;re building at Edunautics, we&apos;ll be in touch. Thank you for considering a future with us.
        </p>
        <div className="flex justify-center">
          <Link
            className="inline-block border border-gray-300 bg-white text-sm font-medium text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
            href="/apply"
          >
            Submit Another Application
          </Link>
        </div>
      </div>
    </div>
  );
}
