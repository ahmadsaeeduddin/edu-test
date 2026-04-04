export default function Culture() {
  const items = [
    {
      num: "01",
      title: "INNOVATION AT THE CORE",
      desc: "We encourage bold ideas, experimentation, and research-driven thinking. Every team member is empowered to contribute meaningfully."
    },
    {
      num: "02",
      title: "COLLABORATION FIRST",
      desc: "We believe progress happens together. Our teams work across disciplines, combining academic insight with industry expertise."
    },
    {
      num: "03",
      title: "GROWTH MINDSET",
      desc: "Continuous learning is part of our DNA. Whether you're mentoring or learning, growth never stops here."
    },
    {
      num: "04",
      title: "PURPOSE-DRIVEN WORK",
      desc: "Everything we build aims to create measurable impact - for students, institutions, and the future workforce."
    }
  ];

  return (
    <section id="culture" className="flex flex-col">
      <h2 className="mb-16 font-general text-2xl font-medium md:text-4xl">Our Culture</h2>
      <div className="space-y-0 border-t border-gray-200">
        {items.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 gap-6 border-b border-gray-200 py-10 md:grid-cols-[minmax(22rem,30rem)_1fr] md:items-center md:gap-x-16 lg:gap-x-24"
          >
            <div className="flex min-w-0 shrink-0 items-center gap-4 md:gap-5">
              <div className="w-12 shrink-0 text-3xl font-medium text-gray-600 font-general md:w-14 md:text-5xl">
                {item.num}
              </div>
              <h3 className="min-w-0 text-lg font-medium uppercase tracking-wider font-general md:text-xl">{item.title}</h3>
            </div>
            <p className="max-w-2xl font-inter text-md font-regular leading-relaxed text-gray-600 md:text-lg">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
