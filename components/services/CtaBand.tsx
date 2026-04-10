import Link from 'next/link';

export function CtaBand() {
  return (
    <div className="bg-[#F7F7F5] py-20 border-t border-[#E0E0DC]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <h2 className="font-general text-[36px] md:text-[42px] text-[#111110] tracking-[-0.3px]">Build the Future with Edunautics</h2>
        <Link
          href="/apply"
          className="btn-dual-line inline-flex items-center justify-center whitespace-nowrap rounded-md border-2 border-transparent bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-3.5 font-inter text-[15px] font-medium text-white transition-all hover:border-edu-gold hover:from-white hover:to-white hover:text-edu-gold"
        >
          <span className="btn-dual-line__viewport">
            <span className="btn-dual-line__stack">
              <span className="btn-dual-line__line">Get In Touch</span>
              <span className="btn-dual-line__line">Get In Touch</span>
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
