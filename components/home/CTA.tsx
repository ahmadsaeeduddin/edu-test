import Link from 'next/link';

export function CTA() {
  return (
    <section className="cta-radial-bg relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 border-b border-separator pb-16">
      <div className="layout-container flex flex-col items-center justify-between gap-8 py-12 md:flex-row">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="font-general text-2xl font-medium leading-tight md:text-4xl">
            Innovation Begins with the <br />
            Right Learning Environment
          </h2>
        </div>
        <div className="text-center md:text-left">
          <p className="font-inter mb-6 max-w-xs font-regular text-black">Equip with the tools and skills essential for competitive success.</p>
          <Link
            href="/contact"
            className="btn-dual-line inline-flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-dark px-8 py-3 font-medium font-general text-white transition-colors hover:border-slate-900 hover:bg-white hover:text-slate-900"
          >
            <span className="btn-dual-line__viewport">
              <span className="btn-dual-line__stack">
                <span className="btn-dual-line__line">Let&apos;s Connect</span>
                <span className="btn-dual-line__line">Let&apos;s Connect</span>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
