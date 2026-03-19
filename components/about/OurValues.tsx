import { Lightbulb, BookOpen, Bot, Users, GraduationCap, Rocket } from 'lucide-react';

export default function OurValues() {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl md:text-3xl font-bold tracking-tight">Our Values</h2>
        <h3 className="text-xl font-bold text-slate-800">Principles That Power Every Learner&apos;s Journey</h3>
        <p className="text-slate-600 text-lg max-w-4xl">At Edunautics, our values are the compass guiding how we teach, learn, and innovate. They shape our culture, our programs, and every collaboration - ensuring that learning isn&apos;t just about growth, but about impact with integrity.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-4">
          <Lightbulb className="text-[#f9a825] w-10 h-10" />
          <h4 className="text-lg font-bold">Curiosity Over Conformity</h4>
          <p className="text-slate-500 text-sm leading-relaxed">Every breakthrough begins with a question. Instead of memorizing answers, we encourage learners to explore, challenge assumptions, and pursue deeper understanding.</p>
        </div>
        <div className="flex flex-col gap-4">
          <BookOpen className="text-[#f9a825] w-10 h-10" />
          <h4 className="text-lg font-bold">Research-Driven Growth</h4>
          <p className="text-slate-500 text-sm leading-relaxed">Every program and workshop is research-backed. We emphasize evidence-based learning that connects theory with real outcomes and prepares students to lead innovation.</p>
        </div>
        <div className="flex flex-col gap-4">
          <Bot className="text-[#f9a825] w-10 h-10" />
          <h4 className="text-lg font-bold">Ethical Use of AI and Technology</h4>
          <p className="text-slate-500 text-sm leading-relaxed">We see AI as a tool for discovery, not a shortcut. Learners understand ethics, responsibility, and social impact — building innovators who create with purpose.</p>
        </div>
        <div className="flex flex-col gap-4">
          <Users className="text-[#f9a825] w-10 h-10" />
          <h4 className="text-lg font-bold">Collaboration Over Competition</h4>
          <p className="text-slate-500 text-sm leading-relaxed">We grow together. From peer circles to interdisciplinary teams, our spaces thrive on cooperation, shared knowledge, and mentorship that uplifts everyone.</p>
        </div>
        <div className="flex flex-col gap-4">
          <GraduationCap className="text-[#f9a825] w-10 h-10" />
          <h4 className="text-lg font-bold">Real-World Relevance</h4>
          <p className="text-slate-500 text-sm leading-relaxed">Learning matters when it creates impact. Our content, partnerships, and projects reflect industry needs and global trends, bridging education and employment.</p>
        </div>
        <div className="flex flex-col gap-4">
          <Rocket className="text-[#f9a825] w-10 h-10" />
          <h4 className="text-lg font-bold">Lifelong Learning Mindset</h4>
          <p className="text-slate-500 text-sm leading-relaxed">The world evolves, and so do we. We nurture adaptability, resilience, and a drive to learn and grow — essential for future leaders.</p>
        </div>
      </div>
    </section>
  );
}
