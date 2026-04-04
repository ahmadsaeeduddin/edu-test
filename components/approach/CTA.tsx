export default function CTA() {
  return (
    <section className="cta-radial-bg relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2">
      <div className="mx-auto w-full max-w-[1200px] px-6 pt-12 pb-16 md:px-12">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="font-general text-2xl font-medium tracking-tight md:text-4xl">Build the Future with Edunautics</h2>
          <button
            type="button"
            className="cursor-pointer whitespace-nowrap rounded-md bg-black px-8 py-3 font-medium font-general text-white transition-colors hover:bg-[#2f2f2f]"
          >
            Get in Touch
          </button>
        </div>
        <div className="h-[0.5px] w-full bg-[#727272]" aria-hidden />
      </div>
    </section>
  );
}
