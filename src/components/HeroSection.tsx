import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 text-center pt-20">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="relative mb-8 inline-block animate-slide-up">
          <div className="w-36 h-36 rounded-[2.5rem] flex items-center justify-center text-white text-5xl font-black shadow-[0_0_50px_-12px_rgba(124,58,237,0.5)] rotate-3 hover:rotate-0 transition-all duration-500 cursor-default"
            style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}>
            JT
          </div>
        </div>

        <h1 className="text-6xl sm:text-7xl font-black text-white mb-4 tracking-tighter leading-[1.1] animate-slide-up">
          Jayasri T
        </h1>
        <p className="text-2xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400 animate-slide-up">
          AI & ML Engineer
        </p>
        <p className="max-w-2xl text-slate-400 text-lg leading-relaxed mb-10 animate-fade-in-delayed mx-auto">
          Aspiring AI & ML Engineer with a strong foundation in deep learning, natural language processing, and computer vision. 
          Proven track record of building end-to-end intelligent systems, from real-time monitoring solutions to 
          predictive analytics platforms. Maintaining academic excellence with a CGPA of{" "}
          <span className="font-extrabold text-violet-400 border-b-2 border-violet-500/30">9.35</span> (up to 5th Semester).
        </p>

        <div className="flex gap-4 flex-wrap justify-center mb-16 animate-fade-in-delayed">
          <a href="#projects" className="px-8 py-3.5 rounded-2xl text-sm font-black text-white shadow-xl shadow-violet-500/20 hover:scale-105 transition-all" style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>View Projects</a>
          <a href="#contact" className="px-8 py-3.5 rounded-2xl text-sm font-black text-slate-300 border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all">Get In Touch</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl mx-auto animate-fade-in-delayed">
          {[
            { label: "CGPA", value: "9.35", icon: "🎯" },
            { label: "DSA SOLVED", value: "200+", icon: "💻" },
            { label: "INTERNSHIPS", value: "4", icon: "🏢" },
            { label: "PROJECTS", value: "3", icon: "🚀" },
          ].map(({ label, value, icon }) => (
            <div key={label} className="card-glass rounded-[2rem] p-6 text-center">
              <div className="text-3xl mb-2">{icon}</div>
              <p className="text-3xl font-black text-white tracking-tighter">{value}</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
