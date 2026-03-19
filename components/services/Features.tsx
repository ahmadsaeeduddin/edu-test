import Image from 'next/image';

export function Features() {
  return (
    <>
      <div className="flex justify-center mb-24 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-both">
        <div className="w-full max-w-[600px] relative aspect-square">
          <Image
            src="/selfpaced1.png"
            alt="Self-Paced Learning Programs diagram"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="mb-32 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500 fill-mode-both">
        <div className="flex flex-col gap-12">
          <div className="flex gap-8">
            <div className="shrink-0 w-[40px] h-[40px] border-[1.5px] border-[#E8A020] rounded-full flex items-center justify-center text-[16px] font-medium text-[#111110]">1</div>
            <div className="max-w-[800px]">
              <h3 className="font-[family-name:var(--font-dm-serif)] text-[28px] text-[#111110] mb-3 tracking-[-0.2px]">Learn anywhere. Grow everywhere.</h3>
              <p className="text-[16px] text-[#666660] leading-[1.6]">Flexible, mentor-supported programs designed for learners who want to master emerging technologies while staying connected to real industry practice.</p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="shrink-0 w-[40px] h-[40px] border-[1.5px] border-[#E8A020] rounded-full flex items-center justify-center text-[16px] font-medium text-[#111110]">2</div>
            <div className="max-w-[800px]">
              <h3 className="font-[family-name:var(--font-dm-serif)] text-[28px] text-[#111110] mb-3 tracking-[-0.2px]">Cohort Bootcamps</h3>
              <p className="text-[16px] text-[#666660] leading-[1.6]">Intensive, team-based learning guided by industry mentors. Collaborate on live case studies, tackle real-world challenges, and receive direct feedback from professionals who work in the field.</p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="shrink-0 w-[40px] h-[40px] border-[1.5px] border-[#E8A020] rounded-full flex items-center justify-center text-[16px] font-medium text-[#111110]">3</div>
            <div className="max-w-[800px]">
              <h3 className="font-[family-name:var(--font-dm-serif)] text-[28px] text-[#111110] mb-3 tracking-[-0.2px]">Self-Paced Tracks</h3>
              <p className="text-[16px] text-[#666660] leading-[1.6]">Progress at your own speed through structured modules, interactive labs, and periodic mentor sessions. Each track integrates industry-based assignments, ensuring your independent learning translates into practical, job-ready skills.</p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="shrink-0 w-[40px] h-[40px] border-[1.5px] border-[#E8A020] rounded-full flex items-center justify-center text-[16px] font-medium text-[#111110]">4</div>
            <div className="max-w-[800px]">
              <h3 className="font-[family-name:var(--font-dm-serif)] text-[28px] text-[#111110] mb-3 tracking-[-0.2px]">Focused Capsules</h3>
              <p className="text-[16px] text-[#666660] leading-[1.6]">Short, specialized courses designed with input from industry experts to sharpen targeted skills — helping you stay current with evolving tools, trends, and technologies that organizations are actively using today.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
