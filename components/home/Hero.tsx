export function Hero() {
  return (
    <section className="relative bg-[#1a1a1a] text-white min-h-screen flex items-center overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Ambient gradient glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-gradient-to-bl from-orange-500/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <p className="text-orange-400 font-semibold mb-6">The Challenge</p>
        <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl md:text-6xl font-bold leading-tight mb-10">
          When Education <br/>
          Stops at Classrooms, <br/>
          Innovation Stops Too
        </h1>
        <p className="text-gray-400 text-lg mb-10 max-w-xl">
          Today&apos;s education system trains students to pass exams, but rarely to question, research, and create real-world solutions.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-black px-6 py-3 rounded-md font-semibold hover:from-amber-400 hover:to-orange-400 transition-all cursor-pointer">
            Explore Programs
          </button>
          <button className="border border-white/20 px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
