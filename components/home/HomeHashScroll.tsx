'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/** Scrolls to #faqs after client navigation to home (e.g. from Footer on another route). */
export function HomeHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') return;
    if (typeof window === 'undefined' || window.location.hash !== '#faqs') return;
    const el = document.getElementById('faqs');
    if (!el) return;
    const id = window.requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return () => window.cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
