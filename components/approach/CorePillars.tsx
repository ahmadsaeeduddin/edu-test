function PillarSeparator() {
  return <div className="pillar-column-separator hidden md:block" aria-hidden />;
}

export default function CorePillars() {
  return (
    <section className="w-full bg-light-bg py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-12">
        <div className="mb-20 flex flex-col gap-12 md:flex-row md:items-stretch md:gap-8">
          <div className="min-w-0 flex-1">
            <span className="font-inter text-lg font-bold text-pillarNumber">01</span>
            <h3 className="mb-4 mt-2 font-general text-xl font-medium md:text-2xl">Research at the Core</h3>
            <p className="font-inter text-md font-regular leading-relaxed text-slate-600 md:text-lg">
              We begin with curiosity. Our programs are built on research-based learning where students question deeply, experiment confidently, and transform insights into real innovation.
            </p>
          </div>
          <PillarSeparator />
          <div className="min-w-0 flex-1">
            <span className="font-inter text-lg font-bold text-pillarNumber">02</span>
            <h3 className="mb-4 mt-2 font-general text-xl font-medium md:text-2xl">AI as an Enabler</h3>
            <p className="font-inter text-md font-regular leading-relaxed text-slate-600 md:text-lg">
              AI is more than a subject &mdash; it&apos;s a tool for discovery. We use it to foster critical thinking, creative automation, and new possibilities beyond traditional education.
            </p>
          </div>
          <PillarSeparator />
          <div className="min-w-0 flex-1">
            <span className="font-inter text-lg font-bold text-pillarNumber">03</span>
            <h3 className="mb-4 mt-2 font-general text-xl font-medium md:text-2xl">Industry-Relevant Learning</h3>
            <p className="font-inter text-md font-regular leading-relaxed text-slate-600 md:text-lg">
              Through partnerships with universities, research labs and companies, students gain access to advanced tools, expert mentors, and hands-on experience aligned with global standards.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-12 md:flex-row md:items-stretch md:gap-8">
          <div className="min-w-0 flex-1">
            <span className="font-inter text-lg font-bold text-pillarNumber">04</span>
            <h3 className="mb-4 mt-2 font-general text-xl font-medium md:text-2xl">From Classroom to Impact</h3>
            <p className="font-inter text-md font-regular leading-relaxed text-slate-600 md:text-lg">
              Learning extends beyond lectures. Students apply ideas in innovation labs, community projects, and industry collaborations - turning theory into meaningful outcomes.
            </p>
          </div>
          <PillarSeparator />
          <div className="min-w-0 flex-1">
            <span className="font-inter text-lg font-bold text-pillarNumber">05</span>
            <h3 className="mb-4 mt-2 font-general text-xl font-medium md:text-2xl">Skills for the Future</h3>
            <p className="font-inter text-md font-regular leading-relaxed text-slate-600 md:text-lg">
              We combine STEM, AI, and data science with communication, leadership, and problem-solving skills - preparing learners not just for exams, but for long-term success.
            </p>
          </div>
          <div className="hidden min-w-0 flex-1 md:block" aria-hidden />
        </div>
      </div>
    </section>
  );
}
