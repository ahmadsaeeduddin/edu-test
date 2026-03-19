import Link from 'next/link';

export function Breadcrumb() {
  return (
    <div className="pt-12 pb-8 flex items-center gap-2 text-[14px] text-[#666660]">
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 stroke-current"><path d="M15 18l-6-6 6-6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <Link href="/" className="hover:text-[#111110] transition-colors">Back to Homepage</Link>
    </div>
  );
}
