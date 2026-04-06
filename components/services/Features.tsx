import type { WhatWeOfferProgram } from '@/data/whatWeOffer';

function formatHighlightTitle(heading: string) {
  return heading.replace(/:\s*$/, '');
}

export default function Features({ program }: { program: WhatWeOfferProgram }) {
  return (
    <div className="mb-32 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500 fill-mode-both">
      <div className="flex flex-col gap-12">
        {program.highlights.map((highlight, index) => (
          <div key={`${program.id}-${index}`} className="flex gap-8">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#E8A020] text-base font-medium text-[#111110]">
              {index + 1}
            </div>
            <div className="max-w-[800px]">
              <h3 className="mb-3 font-general text-[28px] tracking-[-0.2px] text-[#111110]">
                {formatHighlightTitle(highlight.heading)}
              </h3>
              <p className="font-inter text-base font-regular leading-[1.6] text-[#666660]">{highlight.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
