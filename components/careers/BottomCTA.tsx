import Link from 'next/link';

export default function BottomCTA() {
  return (
    <section className="py-16 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl md:text-4xl font-bold mb-8 md:mb-0">Build the Future with Edunautics</h2>
        <Link href="/apply" className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-3 rounded text-sm font-semibold hover:from-amber-400 hover:to-orange-500 transition-all">
          Get In Touch
        </Link>
      </div>
    </section>
  );
}
