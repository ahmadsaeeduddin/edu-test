import { Check } from 'lucide-react';

export function About() {
  return (
    <section className="relative -mt-15 z-10 pb-20">
      <div className="max-w-7xl mx-auto px-6">
      <div className="bg-white p-12 shadow-sm">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/2">
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl md:text-3xl font-bold mb-8 flex items-center gap-4">
              About Edunautics
              <span className="h-px bg-gray-200 flex-grow"></span>
            </h2>
            <p className="text-lg md:text-3xl text-gray-400 leading-snug">
              Edunautics is more than an EdTech platform - <span className="text-gray-800">it's an initiative to reimagine education through research, innovation and industry collaboration.</span>
            </p>
          </div>
        </div>
        
        <div className="mt-20 bg-gradient-to-br from-[#2b251a] via-[#1f1a12] to-[#3a2f1e] text-white p-12 md:p-16 rounded-xl skew-card">
          <div className="unskew grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
            {[
              "Mentorship Programs",
              "Hands-On Projects",
              "Research-Driven Learning",
              "Experiential Learning",
              "Artificial Intelligence Learning",
              "Innovation Ecosystem"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="bg-white/10 p-2 rounded-full">
                  <Check className="w-5 h-5 text-orange-400" />
                </span>
                <span className="text-lg font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
