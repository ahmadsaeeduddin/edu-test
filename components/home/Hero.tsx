export function Hero() {
  return (
    <section className="bg-dark text-white min-h-screen">
      <div className="layout-container flex min-h-screen w-full flex-col justify-center">
        <p className="text-orange-400 font-general font-medium mb-6 text-lg md:text-xl">The Challenge</p>
        <h1 className="font-general font-medium text-3xl md:text-6xl leading-tight mb-10">
          When Education <br/>
          Stops at Classrooms, <br/>
          Innovation Stops Too
        </h1>
        <p className="text-gray-400 text-lg mb-10 max-w-xl font-inter">
          Today&apos;s education system trains students to pass exams, but rarely to question, research, and create real-world solutions.
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
