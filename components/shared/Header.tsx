'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/approach', label: 'Our Approach' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/careers', label: 'Careers' },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [mobileOpen, setMobileOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setOfferOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const linkClass = (href: string) => {
    const isActive = pathname === href;
    if (isHome) {
      return `transition-colors ${isActive ? 'text-orange-400 font-semibold' : 'hover:text-orange-400'}`;
    }
    return `transition-colors ${isActive ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'}`;
  };

  const mobileLinkClass = (href: string) => {
    const isActive = pathname === href;
    return `block py-3 text-lg font-medium transition-colors ${isActive ? 'text-orange-400' : 'text-gray-300 hover:text-white'}`;
  };

  return (
    <>
      <header className={`w-full sticky top-0 z-50 ${isHome ? 'bg-[#1a1a1a] text-white' : 'bg-white border-b border-gray-100 text-gray-900'}`}>
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between w-full">
          <Link href="/" className="relative h-30 w-50 block">
            <Image
              src="/OG.PNG"
              alt="Edunautics"
              fill
              className={`object-contain object-left ${isHome ? '' : 'invert'}`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="/about" className={linkClass('/about')}>About Us</Link>
            <div className="relative group">
              <button className={`flex items-center transition-colors ${isHome ? 'hover:text-orange-400' : (pathname === '/services' ? 'text-black font-semibold' : 'text-gray-600 hover:text-black')}`}>
                What We Offer <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-100 rounded-md shadow-lg py-2 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/services" className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50">Self-Paced Learning Programs</Link>
              </div>
            </div>
            <Link href="/approach" className={linkClass('/approach')}>Our Approach</Link>
            <Link href="/testimonials" className={linkClass('/testimonials')}>Testimonials</Link>
            <Link href="/faqs" className={linkClass('/faqs')}>FAQs</Link>
            <Link href="/careers" className={linkClass('/careers')}>Careers</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/apply"
              className={`hidden md:inline-block px-6 py-2.5 rounded-md text-sm font-semibold transition ${isHome ? 'border border-white/30 text-white hover:bg-white hover:text-black' : 'bg-black text-white hover:bg-gray-800'}`}
            >
              Start Learning
            </Link>

            {/* Hamburger button — mobile only */}
            <button
              className="md:hidden p-2.5 -mr-2 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-md"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile sidebar overlay */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 md:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Sidebar panel */}
        <div
          className={`absolute top-0 left-0 h-full w-[280px] bg-[#1a1a1a] text-white flex flex-col transition-transform duration-300 ease-out ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          {/* Sidebar header */}
          <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
            <Link href="/" className="relative h-8 w-32 block" onClick={() => setMobileOpen(false)}>
              <Image src="/OG.PNG" alt="Edunautics" fill className="object-contain object-left" />
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-1">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Sidebar links */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <Link href="/about" className={mobileLinkClass('/about')}>About Us</Link>

            {/* What We Offer — expandable */}
            <button
              className={`flex items-center justify-between w-full py-3 text-lg font-medium transition-colors ${pathname === '/services' ? 'text-orange-400' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setOfferOpen(!offerOpen)}
            >
              What We Offer
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${offerOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${offerOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
              <Link href="/services" className="block py-2 pl-4 text-base text-gray-400 hover:text-white transition-colors">
                Self-Paced Learning Programs
              </Link>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href} className={mobileLinkClass(link.href)}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Sidebar CTA */}
          <div className="px-6 pb-8">
            <Link
              href="/apply"
              className="block w-full text-center bg-orange-500 text-white py-3 rounded-md text-sm font-semibold hover:bg-orange-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
