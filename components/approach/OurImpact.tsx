import { Users, Building2, Search, Network } from 'lucide-react';

export default function OurImpact() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="mb-6 font-general text-2xl font-medium tracking-tight text-slate-900 md:text-4xl">Our Impact</h2>
          <p className="mb-6 font-inter text-xl font-regular text-slate-800 md:text-2xl">
            Principles That Power Every Learner&apos;s Journey
          </p>
          <p className="max-w-4xl font-inter font-regular leading-relaxed text-slate-600 md:text-lg">
            At Edunautics, impact is not a buzzword &mdash; it&apos;s our benchmark. Every program, partnership, and research initiative is designed to create meaningful outcomes that extend far beyond classrooms. We measure our success not just by what students learn, but by how they apply it to solve real problems, shape industries, and inspire others.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          <div>
            <div className="text-edu-gold mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="mb-4 font-general text-xl font-medium">Empowering Students as Innovators</h3>
            <p className="font-inter font-regular leading-relaxed text-slate-600 text-lg">
              Through our workshops, bootcamps, and research labs, learners don&apos;t just study emerging technologies - they use them to create. From building AI-powered prototypes to developing community-focused projects, our students turn ideas into solutions with measurable social and industrial value.
            </p>
          </div>

          <div>
            <div className="text-edu-gold mb-4">
              <Building2 className="w-8 h-8" />
            </div>
            <h3 className="mb-4 font-general text-xl font-medium">Bridging Academia and Industry</h3>
            <p className="font-inter font-regular leading-relaxed text-slate-600 text-lg">
              Our collaborations with universities, research hubs, and tech companies connect learners directly to professional ecosystems. These partnerships translate academic curiosity into employable skills, internships, and innovation pipelines that strengthen both the education and technology sectors.
            </p>
          </div>

          <div>
            <div className="text-edu-gold mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="mb-4 font-general text-xl font-medium">Research with Purpose</h3>
            <p className="font-inter font-regular leading-relaxed text-slate-600 text-lg">
              We champion research that drives transformation — AI models improving education systems, STEM solutions tackling sustainability challenges, and data-driven innovations reimagining how learning happens. Each project at Edunautics is a step toward building a smarter, more inclusive future.
            </p>
          </div>

          <div>
            <div className="text-edu-gold mb-4">
              <Network className="w-8 h-8" />
            </div>
            <h3 className="mb-4 font-general text-xl font-medium">Community and Collaboration</h3>
            <p className="font-inter font-regular leading-relaxed text-slate-600 text-lg">
              Our open learning circles and peer-driven communities foster collaboration, creativity, and confidence. By connecting students, mentors, and organizations, we build networks that last well beyond graduation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
