import Image from 'next/image';

const steps = [
  {
    num: '01',
    iconSrc: '/assets/hiring_svgs/1-files.svg',
    title: 'Application Submission',
    desc: 'Fill out expression of interest with relevant details and experience. Applications are reviewed for values alignment and core qualifications.',
    cardClass: 'hiring-step-card-gold',
    opacity: 'opacity-90',
  },
  {
    num: '02',
    iconSrc: '/assets/hiring_svgs/2-check_list.svg',
    title: 'Technical Assessment',
    desc: 'A short, practical task relevant to the role.',
    cardClass: 'hiring-step-card-dark',
    opacity: 'opacity-80',
  },
  {
    num: '03',
    iconSrc: '/assets/hiring_svgs/3-chat.svg',
    title: 'Interviews',
    desc: 'Technical discussions with the leadership team to validate expertise.',
    cardClass: 'hiring-step-card-gold',
    opacity: 'opacity-90',
  },
  {
    num: '04',
    iconSrc: '/assets/hiring_svgs/4-checkmark.svg',
    title: 'Offer & Onboarding',
    desc: 'Discussion with executives to align on role expectations, followed by onboarding.',
    cardClass: 'hiring-step-card-dark',
    opacity: 'opacity-80',
  },
] as const;

const desktopLayouts = [
  { row: 'w-1/2 mb-12', card: 'ml-4' },
  { row: 'w-full flex justify-center mb-12', card: 'mr-20' },
  { row: 'w-full flex justify-end mb-12', card: 'mr-40' },
  { row: 'w-full flex justify-end', card: 'mr-4' },
] as const;

export default function HiringSteps() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="mb-12 text-center md:mb-20">
          <h2 className="font-general text-3xl font-medium md:text-5xl">Steps of Hiring</h2>
        </div>

        {/* Mobile: vertical stack */}
        <div className="flex flex-col gap-6 md:hidden">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`${step.cardClass} w-full rounded-2xl p-6 text-white shadow-lg`}
            >
              <span className="mb-3 block font-general text-sm font-medium opacity-70">STEP {step.num}</span>
              <div className="mb-4 flex items-center">
                <Image
                  src={step.iconSrc}
                  alt=""
                  width={20}
                  height={20}
                  className="mr-3 h-5 w-5 shrink-0 object-contain"
                />
                <h4 className="text-base font-bold">{step.title}</h4>
              </div>
              <p className={`text-sm leading-relaxed ${step.opacity}`}>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Desktop: staggered layout — vertical guide under each step number */}
        <div className="relative hidden min-h-[600px] md:block">
          <div className="pointer-events-none absolute inset-0 grid grid-cols-4">
            {steps.map((step) => (
              <div key={step.num} className="flex h-full min-h-0 flex-col items-center px-2">
                <span className="shrink-0 font-general text-xl font-medium text-gray-300">{step.num}</span>
                <div className="mt-3 w-px flex-1 bg-verticalSeparator/70" aria-hidden />
              </div>
            ))}
          </div>

          <div className="relative z-10 pt-12">
            {steps.map((step, index) => {
              const layout = desktopLayouts[index];
              return (
                <div key={step.num} className={layout.row}>
                  <div
                    className={`${step.cardClass} w-xl rounded-2xl p-8 text-white shadow-lg ${layout.card}`}
                  >
                    <div className="mb-4 flex items-center">
                      <Image
                        src={step.iconSrc}
                        alt=""
                        width={24}
                        height={24}
                        className="mr-3 h-6 w-6 shrink-0 object-contain"
                      />
                      <h4 className="text-lg md:text-xl font-medium font-general">{step.title}</h4>
                    </div>
                    <p className={`text-sm md:text-md font-inter font-regular ${step.opacity}`}>{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
