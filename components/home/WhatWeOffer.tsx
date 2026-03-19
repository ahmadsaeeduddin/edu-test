import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function WhatWeOffer() {
  const offers = [
    {
      title: "Self-Paced Learning Programs",
      desc: "Learn from anywhere with flexible scheduling",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBPxbALDDz0K53ZN6IzjlyRdpDrqCh43US-oLK-95eH4lwP0iRJPkhl4CzRyLG9E3wnVexwIU4YPbJ4nTLz_txAjJMT_vAziGRv3WGb-JKZ7s6YnjbnRIOoSBMZv3-b5dsKWqTLsqeISzN-DfWRJLAUe45kShOi3SlJ28xIrBEAk39eAVPw4YJowohzMD9NRFOFZ7JNghri_g-GdgcXTrhuLCRNRsKOlQ-iJBgu3f_OHVBvDQynttjizTQUJIdxE3ewvjGcj92FWw"
    },
    {
      title: "In-Person Learning Programs",
      desc: "Face to face collaboration and hands-on experience",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQdEq49FhXtahnEMNchspKoXZYXlZYeTzqBksUrOeM9FWmyfIs8FxJ1EGmj4J3jrFx1OFe98t2o77fAf3C2LKMnhBRXa4RUGvwvLnITxuvvk0sEpqMYjVLHT_zYugBlIgEl_0lLvWsoKNzQayjbtMo87TlkddB9JzJxWa2igMF2kHTjO17Ay0YuNyO3YfXBeuHrifOJm6Iz_Mz1xKLsOsj9KB043tEYoBQdBER6Yyimb-ZgoqphBOXIeO_377q3Mk5yzcCYgyrf50"
    },
    {
      title: "Innovation & Community Spaces",
      desc: "Collaborative projects and networking opportunities",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAP9K5RmmATyS9m4vVQzZgO5y0NUHklTFSMLMXy-_Wqh7Ah0OIwfkAPcL9-TeNaiflmLoMjIlEs0BcbvRy-6g8IaEwmWXQQoJGb1g5EGdgXFsHo_k_dWdd63H-0PBlEQXLbd337n8q4YA6IaFHBf1gyKk80aqvmJQJpB5PoOtXwF1cHRYiONlv2k_igU3o_RpVriO_CJ5r-j_CcNAAKtoDKYDD2T2QVfNxMaN2Wyhese2nz2G-MwNGZ-Yn8EwoFP1t0iUfam4fphBo"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl md:text-4xl font-bold mb-6">What We Offer</h2>
          <p className="text-gray-500">At Edunautics, we design experiences that go beyond courses - connecting curiosity with capability and research with real-world application.</p>
        </div>
        {/* Mobile: horizontal scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide">
          {offers.map((offer, i) => (
            <div key={i} className="group relative overflow-hidden h-[260px] snap-center shrink-0 w-[280px] rounded-lg">
              <Image alt={offer.title} className="object-cover" fill src={offer.img} referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-5">
                <div className="bg-white/90 backdrop-blur p-3 flex items-center justify-between rounded">
                  <div>
                    <h4 className="font-bold text-sm">{offer.title}</h4>
                    <p className="text-[10px] text-gray-600">{offer.desc}</p>
                  </div>
                  <span className="bg-black text-white p-1 rounded-full shrink-0 ml-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {offers.map((offer, i) => (
            <div key={i} className="group relative overflow-hidden h-[300px]">
              <Image alt={offer.title} className="object-cover" fill src={offer.img} referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                <div className="bg-white/90 backdrop-blur p-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm">{offer.title}</h4>
                    <p className="text-[10px] text-gray-600">{offer.desc}</p>
                  </div>
                  <span className="bg-black text-white p-1 rounded-full">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
