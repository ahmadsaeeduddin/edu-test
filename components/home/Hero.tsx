export function Hero() {
  return (
    <section className="home-hero-grid-bg text-white min-h-screen">
      <div className="layout-container flex min-h-screen w-full flex-col justify-center">
        <p className="text-orange-400 font-general font-medium mb-6 text-lg md:text-xl">The Challenge</p>
        <h1 className="font-general font-medium text-3xl md:text-6xl leading-tight mb-10">
        Explore STEM, AI, Data <br/>
        Science, and Soft Skills <br/>
        </h1>
        <p className="text-gray-400 text-xl mb-10 max-w-xl font-inter">
        Real world learning at your pace or in our learning hubs. Build the technical skills and ethical mindset needed to thrive in a world shaped by technology.


        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-darkText px-6 py-3 rounded-md font-medium font-general hover:from-amber-400 hover:to-orange-400 transition-all cursor-pointer">
            Explore Programs
          </button>
          <button className="border border-edu-gold px-6 py-3 rounded-md font-medium font-general hover:bg-white/10 transition-colors cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}