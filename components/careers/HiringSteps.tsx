import { FileText, Code, MessageSquare, Briefcase } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: FileText,
    title: 'Application Submission',
    desc: 'Fill out expression of interest with relevant details and experience. Applications are reviewed for values alignment and core qualifications.',
    bg: 'bg-amber-600',
    opacity: 'opacity-90',
  },
  {
    num: '02',
    icon: Code,
    title: 'Technical Assessment',
    desc: 'A short, practical task relevant to the role.',
    bg: 'bg-[#1a1a1a]',
    opacity: 'opacity-80',
  },
  {
    num: '03',
    icon: MessageSquare,
    title: 'Interviews',
    desc: 'Technical discussions with the leadership team to validate expertise.',
    bg: 'bg-amber-600',
    opacity: 'opacity-90',
  },
  {
    num: '04',
    icon: Briefcase,
    title: 'Offer & Onboarding',
    desc: 'Discussion with executives to align on role expectations, followed by onboarding.',
    bg: 'bg-[#333333]',
    opacity: 'opacity-80',
    iconColor: 'text-amber-600',
  },
];

export default function HiringSteps() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl md:text-4xl font-bold">Steps of Hiring</h2>
        </div>

        {/* Mobile: horizontal scrollable cards */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 scrollbar-hide">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className={`${step.bg} text-white p-6 rounded-lg shadow-lg snap-center shrink-0 w-[280px]`}
                >
                  <span className="text-xs font-bold opacity-50 block mb-3">STEP {step.num}</span>
                  <div className="flex items-center mb-4">
                    <Icon className={`w-5 h-5 mr-3 ${step.iconColor || ''}`} />
                    <h4 className="text-base font-bold">{step.title}</h4>
                  </div>
                  <p className={`text-sm ${step.opacity} leading-relaxed`}>{step.desc}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">Swipe to see all steps</p>
        </div>

        {/* Desktop: staggered layout */}
        <div className="hidden md:block relative min-h-[600px]">
          <div className="absolute inset-0 grid grid-cols-4 pointer-events-none">
            <div className="border-r border-gray-200 border-dashed"></div>
            <div className="border-r border-gray-200 border-dashed"></div>
            <div className="border-r border-gray-200 border-dashed"></div>
            <div></div>
          </div>

          <div className="grid grid-cols-4 absolute top-0 left-0 w-full text-gray-300 pointer-events-none">
            <div className="px-4 text-sm font-bold">01</div>
            <div className="px-4 text-sm font-bold">02</div>
            <div className="px-4 text-sm font-bold">03</div>
            <div className="px-4 text-sm font-bold">04</div>
          </div>

          <div className="relative pt-12">
            <div className="w-1/2 mb-12">
              <div className="bg-amber-600 text-white p-8 rounded-lg shadow-lg max-w-sm ml-4">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 mr-3" />
                  <h4 className="text-lg font-bold">Application Submission</h4>
                </div>
                <p className="text-sm opacity-90 leading-relaxed">
                  Fill out expression of interest with relevant details and experience. Applications are reviewed for values alignment and core qualifications.
                </p>
              </div>
            </div>

            <div className="w-full flex justify-center mb-12">
              <div className="bg-[#1a1a1a] text-white p-8 rounded-lg shadow-lg max-w-sm mr-20">
                <div className="flex items-center mb-4">
                  <Code className="w-6 h-6 mr-3" />
                  <h4 className="text-lg font-bold">Technical Assessment</h4>
                </div>
                <p className="text-sm opacity-80 leading-relaxed">
                  A short, practical task relevant to the role.
                </p>
              </div>
            </div>

            <div className="w-full flex justify-end mb-12">
              <div className="bg-amber-600 text-white p-8 rounded-lg shadow-lg max-w-sm mr-40">
                <div className="flex items-center mb-4">
                  <MessageSquare className="w-6 h-6 mr-3" />
                  <h4 className="text-lg font-bold">Interviews</h4>
                </div>
                <p className="text-sm opacity-90 leading-relaxed">
                  Technical discussions with the leadership team to validate expertise.
                </p>
              </div>
            </div>

            <div className="w-full flex justify-end">
              <div className="bg-[#333333] text-white p-8 rounded-lg shadow-lg max-w-sm mr-4">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-6 h-6 mr-3 text-amber-600" />
                  <h4 className="text-lg font-bold">Offer &amp; Onboarding</h4>
                </div>
                <p className="text-sm opacity-80 leading-relaxed">
                  Discussion with executives to align on role expectations, followed by onboarding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
