import { Plus } from 'lucide-react';

export function FAQ() {
  const faqs = [
    { q: "Can institutions customise the program?", a: "Absolutely. We offer tailored solutions based on institutional goals and student needs.", open: true },
    { q: "How is this different from traditional learning?", a: "Content coming soon..." },
    { q: "Do you provide mentor support?", a: "Content coming soon..." },
    { q: "Who is this platform designed for?", a: "Content coming soon..." },
    { q: "How can we get started?", a: "Content coming soon..." }
  ];

  return (
    <section className="py-24 bg-[#fcfcfc]">
          <div className="layout-container grid grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <h2 className="font-general text-2xl md:text-4xl font-bold leading-tight">Frequently <br/>Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="accordion-item group border-b border-gray-200 pb-4" open={faq.open}>
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-800">
                {faq.q}
                <Plus className="w-5 h-5 transition-transform duration-300" />
              </summary>
              <p className="mt-4 text-gray-600 text-sm">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
