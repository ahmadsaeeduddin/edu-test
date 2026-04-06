import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getWhatWeOfferProgramBySlug } from '@/data/whatWeOffer';
import { Hero } from '@/components/services/Hero';
import Features from '@/components/services/Features';
import CTA from '@/components/about/CTA';

const SELF_PACED_SLUG = 'self-paced' as const;

export async function generateMetadata(): Promise<Metadata> {
  const program = getWhatWeOfferProgramBySlug(SELF_PACED_SLUG);
  if (!program) {
    return { title: 'Programs - Edunautics' };
  }
  return {
    title: `${program.title} - Edunautics`,
    description: program.summary,
  };
}

export default function ServicesPage() {
  const program = getWhatWeOfferProgramBySlug(SELF_PACED_SLUG);
  if (!program) notFound();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="flex-1">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-12">
          <Hero program={program} />
          <Features program={program} />
        </div>
        <CTA />
      </div>
    </div>
  );
}
