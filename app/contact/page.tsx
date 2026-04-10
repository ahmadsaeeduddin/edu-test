'use client';

import { useMemo, useState } from 'react';
import { Check, ChevronDown, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import TextType from '@/components/TextType';

type ContactFormState = {
  name: string;
  email: string;
  organization: string;
  country: string;
  phone: string;
  message: string;
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.18,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
} as const;

export default function ContactPage() {
  const interestOptions = useMemo(
    () => [
      { value: '', label: 'Select an option' },
      { value: 'STEM Programs', label: 'STEM Programs' },
      { value: 'AI & Data Science', label: 'AI & Data Science' },
      { value: 'Future-ready Skills', label: 'Future-ready Skills' },
      { value: 'Bootcamps & Workshops', label: 'Bootcamps & Workshops' },
      { value: 'Mentorship', label: 'Mentorship' },
      { value: 'Partnership', label: 'Partnership' },
      { value: 'Other', label: 'Other' },
    ],
    []
  );

  const [areaOfInterest, setAreaOfInterest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    organization: '',
    country: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // No POST yet — mimic a real submission for UX.
      await new Promise((r) => setTimeout(r, 700));
      setFormData({
        name: '',
        email: '',
        organization: '',
        country: '',
        phone: '',
        message: '',
      });
      setAreaOfInterest('');
      setConsent(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[var(--color-white)] py-12 md:py-20">
      <div className="layout-container">
        <h1 className="text-center font-general text-3xl font-medium tracking-tight text-[var(--color-darkText)] md:text-5xl">
          We&apos;d love to hear from you
        </h1>

        <div className="mt-10 overflow-hidden rounded-lg border border-[var(--color-lightGray)] bg-white shadow-sm md:mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left panel */}
            <div className="hidden md:block bg-[var(--color-white)] text-white px-10 py-12">
              <div className="max-w-xl">
                <h2 className="font-general text-4xl font-medium text-[var(--color-darkText)]">Edunautics</h2>
                <TextType
                  text="Why Connect With Us?"
                  as="p"
                  startOnVisible={false}
                  loop={false}
                  initialDelay={250}
                  className="mt-3 block w-full font-inter text-xl font-regular text-[var(--color-darkText)]/90"
                />

                <motion.ul
                  className="mt-10 space-y-6 font-inter text-[15px] leading-relaxed text-[var(--color-darkText)]/90"
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.li variants={itemVariants} className="flex items-start gap-4">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-edu-gold)]" />
                    Explore programs in STEM, AI, Data Science &amp; future-ready skills
                  </motion.li>
                  <motion.li variants={itemVariants} className="flex items-start gap-4">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-edu-gold)]" />
                    Get guidance on learning paths, bootcamps, and workshops
                  </motion.li>
                  <motion.li variants={itemVariants} className="flex items-start gap-4">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-edu-gold)]" />
                    Partner with us for community learning &amp; innovation spaces
                  </motion.li>
                  <motion.li variants={itemVariants} className="flex items-start gap-4">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-edu-gold)]" />
                    Connect with mentors and build real-world, project-based skills
                  </motion.li>
                  <motion.li variants={itemVariants} className="flex items-start gap-4">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-edu-gold)]" />
                    Discover opportunities for collaboration, growth &amp; networking
                  </motion.li>
                </motion.ul>
              </div>
            </div>

            {/* Right panel */}
            <div className="bg-[var(--color-light-yellow)] px-6 py-10 md:px-12 md:py-12">
              <div className="max-w-xl">
                <p className="font-general text-xl font-medium text-slate-900 md:text-2xl">
                  Fill out the form and our team will get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block font-inter text-sm font-medium text-slate-800">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 font-inter text-sm outline-none transition-colors focus:border-slate-900"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block font-inter text-sm font-medium text-slate-800">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="youremail@gmail.com"
                        required
                        className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 font-inter text-sm outline-none transition-colors focus:border-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block font-inter text-sm font-medium text-slate-800">Organization</label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="Your school, or institution"
                        className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 font-inter text-sm outline-none transition-colors focus:border-slate-900"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block font-inter text-sm font-medium text-slate-800">Area of Interest</label>
                      <div className="relative">
                        <div className="flex items-center rounded-md border border-slate-200 bg-white px-4 py-3 transition-colors focus-within:border-slate-900">
                          <span className="flex-1 font-inter text-sm text-slate-500">
                            {interestOptions.find((o) => o.value === areaOfInterest)?.label ?? 'Select an option'}
                          </span>
                          <ChevronDown className="h-4 w-4 text-slate-500" aria-hidden="true" />
                        </div>
                        <select
                          value={areaOfInterest}
                          onChange={(e) => setAreaOfInterest(e.target.value)}
                          className="absolute inset-0 h-full w-full cursor-pointer appearance-none opacity-0"
                        >
                          {interestOptions.map((o) => (
                            <option key={o.value} value={o.value}>
                              {o.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block font-inter text-sm font-medium text-slate-800">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        placeholder="Your country"
                        className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 font-inter text-sm outline-none transition-colors focus:border-slate-900"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block font-inter text-sm font-medium text-slate-800">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone number"
                        className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 font-inter text-sm outline-none transition-colors focus:border-slate-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block font-inter text-sm font-medium text-slate-800">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your goals, interests, or any questions you have. We’re excited to support your learning journey."
                      className="min-h-[120px] w-full resize-y rounded-md border border-slate-200 bg-white px-4 py-3 font-inter text-sm leading-relaxed outline-none transition-colors focus:border-slate-900"
                    />
                  </div>

                  <label className="flex items-start gap-3 font-inter text-xs text-slate-700">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-[var(--color-edu-gold)]"
                    />
                    <span>
                      Yes, I agree to receive updates about programs, workshops, and learning opportunities.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--color-edu-gold)] px-5 py-3 font-inter text-sm font-medium text-white transition-colors hover:bg-[var(--color-edu-gold-light)] disabled:cursor-not-allowed disabled:opacity-70 ${!isSubmitting ? 'btn-dual-line' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <span className="btn-dual-line__viewport">
                        <span className="btn-dual-line__stack">
                          <span className="btn-dual-line__line">Send message</span>
                          <span className="btn-dual-line__line">Send message</span>
                        </span>
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}