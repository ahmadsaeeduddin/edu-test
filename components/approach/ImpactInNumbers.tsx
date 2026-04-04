import { Check } from 'lucide-react';

export default function ImpactInNumbers() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <h2 className="mb-4 font-general text-2xl font-medium tracking-tight text-slate-900 md:text-4xl">Impact in Numbers</h2>
        <p className="mb-12 font-inter text-lg font-regular text-slate-600">Our growth reflects the real change we&apos;re creating in education and innovation.</p>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="bg-edu-gold rounded-full p-1">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <p className="font-inter text-lg font-regular text-slate-700">500+ students trained through AI and STEM bootcamps</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-edu-gold rounded-full p-1">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <p className="font-inter text-lg font-regular text-slate-700">
              Our growth reflects the real change we&apos;re creating in education and innovation.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-edu-gold rounded-full p-1">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <p className="font-inter text-lg font-regular text-slate-700">Dozens of student-led projects turned into real-world prototypes</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-edu-gold rounded-full p-1">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <p className="font-inter text-lg font-regular text-slate-700">
              A growing network of mentors and collaborators from academia and industry
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
