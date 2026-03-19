import { Zap, Users, Monitor } from 'lucide-react';
import Image from 'next/image';

export function WhyChoose() {
  return (
    <section className="py-20 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-6">
      <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl md:text-4xl font-bold text-center mb-16">Why Choose Edunautics Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-[#ffbd4a] to-[#f5a623] p-8 flex flex-col justify-between min-h-[280px]">
          <div>
            <Zap className="w-10 h-10 mb-6" />
            <h3 className="text-xl font-bold mb-4 leading-tight">Industry-Aligned Curriculum</h3>
            <p className="text-gray-800 text-sm">Every course blends academic rigor with market relevance.</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-[#262626] to-[#1a1a1a] text-white p-8 flex flex-col justify-between min-h-[280px]">
          <div>
            <Users className="w-10 h-10 mb-6" />
            <h3 className="text-xl font-bold mb-4 leading-tight">Mentor-Guided Growth</h3>
            <p className="text-gray-400 text-sm">Learn directly from educators, researchers, and professionals shaping the future of technology.</p>
          </div>
        </div>
        
        <div className="row-span-2 hidden md:block relative min-h-[584px]">
          <Image 
            alt="Students collaborating" 
            className="object-cover" 
            fill
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD51Dgb7UofPINy-l7MfgaXji_Nw5bInr8z11W_6F15RZ1J1OWqSOhvmkD_K6IAO7j80IEa5JrgCfnvd0Q0mCinlTgRMylc31w1ZPyXTDM8X5D4k80rYQIwueoO1Jql6Fw-wJkHr7P5yrGQ9sGkPnmtR_9D1CNw6-UWwiAvg_p-zfRwOX5oqy7FlS8HULvZjvp57zoE9m-w_dXA-bvyVxacKhJ6p8Y1Sgf9XKM7QsLtAQbHhCcgncqUt-tRq0ChvtXIizx1LxZxp4c"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="bg-[#dfdfdf] p-8 flex flex-col justify-between min-h-[280px] md:col-span-2">
          <div>
            <Monitor className="w-10 h-10 mb-6" />
            <h3 className="text-xl font-bold mb-4 leading-tight">Hands-On Practice</h3>
            <p className="text-gray-600 text-sm max-w-sm">Each lesson is designed to produce something meaningful, whether it's a product, a solution, or a result that connects learning with real-world impact.</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
