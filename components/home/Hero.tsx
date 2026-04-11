'use client';

import Link from 'next/link';
import { animate } from 'framer-motion';
import { RefObject } from 'react';

export function Hero({ whatWeOfferRef }: { whatWeOfferRef: RefObject<HTMLElement | null> }) {
  const handleScroll = () => {
    if (whatWeOfferRef.current) {
      const targetPosition = whatWeOfferRef.current.offsetTop - 50; // Offset for sticky header
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
    <section className="home-hero-grid-bg flex min-h-[68svh] flex-col text-white sm:min-h-[74svh] md:min-h-[78vh] lg:min-h-[82vh]">
      {/*
        Fold strategy: reserve bottom pb clamp for About overlap. Spacer (flex-1) fills below CTAs so they stay
        above that band while sitting close to the paragraph (tight mt on the button row).
      */}
      <div className="layout-container flex w-full flex-1 flex-col pt-10 pb-[clamp(6.5rem,14svh,11rem)] md:pt-11 md:pb-[clamp(7rem,12vh,10rem)] lg:pb-[clamp(8rem,12vh,10rem)]">
        <div>
          <h1 className="mb-3 font-general text-3xl font-medium leading-tight md:text-6xl">
            Explore STEM, AI, Data <br />
            Science, and Soft Skills <br />
          </h1>
          <p className="max-w-full font-inter text-xl text-gray-400 sm:max-w-[50%]">
            Real world learning at your pace or in our learning hubs. Build the technical skills and ethical mindset
            needed to thrive in a world shaped by technology.
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 md:mt-5">
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
        <div className="min-h-0 flex-1" aria-hidden />
      </div>
    </section>
  );
}