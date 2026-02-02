import { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Brain, 
  Layers, 
  MessageSquare, 
  Eye, 
  Database,
  GitBranch,
  Cloud
} from 'lucide-react';

const skillCategories = [
  {
    id: 'frameworks',
    title: 'Frameworks & Languages',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: ['Python', 'PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'Hugging Face', 'Git'],
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    skills: [
      'Linear & Logistic Regression',
      'Classification',
      'Decision Trees',
      'Random Forests',
      'XGBoost',
      'Gradient Boosting',
      'Hyperparameter Tuning',
      'Feature Engineering',
      'Cross-Validation',
    ],
  },
  {
    id: 'dl',
    title: 'Deep Learning',
    icon: Layers,
    color: 'from-green-500 to-emerald-500',
    skills: [
      'Neural Networks',
      'CNNs',
      'RNNs (LSTM, GRU)',
      'Transfer Learning',
      'Attention Mechanisms',
      'Transformer Architecture',
    ],
  },
  {
    id: 'nlp',
    title: 'LLM & NLP',
    icon: MessageSquare,
    color: 'from-orange-500 to-amber-500',
    skills: ['Tokenization', 'Text Preprocessing', 'LLM Fine-tuning', 'GPT-style Models'],
  },
  {
    id: 'cv',
    title: 'Computer Vision & Audio',
    icon: Eye,
    color: 'from-red-500 to-rose-500',
    skills: [
      'OpenCV',
      'Face Recognition',
      'Eye State Detection',
      'Real-Time Video Processing',
      'Librosa',
      'MFCC Feature Extraction',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: Database,
    color: 'from-indigo-500 to-violet-500',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Firebase'],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 mb-4">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            A comprehensive toolkit of technologies and methodologies I've mastered throughout my AI/ML journey.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className={`group relative glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      hoveredCategory === category.id
                        ? 'bg-white/15 text-white scale-105'
                        : 'bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white'
                    }`}
                    style={{
                      transitionDelay: hoveredCategory === category.id ? `${skillIndex * 30}ms` : '0ms',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
              />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 grid sm:grid-cols-3 gap-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
              <GitBranch className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="font-semibold mb-2">Version Control</h4>
            <p className="text-sm text-muted-foreground">Git, GitHub, Collaborative Development</p>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
              <Cloud className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="font-semibold mb-2">Cloud & Deployment</h4>
            <p className="text-sm text-muted-foreground">Firebase, Model Deployment</p>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <Database className="w-6 h-6 text-green-400" />
            </div>
            <h4 className="font-semibold mb-2">Data Processing</h4>
            <p className="text-sm text-muted-foreground">Pandas, NumPy, Data Visualization</p>
          </div>
        </div>
      </div>
    </section>
  );
}
