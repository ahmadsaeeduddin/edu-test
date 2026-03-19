import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="font-[family-name:var(--font-dm-serif)] text-slate-900 text-3xl md:text-6xl font-bold tracking-tight">
          About Edunautics
        </h1>
        <p className="text-slate-700 text-xl font-medium">
          Equipping Research with Tools That Create Impact Beyond Classrooms
        </p>
      </div>
      <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-sm relative">
        <Image
          alt="Abstract orange waves"
          className="object-cover scale-99"
          fill
          priority
          referrerPolicy="no-referrer"
          // src="https://lh3.googleusercontent.com/aida-public/AB6AXuATIRpdXznM4N0PJNzZCsuj97Xfm4B8U0d5nkKV2gq-CY5CeE5lf3fPaKEds2wc1JOYvStfr5RXzby-HVRUird3hg8FbMWFVMpDKP_JeLThyh3siZ9kklYkFRpUBadSu7xkZW3hA544rdES0e5fPUy2VwGcDUvhS9FAjbllDwZpQT1cR4B5itzrosS4fTkFzgCGFvFt_Jf3qYvQNokMB8fWwoDrC7aFsmxOQGcQt-SptBUUEU-SrSlx-WHrd6BoEKBesbjXqzvMK88"
          src="/about.jpg"
        />
      </div>
    </section>
  );
}
