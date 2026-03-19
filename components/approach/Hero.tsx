import Image from 'next/image';

export default function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-20 pb-16">
      <div className="max-w-4xl">
        <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl md:text-6xl font-bold tracking-tight text-black mb-6">Our Approach</h1>
        <p className="text-xl text-gray-500 font-medium mb-12">Bridging Curiosity, Research, and Real-World Impact</p>
      </div>
      <div className="w-full rounded-2xl overflow-hidden mb-16 shadow-2xl relative aspect-[2.4/1]">
        <Image
          // src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkiRinbIxtXbWN9A2VZxTeQBeydum6I2ux6TnYGb9zyMCPuLPeBmcqrU3t0Y5rxTKu4AxUgyrfPJ4oRXlqk2Y8VKlgurzN21P5zInOhiOHs2oPuWTpP3MQJX6hCz0iNN0AjL_s4VPPmrZX3QsR-L0jJtBYZxi347WXxoZmGcrMrLL69NUR7890tkH1FqrmmqkMXFCFBgSgkZiTdKEdl1WAsAOIhOf23qMzi_mWDFL4Swx5119V6YfRRi5IUqSntRjpV2ia9vHV-04"
          src="/approch.jpg"
          alt="Abstract golden swirls representing the learning journey"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
        <div className="text-lg leading-relaxed text-gray-600">
          At Edunautics, our approach to learning goes beyond courses&mdash;it&apos;s about cultivating a mindset of discovery. We believe education should not stop at understanding concepts but evolve into creating solutions that make a difference. Every learner here is encouraged to question, explore, and innovate, transforming research into real-world outcomes.
        </div>
        <div className="text-lg leading-relaxed text-gray-600">
          Our model integrates academic excellence, industry collaboration, and AI-driven exploration to ensure students don&apos;t just learn - they lead the change.
        </div>
      </div>
    </section>
  );
}
