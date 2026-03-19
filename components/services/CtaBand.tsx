import Link from 'next/link';

export function CtaBand() {
  return (
    <div className="bg-[#F7F7F5] py-20 border-t border-[#E0E0DC]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <h2 className="font-[family-name:var(--font-dm-serif)] text-[36px] md:text-[42px] text-[#111110] tracking-[-0.3px]">Build the Future with Edunautics</h2>
        <Link href="/apply" className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-md font-sans text-[15px] font-medium hover:from-amber-400 hover:to-orange-500 transition-all whitespace-nowrap">Get In Touch</Link>
      </div>
    </div>
  );
}
