import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Brain, Mic, ScanEye, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'GPT-Style Language Model',
    description: 'Designed and implemented an end-to-end GPT-style language model including tokenization, positional encoding, multi-head self-attention, transformer blocks, and custom training pipeline with next-token prediction.',
    image: '/images/project-gpt.jpg',
    icon: Brain,
    tags: ['PyTorch', 'Transformers', 'NLP', 'Deep Learning'],
    github: 'https://github.com/Owais-Ml-Dev/GPT-from-Scratch/tree/main',
    demo: null,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Speech Emotion Recognition',
    description: 'Developed an LSTM-based speech emotion recognition model using Librosa for audio feature extraction, implementing time series preprocessing, normalization, and regularization for high classification accuracy.',
    image: '/images/project-speech.jpg',
    icon: Mic,
    tags: ['LSTM', 'Librosa', 'Audio Processing', 'TensorFlow'],
    github: 'https://github.com/Owais-Shaikh-0786/Speech-Emotion-Recognition-with-librosa',
    demo: null,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'AI Face Recognition Attendance',
    description: 'Built an automated attendance system using face recognition to log entry and exit times and mark absentees automatically. Reduced manual errors and improved efficiency through real-time computer vision.',
    image: '/images/project-face.jpg',
    icon: ScanEye,
    tags: ['OpenCV', 'Face Recognition', 'Computer Vision', 'Python'],
    github: 'https://github.com/Owais-Shaikh-0786/Attendance_System',
    demo: null,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'Drowsiness Detection System',
    description: 'Developed a real-time driver drowsiness detection system using OpenCV-based eye state monitoring, triggering alert mechanisms when prolonged eye closure is detected to help prevent accidents.',
    image: '/images/project-drowsiness.jpg',
    icon: AlertTriangle,
    tags: ['OpenCV', 'Real-time Processing', 'Computer Vision', 'Safety AI'],
    github: 'https://github.com/Owais-Shaikh-0786/Drowsiness-Detection-System',
    demo: null,
    color: 'from-orange-500 to-red-500',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      id="projects"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400 mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            A showcase of my AI and machine learning projects, from language models to computer vision systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Icon Badge */}
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-white/5 text-muted-foreground hover:bg-white/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-white/20 hover:bg-white/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 hover:bg-white/5"
            asChild
          >
            <a href="https://github.com/Owais-Ml-Dev" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
