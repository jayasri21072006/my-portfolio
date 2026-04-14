import SectionHeader from "./SectionHeader";
import { Code2, Brain, Box, Wrench } from "lucide-react";

const skillGroups = [
  {
    category: "Languages",
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
    skills: ["Python", "SQL", "Java", "C", "HTML/CSS/JS"]
  },
  {
    category: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6 text-violet-400" />,
    skills: ["Deep Learning", "Generative AI", "NLP", "Computer Vision", "RAG Pipeline"]
  },
  {
    category: "Frameworks & Libs",
    icon: <Box className="w-6 h-6 text-fuchsia-400" />,
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "YOLOv8", "FastAPI", "Streamlit"]
  },
  {
    category: "Tools & Engineering",
    icon: <Wrench className="w-6 h-6 text-emerald-400" />,
    skills: ["MongoDB", "Vector DB", "Docker", "Git & GitHub", "Model Quantisation"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Skills" sub="Technical Expertise" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="card-glass p-8 rounded-[2.5rem] border border-white/10 hover:border-violet-500/30 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-white/5 shadow-inner">
                  {group.icon}
                </div>
                <h3 className="text-lg font-black text-white group-hover:text-violet-300 transition-colors uppercase tracking-tight">
                  {group.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-[11px] font-black text-white/80 group-hover:text-white group-hover:border-violet-500/20 transition-all uppercase tracking-widest hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
