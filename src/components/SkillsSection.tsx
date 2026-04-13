import SectionHeader from "./SectionHeader";

const skills = [
  "Python", "SQL", "Java", "JavaScript", "TypeScript", "C",
  "Machine Learning", "Deep Learning", "Generative AI", "NLP", "Computer Vision",
  "Scikit-learn", "TensorFlow", "PyTorch", "MediaPipe", "YOLOv8",
  "RAG Pipeline", "Model Quantisation", "CNN", "Data Analysis",
  "Flask API", "FastAPI", "React", "Streamlit",
  "MongoDB", "Vector DB", "Git & GitHub", "Docker", "Problem Solving"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="Skills" sub="Technical Expertise" />
      
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="skill-tag hover:bg-primary/10 hover:glow-primary cursor-default"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {skill}
          </span>
        ))}
      </div>
      </div>
    </section>
  );
};

export default SkillsSection;
