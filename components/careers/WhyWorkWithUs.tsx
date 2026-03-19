import { Check } from 'lucide-react';

export default function WhyWorkWithUs() {
  const reasons = [
    "Work on cutting-edge AI and STEM initiatives",
    "Collaborate with universities and industry leaders",
    "Flexible, innovation-focused environment",
    "Opportunity to shape future-ready education",
    "Meaningful projects with real-world outcomes"
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl md:text-3xl font-bold mb-12">Why Work With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <span className="text-gray-700 font-medium">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
