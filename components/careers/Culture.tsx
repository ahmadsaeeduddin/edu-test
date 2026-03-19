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
    <section id="culture" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl md:text-3xl font-bold mb-16">Our Culture</h2>
        <div className="space-y-0 border-t border-gray-200">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row py-10 border-b border-gray-200">
              <div className="flex-shrink-0 w-16 text-2xl md:text-3xl font-bold text-gray-400">{item.num}</div>
              <div className="flex-grow md:flex md:items-start">
                <h3 className="w-full md:w-1/3 text-lg font-bold uppercase tracking-wider mb-4 md:mb-0">{item.title}</h3>
                <p className="w-full md:w-2/3 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
