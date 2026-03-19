export function ApplicationForm() {
  const inputClasses = "border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors w-full bg-white";

  return (
    <form action="#" method="POST" className="space-y-12">
      {/* Section: Personal Information */}
      <section>
        <h2 className="text-lg font-bold uppercase tracking-wider mb-6">Personal Information</h2>

        {/* File Upload Area */}
        <div className="border-2 border-dashed border-gray-200 rounded-lg p-10 mb-8 bg-gray-50 text-center">
          <p className="text-sm font-bold text-gray-800 mb-1">Resume/CV</p>
          <p className="text-xs text-gray-500 mb-4">
            You can upload a .pdf, .doc, .docx, .txt or .rtf file.<br />
            Drag and drop or add a file.
          </p>
          <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Choose File <span className="ml-1 text-gray-400">+</span>
          </button>
          <input type="file" id="resume-upload" name="resume" className="hidden" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="first_name" className="text-sm font-semibold mb-2">First Name</label>
            <input type="text" id="first_name" name="first_name" placeholder="First name" className={inputClasses} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="last_name" className="text-sm font-semibold mb-2">Last Name</label>
            <input type="text" id="last_name" name="last_name" placeholder="Last name" className={inputClasses} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold mb-2">Email Address</label>
            <input type="email" id="email" name="email" placeholder="your.email@example.com" className={inputClasses} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-semibold mb-2">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" className={inputClasses} />
          </div>
        </div>
      </section>

      {/* Section: Application Details */}
      <section>
        <h2 className="text-lg font-bold uppercase tracking-wider mb-6">Application Details</h2>
        <div className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="position" className="text-sm font-semibold mb-2">Position Applying For</label>
            <select id="position" name="position" className={`${inputClasses} text-gray-500`}>
              <option value="">select an option</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="educator">Educator</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="linkedin" className="text-sm font-semibold mb-2">LinkedIn / Portfolio URL</label>
            <input type="url" id="linkedin" name="linkedin" placeholder="https://linkedin.com/in/yourprofile" className={inputClasses} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="source" className="text-sm font-semibold mb-2">How did you hear about us?</label>
            <select id="source" name="source" className={`${inputClasses} text-gray-500`}>
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
        <h2 className="text-lg font-bold uppercase tracking-wider mb-6">Cover Letter / Motivation</h2>
        <div className="flex flex-col">
          <label htmlFor="motivation" className="text-sm font-semibold mb-2">Tell us why you&apos;d like to join Edunautics</label>
          <textarea id="motivation" name="motivation" rows={6} placeholder="Share your motivation and what excites you about joining our team..." className={`${inputClasses} py-3 resize-none`}></textarea>
        </div>
      </section>

      {/* Submit Button */}
      <div>
        <button type="submit" className="bg-amber-500 text-white px-8 py-3 rounded-md font-bold text-sm shadow-sm hover:bg-amber-600 transition">
          Submit Application
        </button>
      </div>
    </form>
  );
}
