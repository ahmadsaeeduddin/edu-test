import Image from 'next/image';

export default function WhyItWorks() {
  return (
    <section className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">Why Our Approach Works</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden relative aspect-square">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5QCyMO1Io7aQcV2dbn3v4yw24SoVL7vXVRDNHXo7RvTid4jHy_1NozKadkMoMhjPTLG-SQeC0l_F6aEFulmeDrzSpFVDNOkPJk0BSSnj5T7S9yObvktGc0lauZo3UEhl2XG-mfy2haiVZeIyhDsn9eI1Fhl8sQ3ZVE4cjjM7I3AJQUq-yurFXDj0JLpUiCXGwK57k5AxI2ZmMAhP7sV407o53W5ZhngxfOlJXgXeKzaSlBs9w9DVsns-iwibztB2xn0w-LWSvQ2g"
              alt="Supporting abstract imagery"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-12 relative">
            <div className="absolute left-[-1.5rem] top-2 bottom-2 w-1.5 bg-edu-gold rounded-full"></div>

            <div className="relative pl-8">
              <div className="absolute left-[-2.05rem] top-1 w-4 h-4 rounded-full bg-white border-4 border-edu-gold"></div>
              <h3 className="text-xl font-bold mb-3">Hands-on, Mentor-Led Learning</h3>
              <p className="text-gray-600 leading-relaxed">Every program combines guided exploration with teamwork and personalized mentorship.</p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-[-2.05rem] top-1 w-4 h-4 rounded-full bg-white border-4 border-edu-gold"></div>
              <h3 className="text-xl font-bold mb-3">Community &amp; Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">Open learning circles and innovation labs create spaces for knowledge exchange and creativity.</p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-[-2.05rem] top-1 w-4 h-4 rounded-full bg-white border-4 border-edu-gold"></div>
              <h3 className="text-xl font-bold mb-3">Continuous Evolution</h3>
              <p className="text-gray-600 leading-relaxed">We adapt our courses and research tracks with the evolving EdTech landscape to stay ahead of trends.</p>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center max-w-4xl mx-auto">
          <p className="text-xl md:text-3xl font-light text-gray-700 leading-tight">
            At Edunautics, learning is not <span className="font-medium">just preparation for the future - it creates the future.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
