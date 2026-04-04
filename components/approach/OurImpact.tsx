import Image from 'next/image';

const impactItems = [
  {
    icon: '/assets/our_impact-svgs/1-student.svg',
    title: 'Empowering Students as Innovators',
    body: "Through our workshops, bootcamps, and research labs, learners don't just study emerging technologies - they use them to create. From building AI-powered prototypes to developing community-focused projects, our students turn ideas into solutions with measurable social and industrial value.",
  },
  {
    icon: '/assets/our_impact-svgs/2-building.svg',
    title: 'Bridging Academia and Industry',
    body: 'Our collaborations with universities, research hubs, and tech companies connect learners directly to professional ecosystems. These partnerships translate academic curiosity into employable skills, internships, and innovation pipelines that strengthen both the education and technology sectors.',
  },
  {
    icon: '/assets/our_impact-svgs/3-search.svg',
    title: 'Research with Purpose',
    body: 'We champion research that drives transformation — AI models improving education systems, STEM solutions tackling sustainability challenges, and data-driven innovations reimagining how learning happens. Each project at Edunautics is a step toward building a smarter, more inclusive future.',
  },
  {
    icon: '/assets/our_impact-svgs/4-framework.svg',
    title: 'Community and Collaboration',
    body: 'Our open learning circles and peer-driven communities foster collaboration, creativity, and confidence. By connecting students, mentors, and organizations, we build networks that last well beyond graduation.',
  },
] as const;

export default function OurImpact() {
  return (
    <section className="flex flex-col">
      <div className="mb-16">
        <h2 className="mb-6 font-general text-2xl font-medium tracking-tight text-slate-900 md:text-4xl">Our Impact</h2>
        <p className="mb-6 font-inter text-xl font-regular text-slate-800 md:text-2xl">
          Principles That Power Every Learner&apos;s Journey
        </p>
        <p className="max-w-4xl font-inter font-regular leading-relaxed text-slate-600 md:text-lg">
          At Edunautics, impact is not a buzzword &mdash; it&apos;s our benchmark. Every program, partnership, and research initiative is designed to create meaningful outcomes that extend far beyond classrooms. We measure our success not just by what students learn, but by how they apply it to solve real problems, shape industries, and inspire others.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-20 gap-y-16 md:grid-cols-2">
        {impactItems.map((item) => (
          <div key={item.title}>
            <div className="mb-4">
              <Image
                src={item.icon}
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 shrink-0 object-contain"
              />
            </div>
            <h3 className="mb-4 font-general text-xl font-medium">{item.title}</h3>
            <p className="font-inter text-lg font-regular leading-relaxed text-slate-600">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
