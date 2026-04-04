import Image from 'next/image';

const values = [
  {
    icon: '/assets/about_us-page_svgs/1.svg',
    title: 'Curiosity Over Conformity',
    body: 'Every breakthrough begins with a question. Instead of memorizing answers, we encourage learners to explore, challenge assumptions, and pursue deeper understanding.',
  },
  {
    icon: '/assets/about_us-page_svgs/2.svg',
    title: 'Research-Driven Growth',
    body: 'Every program and workshop is research-backed. We emphasize evidence-based learning that connects theory with real outcomes and prepares students to lead innovation.',
  },
  {
    icon: '/assets/about_us-page_svgs/3.svg',
    title: 'Ethical Use of AI and Technology',
    body: 'We see AI as a tool for discovery, not a shortcut. Learners understand ethics, responsibility, and social impact — building innovators who create with purpose.',
  },
  {
    icon: '/assets/about_us-page_svgs/4.svg',
    title: 'Collaboration Over Competition',
    body: 'We grow together. From peer circles to interdisciplinary teams, our spaces thrive on cooperation, shared knowledge, and mentorship that uplifts everyone.',
  },
  {
    icon: '/assets/about_us-page_svgs/5.svg',
    title: 'Real-World Relevance',
    body: 'Learning matters when it creates impact. Our content, partnerships, and projects reflect industry needs and global trends, bridging education and employment.',
  },
  {
    icon: '/assets/about_us-page_svgs/6.svg',
    title: 'Lifelong Learning Mindset',
    body: 'The world evolves, and so do we. We nurture adaptability, resilience, and a drive to learn and grow — essential for future leaders.',
  },
] as const;

export default function OurValues() {
  return (
    <section className="flex flex-col gap-12">
      <div className="mb-4 flex flex-col gap-4">
        <h2 className="font-general text-2xl font-medium tracking-tight md:text-4xl mb-6">Our Values</h2>
        <h3 className="font-inter text-xl font-regular text-slate-800 md:text-2xl">
          Principles That Power Every Learner&apos;s Journey
        </h3>
        <p className="font-inter max-w-5xl text-md font-regular text-slate-600 md:text-lg">
          At Edunautics, our values are the compass guiding how we teach, learn, and innovate. They shape our culture,
          our programs, and every collaboration - ensuring that learning isn&apos;t just about growth, but about impact
          with integrity.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {values.map((item) => (
          <div key={item.title} className="flex flex-col gap-4">
            <Image
              src={item.icon}
              alt=""
              width={64}
              height={64}
              className="h-10 w-10 shrink-0 object-contain md:h-12 md:w-12"
            />
            <h4 className="font-general text-xl font-medium">{item.title}</h4>
            <p className="font-inter text-lg font-regular leading-relaxed text-slate-500">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
