import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

export function Testimonials() {
  const testimonials = [
    {
      quote: "This platform has helped us move beyond traditional teaching and bring real innovation into our classrooms.",
      name: "Emily Roberts",
      title: "STEM Educator",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAZTbWmypo4hUgi63c09uu3iE3_Xjz5QOAsuQrcDva-XsCcWCQTuoe5_sGwkxdvWxVCJD1mV5dqEJcPLwHGox-wRj2YKIXQq2et3qCGJsof6lA8_-yYa0gA-XU96lOreSnqq1ikl4o85_lOYIiasjEGccOxN8-eVVMBEhLoR_cKetOqm1cUggZrR3GoMsO6LyCn4A-B4smFFMJJi_kDAqVNBlhfGy-lMdENW0y20-zFWDxVVRmFh-6an3bkzr9O7x1CWzeQR_iJHk"
    },
    {
      quote: "What impressed us most was the hands-on approach. Our students aren't just learning theory — they're building real-world solutions.",
      name: "James Carter",
      title: "Director of Academic Innovation",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCagxii3m8pmJz7PpA5soBuhpe7d-7zJhOMpfIEyI9y4b6HKPchc-CnWzEptYVENFqUMOhhJS402oRKPZOXQVVYyHr4DaVCeuRltJWtpVJch9ry73uo-qa5ExXYOsrUvP0bqCDG3QxzPCKbSQe-2U6ES8fU8SGH53lFtmPr39MelK4giSJJ3OMTRe55xKbZKDROM_FKuIoFJMTQTCbRydmDikiX7G2wiqLrTdrYBul4-ETEKUKtmxwu6BIK8Xi0AkkC5RITUoIQOB0"
    },
    {
      quote: "This program showed me how technology solves real-world problems. I built projects I'm genuinely proud to showcase.",
      name: "Dr. Sarah Mitchell",
      title: "Principal, Greenfield Academy",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8whEVSIe7lKqifgZUoA4XnRUQ9y9PthL3QlnLZFR4IaKEFOVhOpo-AiHN9as3B7kJ15odbXLCp8XhUtfvNdaBx0b1Vly6A4PZ95FM2aKXxbt0_Ieo8QnwqtZGhVIDprZ1PYXqIT8gAYU7e6fFvVtmR_6_80JYi6xdK0wkDEJT_rpDN0rw1cKvYXDXxEjh5FaKvjRAK19TGeyi_PGhCPZ7PDJyR5HCexOakQZ0l2KH52sx8ktbQlIXBjeHDk1srEVDqEvHSozV2LA"
    }
  ];

  return (
    <section className="py-24 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-center mb-16">
        <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl md:text-4xl font-bold">Testimonials</h2>
        <div className="flex gap-4">
          <button className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-[#1a1a1a] text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      {/* Mobile: horizontal scroll */}
      <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 shadow-sm flex flex-col snap-center shrink-0 w-[280px] rounded-lg">
            <div className="flex text-orange-400 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-sm">&ldquo;{t.quote}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                <Image alt={t.name} fill className="object-cover" src={t.img} referrerPolicy="no-referrer" />
              </div>
              <div>
                <h5 className="text-sm font-bold">{t.name}</h5>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: grid */}
      <div className="hidden md:grid grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-8 shadow-sm flex flex-col">
            <div className="flex text-orange-400 mb-6">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed flex-grow">&ldquo;{t.quote}&rdquo;</p>
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                 <Image alt={t.name} fill className="object-cover" src={t.img} referrerPolicy="no-referrer" />
              </div>
              <div>
                <h5 className="text-sm font-bold">{t.name}</h5>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
