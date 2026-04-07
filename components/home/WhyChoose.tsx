import Image from 'next/image';

const cardShell = 'flex min-h-[280px] flex-col justify-between rounded-[4px] p-8';
const cardIcon = 'mb-0 h-10 w-10 shrink-0 self-start md:h-14 md:w-14';
const cardBody = 'flex w-full flex-col items-start';
const cardTitle = 'w-full font-general text-2xl font-medium leading-tight md:text-3xl';
const cardDesc =
  'mt-4 w-full font-inter text-base font-regular leading-relaxed md:text-lg';

export function WhyChoose() {
  return (
    <section className="bg-light-bg py-20">
      <div className="layout-container">
        <div className="mb-12 flex items-start gap-4 md:mb-16 md:gap-5">
          
          <h2 className="font-general text-3xl font-medium leading-tight text-slate-900 md:text-5xl">
            Why Choose Edunautics Programs
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2 md:gap-6">
          {/* Row 1, Col 1 — Industry-Aligned */}
          <div className={`${cardShell} bg-[#F5B959] md:row-start-1 md:col-start-1`}>
            <Image
              src="/assets/main_page_svgs/Target_svg.svg"
              alt=""
              width={64}
              height={64}
              className={cardIcon}
            />
            <div className={cardBody}>
              <h3 className={`${cardTitle} text-slate-900`}>Industry-Aligned Curriculum</h3>
              <p className={`${cardDesc} text-slate-900`}>
                Every course blends academic rigor with market relevance.
              </p>
            </div>
          </div>

          {/* Row 1, Col 2 — Mentor-Guided */}
          <div
            className={`${cardShell} bg-[#212121] text-white md:row-start-1 md:col-start-2 md:min-h-[280px]`}
          >
            <Image
              src="/assets/main_page_svgs/Chat_svg.svg"
              alt=""
              width={64}
              height={64}
              className={`${cardIcon} brightness-0 invert`}
            />
            <div className={cardBody}>
              <h3 className={cardTitle}>Mentor-Guided Growth</h3>
              <p className={`${cardDesc} text-gray-300`}>
                Learn directly from educators, researchers, and professionals shaping the future of technology.
              </p>
            </div>
          </div>

          {/* Col 3, spans rows 1–2 — Flexible Pathways */}
          <div
            className={`${cardShell} bg-[#F5B959] md:col-start-3 md:row-span-2 md:row-start-1 md:h-full md:min-h-0`}
          >
            <Image
              src="/assets/main_page_svgs/arrow-svg.svg"
              alt=""
              width={64}
              height={64}
              className={cardIcon}
            />
            <div className={cardBody}>
              <h3 className={`${cardTitle} text-slate-900`}>Flexible Pathways</h3>
              <p className={`${cardDesc} text-slate-900`}>
                Choose your mode — online, in-person, or hybrid — and connect learning with impact, wherever you are.
              </p>
            </div>
          </div>

          {/* Row 2, Cols 1–2 — Hands-On Practice */}
          <div
            className={`${cardShell} bg-[#E0E0E0] md:col-span-2 md:col-start-1 md:row-start-2`}
          >
            <Image
              src="/assets/main_page_svgs/AI_Laptop_SVG.svg"
              alt=""
              width={64}
              height={64}
              className={cardIcon}
            />
            <div className={cardBody}>
              <h3 className={`${cardTitle} text-slate-900`}>Hands-On Practice</h3>
              <p className={`${cardDesc} text-slate-700`}>
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
