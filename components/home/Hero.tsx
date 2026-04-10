'use client';

import Link from 'next/link';
import { animate } from 'framer-motion';
import { RefObject } from 'react';

export function Hero({ whatWeOfferRef }: { whatWeOfferRef: RefObject<HTMLElement | null> }) {
  const handleScroll = () => {
    if (whatWeOfferRef.current) {
      const targetPosition = whatWeOfferRef.current.offsetTop - 10; // Offset for sticky header
      const startPosition = window.scrollY;

      animate(0, 1, {
        duration: 0.7,
        ease: [0.6, 0.05, 0.19, 1.0], // Custom smooth cubic-bezier ease
        onUpdate: (latest) => {
          window.scrollTo(0, startPosition + (targetPosition - startPosition) * latest);
        },
      });
    }
  };

  return (
    <section className="home-hero-grid-bg text-white min-h-[82vh]">
      <div className="layout-container flex min-h-[82vh] w-full flex-col justify-center">
        <h1 className="font-general font-medium text-3xl md:text-6xl leading-tight mb-6">
        Explore STEM, AI, Data <br/>
        Science, and Soft Skills <br/>
        </h1>
        <p className="text-gray-400 text-xl mb-10 max-w-[50%] font-inter">
        Real world learning at your pace or in our learning hubs. Build the technical skills and ethical mindset needed to thrive in a world shaped by technology.


        </p>
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            type="button"
            onClick={handleScroll}
            className="btn-dual-line inline-flex cursor-pointer items-center justify-center rounded-md border-2 border-transparent bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 font-medium font-general text-darkText transition-all hover:border-edu-gold hover:from-white hover:to-white hover:text-edu-gold"
          >
            <span className="btn-dual-line__viewport">
              <span className="btn-dual-line__stack">
                <span className="btn-dual-line__line">Explore Programs</span>
                <span className="btn-dual-line__line">Explore Programs</span>
              </span>
            </span>
          </button>
          <Link
            href="/contact"
            className="btn-dual-line inline-flex cursor-pointer items-center justify-center rounded-md border border-edu-gold px-6 py-3 font-medium font-general text-white transition-colors hover:border-edu-gold hover:bg-white hover:text-edu-gold"
          >
            <span className="btn-dual-line__viewport">
              <span className="btn-dual-line__stack">
                <span className="btn-dual-line__line">Get Started</span>
                <span className="btn-dual-line__line">Get Started</span>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}