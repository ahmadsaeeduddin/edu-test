'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

/** FileList exists only in browsers; never reference the global during SSR/prerender. */
function isNonEmptyFileInputValue(value: unknown): boolean {
  if (value == null || typeof value !== 'object') return false;
  const len = (value as { length?: unknown }).length;
  return typeof len === 'number' && len > 0;
}

const applicationFormSchema = z.object({
  resume: z.any().refine(isNonEmptyFileInputValue, { message: 'Resume is required' }),
  firstName: z
    .string()
    .min(1, 'First name is required')
    .min(2, 'First name must be at least 2 characters'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
      'Invalid phone number'
    ),
  position: z.string().min(1, 'Please select a position'),
  linkedin: z.union([z.literal(''), z.string().url('Invalid URL')]),
  source: z.string().optional(),
  coverLetter: z.string().optional(),
});

export type ApplicationFormValues = z.infer<typeof applicationFormSchema>;

export function ApplicationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const inputClasses =
    'border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors w-full bg-white';

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
      linkedin: '',
      source: '',
      coverLetter: '',
    },
  });

  const resumeFiles = watch('resume');
  const { ref: resumeFieldRef, ...resumeFieldRest } = register('resume');

  const onSubmit = (data: ApplicationFormValues) => {
    console.log('Application submitted', data);
    setIsSubmitted(true);
  };

  const handleSubmitAnother = () => {
    reset({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
      linkedin: '',
      source: '',
      coverLetter: '',
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setIsSubmitted(false);
  };

  const errorText = (msg?: string) =>
    msg ? <p className="mt-1 text-sm text-red-600">{msg}</p> : null;

  if (isSubmitted) {
    return (
      <div
        className="mx-auto w-full max-w-3xl rounded-lg px-6 py-20 text-center transition-opacity duration-500 ease-out"
        style={{ backgroundColor: '#F6F6F6' }}
      >
        <div className="mb-6 flex justify-center">
          <Image
            src="/assets/letter-svg.svg"
            alt=""
            width={96}
            height={80}
            className="h-20 w-auto object-contain"
          />
        </div>

        <h1 className="mb-6 font-general text-3xl font-medium tracking-tight text-slate-900 md:text-4xl">
          Thank you for Applying!
        </h1>

        <p className="mx-auto mb-8 max-w-lg font-inter text-lg font-regular leading-relaxed text-slate-600">
          Every application is carefully reviewed by our team. If your experience aligns with what we&apos;re building at
          Edunautics, we&apos;ll be in touch. Thank you for considering a future with us.
        </p>

        <button
          type="button"
          onClick={handleSubmitAnother}
          className="rounded-md border border-slate-800 bg-gray-200 px-7 py-3 text-sm font-medium text-slate-900 transition hover:bg-gray-300 hover:shadow-md"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-12" noValidate>
      {/* Section: Personal Information */}
      <section>
        <h2 className="mb-6 text-lg font-medium font-general text-gray-900 uppercase tracking-wider">Personal Information</h2>

        <div className="mb-8 rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 p-10 text-center">
          <p className="mb-1 text-sm font-medium font-general text-gray-800">Resume/CV</p>
          <p className="mb-4 text-xs font-inter font-regular leading-relaxed  text-gray-500">
            You can upload a .pdf, .doc, .docx, .txt or .rtf file.
            <br />
            Drag and drop or add a file.
          </p>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Choose File <span className="ml-1 text-gray-700">+</span>
          </button>
          <input
            type="file"
            id="resume-upload"
            accept=".pdf,.doc,.docx,.txt,.rtf,application/pdf"
            className="hidden"
            {...resumeFieldRest}
            ref={(el) => {
              resumeFieldRef(el);
              fileInputRef.current = el;
            }}
          />
          {isNonEmptyFileInputValue(resumeFiles) ? (
            <p className="mt-3 text-xs text-gray-600">
              {(resumeFiles as { 0?: File })[0]?.name}
            </p>
          ) : null}
          {errorText(errors.resume?.message as string | undefined)}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="first_name" className="mb-2 text-sm font-medium font-general text-gray-900">
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              placeholder="First name"
              autoComplete="given-name"
              className={`${inputClasses} font-inter font-regular leading-relaxed ${errors.firstName ? 'border-red-500' : ''}`}
              {...register('firstName')}
            />
            {errorText(errors.firstName?.message)}
          </div>
          <div className="flex flex-col">
            <label htmlFor="last_name" className="mb-2 text-sm font-medium font-general text-gray-900">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              placeholder="Last name"
              autoComplete="family-name"
              className={`${inputClasses} font-inter font-regular leading-relaxed ${errors.lastName ? 'border-red-500' : ''}`}
              {...register('lastName')}
            />
            {errorText(errors.lastName?.message)}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm font-medium font-general text-gray-900">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="your.email@example.com"
              autoComplete="email"
              className={`${inputClasses} font-inter font-regular leading-relaxed ${errors.email ? 'border-red-500' : ''}`}
              {...register('email')}
            />
            {errorText(errors.email?.message)}
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 text-sm font-medium font-general text-gray-900">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="+1 (555) 000-0000"
              autoComplete="tel"
              className={`${inputClasses} font-inter font-regular leading-relaxed ${errors.phone ? 'border-red-500' : ''}`}
              {...register('phone')}
            />
            {errorText(errors.phone?.message)}
          </div>
        </div>
      </section>

      {/* Section: Application Details */}
      <section>
        <h2 className="mb-6 text-lg font-bold uppercase tracking-wider">Application Details</h2>
        <div className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="position" className="mb-2 text-sm font-medium font-general text-gray-900">
              Position Applying For
            </label>
            <select
              id="position"
              className={`${inputClasses} text-gray-500 font-inter font-regular leading-relaxed ${errors.position ? 'border-red-500' : ''}`}
              {...register('position')}
            >
              <option value="">select an option</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="educator">Educator</option>
            </select>
            {errorText(errors.position?.message)}
          </div>
          <div className="flex flex-col">
            <label htmlFor="linkedin" className="mb-2 text-sm font-medium font-general text-gray-900">
              LinkedIn / Portfolio URL
            </label>
            <input
              type="url"
              id="linkedin"
              placeholder="https://linkedin.com/in/yourprofile"
              className={`${inputClasses} font-inter font-regular leading-relaxed ${errors.linkedin ? 'border-red-500' : ''}`}
              {...register('linkedin')}
            />
            {errorText(errors.linkedin?.message)}
          </div>
          <div className="flex flex-col">
            <label htmlFor="source" className="mb-2 text-sm font-medium font-general text-gray-900">
              How did you hear about us?
            </label>
            <select id="source" className={`${inputClasses} text-gray-500 font-inter font-regular leading-relaxed`} {...register('source')}>
              <option value="">select an option</option>
              <option value="linkedin">LinkedIn</option>
              <option value="referral">Referral</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </section>

      {/* Section: Cover Letter */}
      <section>
        <h2 className="mb-6 text-lg font-medium font-general text-gray-900 uppercase tracking-wider">Cover Letter / Motivation</h2>
        <div className="flex flex-col">
          <label htmlFor="motivation" className="mb-2 text-sm font-medium font-general text-gray-900">
            Tell us why you&apos;d like to join Edunautics
          </label>
          <textarea
            id="motivation"
            rows={6}
            placeholder="Share your motivation and what excites you about joining our team..."
            className={`${inputClasses} resize-none py-3 font-inter font-regular leading-relaxed`}
            {...register('coverLetter')}
          />
        </div>
      </section>

      <div>
        <button
          type="submit"
          className="rounded-md border border-edu-gold bg-edu-gold px-8 py-3 text-sm font-medium font-general text-white shadow-sm transition-colors hover:border-edu-gold hover:bg-white hover:text-edu-gold"
        >
          Submit Application
        </button>
      </div>
    </form>
  );
}
