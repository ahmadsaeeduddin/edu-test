export function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl md:text-4xl font-bold leading-tight">Innovation Begins with the <br/>Right Learning Environment</h2>
        </div>
        <div className="text-center md:text-left">
          <p className="text-gray-500 mb-6 max-w-xs">Equip with the tools and skills essential for competitive success.</p>
          <button className="bg-gradient-to-r from-[#1a1a1a] to-[#333] text-white px-8 py-3 rounded-md font-semibold hover:from-black hover:to-[#1a1a1a] transition-all cursor-pointer">
            Let&apos;s Connect
          </button>
        </div>
      </div>
    </section>
  );
}
