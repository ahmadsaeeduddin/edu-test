import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getWhatWeOfferProgramBySlug, whatWeOfferSlugs } from '@/data/whatWeOffer';
import { Hero } from '@/components/services/Hero';
import Features from '@/components/services/Features';
import CTA from '@/components/about/CTA';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return whatWeOfferSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getWhatWeOfferProgramBySlug(slug);
  if (!program) {
    return { title: 'Programs: Edunautics' };
  }
  return {
    title: `${program.title}: Edunautics`,
    description: program.summary,
  };
}

export default async function ServiceProgramPage({ params }: PageProps) {
  const { slug } = await params;
  const program = getWhatWeOfferProgramBySlug(slug);
  if (!program) notFound();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="flex-1">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-12">
          <Hero program={program} />
        </div>
        <div className="w-full bg-light-bg py-24 ">
          <div className="mx-auto w-full max-w-[1200px] px-6 md:px-12">
            <Features program={program} />
          </div>
        </div>
        <CTA />
      </div>
    </div>
  );
}
