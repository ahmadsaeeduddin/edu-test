export default function CTA() {
  return (
    <section className="cta-radial-bg relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 border-b border-separator pb-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-12">
        <h2 className="font-general text-2xl font-medium tracking-tight md:text-4xl">Build the Future with Edunautics</h2>
        <button
          type="button"
          className="cursor-pointer whitespace-nowrap rounded-md bg-black px-8 py-3 font-medium font-general text-white transition-colors hover:bg-[#2f2f2f]"
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
}
