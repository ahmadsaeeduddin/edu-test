import Image from 'next/image';

export function WhyChoose() {
  return (
    <section className="bg-[#f9f9f9] py-20">
      <div className="layout-container">
        <h2 className="font-general mb-16 text-center text-3xl font-medium md:text-5xl">
          Why Choose Edunautics Programs
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex min-h-[280px] flex-col justify-between rounded-[4px] bg-gradient-to-br from-[#ffbd4a] to-[#f5a623] p-8">
            <div>
              <Image
                src="/assets/main_page_svgs/Target_svg.svg"
                alt="Industry-aligned curriculum"
                width={64}
                height={64}
                className="mb-6 h-10 w-10 md:h-14 md:w-14"
              />
              <h3 className="font-general mb-4 text-3xl font-medium leading-tight">Industry-Aligned Curriculum</h3>
              <p className="text-lg text-gray-800 font-inter font-regular">Every course blends academic rigor with market relevance.</p>
            </div>
          </div>

          <div className="flex min-h-[280px] flex-col justify-between rounded-[4px] bg-gradient-to-br from-[#262626] to-[#1a1a1a] p-8 text-white">
            <div>
              <Image
                src="/assets/main_page_svgs/Chat_svg.svg"
                alt="Mentor-guided learning"
                width={64}
                height={64}
                className="mb-6 h-10 w-10 md:h-14 md:w-14"
              />
              <h3 className="font-general mb-4 text-3xl font-medium leading-tight">Mentor-Guided Growth</h3>
              <p className="text-lg text-gray-400 font-inter font-regular">
                Learn directly from educators, researchers, and professionals shaping the future of technology.
              </p>
            </div>
          </div>

          <div className="relative row-span-2 hidden min-h-[584px] overflow-hidden rounded-[4px] md:block">
            <Image
              alt="Students collaborating"
              className="object-cover"
              fill
              sizes="(max-width: 767px) 0px, 33vw"
              src="/assets/main_page_svgs/why-choose-img.webp"
            />
          </div>

          <div className="flex min-h-[280px] flex-col justify-between rounded-[4px] bg-[#dfdfdf] p-8 md:col-span-2">
            <div>
              <Image
                src="/assets/main_page_svgs/AI_Laptop_SVG.svg"
                alt="Hands-on practice"
                width={64}
                height={64}
                className="mb-6 h-10 w-10 md:h-14 md:w-14"
              />
              <h3 className="font-general mb-4 text-3xl font-medium leading-tight">Hands-On Practice</h3>
              <p className="max-w-full text-lg text-gray-600 font-inter font-regular">
                Each lesson is designed to produce something meaningful, whether it&apos;s a product, a solution, or a
                result that connects learning with real-world impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
