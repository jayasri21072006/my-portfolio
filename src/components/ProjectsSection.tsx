import SectionHeader from "./SectionHeader";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Proctoring System",
    sub: "YOLOv8 & MediaPipe",
    description: "Real-time AI-powered exam proctoring system using YOLOv8, MediaPipe, and OpenCV. Detects suspicious behaviors, logs incidents automatically, and raises alerts.",
    techStack: ["Python", "YOLOv8", "MediaPipe", "OpenCV", "Streamlit"],
    github: "https://github.com/jayasri21072006/examination-monitoring-system",
    icon: "🎓"
  },
  {
    title: "Sentiment Hub",
    sub: "NLP SIH 2025",
    description: "NLP web app selected for Smart India Hackathon 2025. Analyzes stakeholder comments to classify sentiment and visualize themes via interactive word clouds.",
    techStack: ["Python", "NLP", "Streamlit", "Pandas", "WordCloud"],
    github: "https://github.com/jayasri21072006/sentiment_analysis_with_wordcloud",
    demo: "https://sentimentanalysiswithwordcloud.streamlit.app/",
    icon: "💬"
  },
  {
    title: "Crypto Predictor",
    sub: "Machine Learning",
    description: "A Machine Learning web app that predicts cryptocurrency liquidity from recent market data. Includes full data preprocessing, EDA, feature engineering, and a Streamlit UI.",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
    github: "https://github.com/jayasri21072006/crypto-liquidity-predictor",
    demo: "https://crypto-liquidity-predictor-jorq5yxc3mrkqfeovdcvuq.streamlit.app/",
    icon: "📈"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-4">
      <div className="max-w-6xl mx-auto text-left">
        <SectionHeader title="Projects" sub="Technical Gallery" />
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <div key={idx} className="card-glass rounded-[2.5rem] p-8 flex flex-col h-full hover:border-violet-500/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-3xl mb-6 shadow-inner ring-1 ring-white/5">
                {p.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-1">{p.title}</h3>
              <p className="text-[10px] font-black text-violet-500 uppercase tracking-widest mb-4">{p.sub}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{p.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {p.techStack.map((tech, i) => (
                  <span key={i} className="text-[10px] px-2 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-300 font-bold uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 bg-white/10 border border-white/5 text-white text-center rounded-2xl font-black text-xs hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                  <Github className="w-4 h-4" /> GITHUB
                </a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 bg-white text-slate-950 text-center rounded-2xl font-black text-xs hover:bg-violet-400 transition-colors flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" /> DEMO
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
