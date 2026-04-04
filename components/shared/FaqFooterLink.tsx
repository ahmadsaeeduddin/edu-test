'use client';

import { useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function FaqFooterLink() {
  const pathname = usePathname();
  const faqsSectionRef = useRef<Element | null>(null);

  useEffect(() => {
    if (pathname !== '/') faqsSectionRef.current = null;
  }, [pathname]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname !== '/') return;
      e.preventDefault();
      if (!faqsSectionRef.current) {
        faqsSectionRef.current = document.getElementById('faqs');
      }
      faqsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [pathname],
  );

  return (
    <li>
      <Link href="/#faqs" onClick={handleClick} className="transition hover:text-white">
        FAQs
      </Link>
    </li>
  );
}
