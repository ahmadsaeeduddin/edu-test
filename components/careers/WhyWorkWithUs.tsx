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
    <section className="flex flex-col">
      <h2 className="mb-12 font-general font-medium text-2xl md:text-4xl">Why Work With Us</h2>
      <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="grid grid-cols-[1.5rem_minmax(0,1fr)] items-start gap-x-4 md:gap-x-5"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-edu-gold">
              <Check className="h-4 w-4 text-white" strokeWidth={3} />
            </div>
            <span className="max-w-md font-general text-md font-medium text-gray-700 md:max-w-lg md:text-lg">
              {reason}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
