import Image from 'next/image';

export function Hero() {
  return (
    <>
      <div className="pb-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
        <h1 className="font-[family-name:var(--font-dm-serif)] text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-0.5px] text-[#111110] mb-6">
          Self-Paced Learning Programs
        </h1>
        <p className="text-[16px] text-[#666660] max-w-[800px] leading-[1.6]">
          Today&apos;s education system faces a critical gap. Students are trained to pass exams but rarely guided to question, research, and create. Research often ends in reports instead of real-world solutions.
        </p>
      </div>
      <div className="w-full rounded-2xl overflow-hidden mb-16 shadow-2xl relative aspect-[2.4/1]">
        <Image
          // src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkiRinbIxtXbWN9A2VZxTeQBeydum6I2ux6TnYGb9zyMCPuLPeBmcqrU3t0Y5rxTKu4AxUgyrfPJ4oRXlqk2Y8VKlgurzN21P5zInOhiOHs2oPuWTpP3MQJX6hCz0iNN0AjL_s4VPPmrZX3QsR-L0jJtBYZxi347WXxoZmGcrMrLL69NUR7890tkH1FqrmmqkMXFCFBgSgkZiTdKEdl1WAsAOIhOf23qMzi_mWDFL4Swx5119V6YfRRi5IUqSntRjpV2ia9vHV-04"
          src="/selfPaced.jpg"
          alt="Abstract golden swirls representing the learning journey"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </>
  );
}
