import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Intro() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed font-normal">
          At Edunautics, we&apos;re building more than programs - we&apos;re building a movement that connects research, technology, and industry to create meaningful impact. <span className="font-bold text-black">If you&apos;re passionate about innovation, education, and real-world problem-solving, we&apos;d love to work with you.</span>
        </p>
        <Link href="/apply" className="inline-flex items-center mt-12 text-gray-500 hover:text-black transition group">
          Explore Opportunities
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
