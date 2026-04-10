'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronDown, Headphones, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { serviceProgramNavItems } from '@/data/serviceProgramRoutes';

const MotionServiceCardLink = motion.create(Link);

const navLinks = [
  { href: '/approach', label: 'Our Approach' },
  { href: '/about', label: 'About Us' },
  { href: '/careers', label: 'Careers' },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [mobileOpen, setMobileOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
  const [desktopOfferOpen, setDesktopOfferOpen] = useState(false);
  const desktopOfferRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOfferOpen(false);
    setDesktopOfferOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!desktopOfferOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!desktopOfferRef.current) return;
      if (!desktopOfferRef.current.contains(event.target as Node)) {
        setDesktopOfferOpen(false);
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, [desktopOfferOpen]);

  const handleDesktopOfferMouseEnter = () => {
    setDesktopOfferOpen(true);
  };

  const linkClass = (href: string) => {
    const isActive = pathname === href;
    if (isHome) {
      return `transition-colors ${isActive ? 'font-bold text-orange-400' : 'font-regular hover:text-orange-400'}`;
    }
    return `transition-colors ${isActive ? 'font-bold text-black' : 'font-regular text-gray-600 hover:text-black'}`;
  };

  const mobileLinkClass = (href: string) => {
    const isActive = pathname === href;
    return `block py-3 text-lg font-medium transition-colors ${isActive ? 'text-orange-400' : 'text-gray-300 hover:text-white'}`;
  };

  return (
    <>
      <header className={`w-full sticky top-0 z-50 ${isHome ? 'bg-[#121212] text-white' : 'bg-white border-b border-gray-100 text-gray-900'}`}>
        <nav className="layout-container flex h-20 w-full items-center justify-between">
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
          <div className="hidden items-center space-x-8 font-inter text-sm font-regular md:flex">
            <div
              className="relative"
              ref={desktopOfferRef}
              onMouseEnter={handleDesktopOfferMouseEnter}
            >
              <button
                type="button"
                className={`btn-dual-line-group flex items-center transition-colors ${
                  pathname.startsWith('/services')
                    ? 'font-bold text-black'
                    : isHome
                      ? 'font-regular hover:text-orange-400'
                      : 'font-regular text-gray-600 hover:text-black'
                }`}
                aria-expanded={desktopOfferOpen}
                aria-haspopup="menu"
              >
                <span className="btn-dual-line__viewport">
                  <span className="btn-dual-line__stack">
                    <span className="btn-dual-line__line">What We Offer</span>
                    <span className="btn-dual-line__line">What We Offer</span>
                  </span>
                </span>
                <ChevronDown className={`ml-1 h-4 w-4 shrink-0 transition-transform duration-200 ${desktopOfferOpen ? 'rotate-180' : ''}`} />
              </button>
              {desktopOfferOpen ? (
                <div className="absolute left-1/2 top-full z-50 mt-3 w-[1080px] -translate-x-1/2 rounded-md border border-gray-100 bg-white p-5 font-inter shadow-xl">
                  <div className="grid grid-cols-12 gap-4 ">
                    <div className="col-span-5 px-8 py-3 ">
                      <h3 className="font-general text-[20px] font-medium leading-snug text-slate-900">
                        <span className="font-regular text-edu-gold">From Learning to Leadership: </span>
                        Practical, Research-Driven, and Future-Ready
                      </h3>
                      <p className="mt-5 text-[16px] font-regular leading-relaxed text-slate-700">
                        Whether you learn online or in person, every program is built to help you explore, innovate, and make an impact.
                      </p>
                    </div>

                    <div className="col-span-7 grid grid-cols-3 gap-4">
                      {serviceProgramNavItems.map(({ slug, title }, index) => {
                        const href = `/services/${slug}`;
                        const active = pathname === href;
                        return (
                          <MotionServiceCardLink
                            key={slug}
                            href={href}
                            onClick={() => setDesktopOfferOpen(false)}
                            className={`group block h-[124px] rounded-md border bg-[var(--color-light-bg)] p-4 transition-colors hover:border-[var(--color-edu-gold)] hover:bg-white ${active ? 'border-[var(--color-edu-gold)]' : 'border-transparent'}`}
                            initial={{ y: 0, boxShadow: '0 1px 2px rgba(15, 23, 42, 0.06)' }}
                            whileHover={{
                              y: -2,
                              boxShadow: '0 14px 34px -10px rgba(15, 23, 42, 0.14)',
                            }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                          >
                            <div className="flex flex-col">
                              {index === 0 ? (
                                <Headphones className="h-5 w-5 text-slate-700" />
                              ) : index === 1 ? (
                                <Image
                                  src="/assets/dropdown-svg/teacher-svg.svg"
                                  alt=""
                                  width={20}
                                  height={20}
                                  className="h-5 w-5"
                                />
                              ) : (
                                <Image
                                  src="/assets/dropdown-svg/book-svg.svg"
                                  alt=""
                                  width={20}
                                  height={20}
                                  className="h-5 w-5"
                                />
                              )}
                              <div className="flex items-end justify-end gap-4">
                                <p className="mt-6 max-w-full text-sm font-regular leading-snug text-slate-900">{title}</p>
                                
                                <span
                                  className={`inline-flex size-4 shrink-0 items-center justify-center rounded-[1px] transition-colors group-hover:bg-[var(--color-edu-gold)] ${active ? 'bg-[var(--color-edu-gold)]' : 'bg-transparent'}`}
                                >
                                  <ArrowRight className="h-4 w-4 shrink-0 text-dark transition-colors" />
                                </span>
                              </div>
                            </div>
                          </MotionServiceCardLink>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <Link href="/approach" className={linkClass('/approach')}>Our Approach</Link>
            <Link href="/about" className={linkClass('/about')}>About Us</Link>
            <Link href="/careers" className={linkClass('/careers')}>Careers</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/apply"
              className={`btn-dual-line hidden rounded-md px-6 py-2.5 font-inter text-sm transition-colors md:inline-flex md:items-center md:justify-center ${pathname === '/apply' ? 'font-bold' : 'font-regular'} ${isHome ? 'border border-white/30 text-white hover:border-slate-900 hover:bg-white hover:text-slate-900' : 'border border-transparent bg-black text-white hover:border-slate-900 hover:bg-white hover:text-slate-900'}`}
            >
              <span className="btn-dual-line__viewport">
                <span className="btn-dual-line__stack">
                  <span className="btn-dual-line__line">Start Learning</span>
                  <span className="btn-dual-line__line">Start Learning</span>
                </span>
              </span>
            </Link>

            {/* Hamburger button: mobile only */}
            <button
              className="md:hidden -mr-2 rounded-lg bg-edu-gold p-2.5 text-white shadow-md transition-colors hover:bg-white hover:text-edu-gold"
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
            <button
              type="button"
              className={`btn-dual-line-group flex w-full items-center justify-between py-3 text-lg font-medium transition-colors ${pathname.startsWith('/services') ? 'text-orange-400' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setOfferOpen(!offerOpen)}
            >
              <span className="btn-dual-line__viewport min-w-0 max-w-full text-left">
                <span className="btn-dual-line__stack">
                  <span className="btn-dual-line__line">What We Offer</span>
                  <span className="btn-dual-line__line">What We Offer</span>
                </span>
              </span>
              <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-200 ${offerOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${offerOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              {serviceProgramNavItems.map(({ slug, title }) => {
                const href = `/services/${slug}`;
                const active = pathname === href;
                return (
                  <Link
                    key={slug}
                    href={href}
                    className={`block py-2 pl-4 text-base transition-colors hover:text-white ${active ? 'text-orange-400' : 'text-gray-400'}`}
                  >
                    {title}
                  </Link>
                );
              })}
            </div>

            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={mobileLinkClass(link.href)} onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Sidebar CTA */}
          <div className="px-6 pb-8">
            <Link
              href="/apply"
              className="btn-dual-line flex w-full items-center justify-center rounded-md border border-transparent bg-black py-3 text-center text-sm font-semibold text-white transition-colors hover:border-slate-900 hover:bg-white hover:text-slate-900"
              onClick={() => setMobileOpen(false)}
            >
              <span className="btn-dual-line__viewport">
                <span className="btn-dual-line__stack">
                  <span className="btn-dual-line__line">Start Learning</span>
                  <span className="btn-dual-line__line">Start Learning</span>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
