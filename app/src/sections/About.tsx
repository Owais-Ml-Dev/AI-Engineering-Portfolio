import { useEffect, useRef, useState } from 'react';
import { GraduationCap, MapPin, Mail, Phone, Calendar } from 'lucide-react';

const stats = [
  { label: 'CGPA', value: '8.44', suffix: '' },
  { label: 'Projects', value: '5', suffix: '+' },
  { label: 'Hackathons', value: '3', suffix: '+' },
  { label: 'Certifications', value: '2', suffix: '+' },
];

export default function About() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Passionate About <span className="text-gradient">AI Innovation</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Transforming complex problems into intelligent solutions through machine learning and deep learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Info */}
          <div className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Bio Card */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm an aspiring AI and Machine Learning Engineer with strong foundations in machine learning, 
                deep learning, and large language models. I specialize in building complete AI systems, 
                including transformer-based language models, and I'm passionate about creating technology 
                that makes a positive impact on society.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey includes hands-on experience with GPT-style models, computer vision systems, 
                and audio processing applications. I thrive in collaborative environments and enjoy 
                tackling challenging problems that push the boundaries of what's possible with AI.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-effect rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Maharashtra, India</p>
                </div>
              </div>
              <div className="glass-effect rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Degree</p>
                  <p className="font-medium">B.E. CSE (AI & ML)</p>
                </div>
              </div>
              <div className="glass-effect rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-sm">owais.shaikh.ml...</p>
                </div>
              </div>
              <div className="glass-effect rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 9372929803</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Education */}
          <div className={`space-y-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-effect rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Education Timeline */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                Education
              </h3>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-blue-500/30">
                  <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-blue-500 -translate-x-[7px]" />
                  <div className="mb-1">
                    <span className="text-sm text-blue-400 font-medium">2021 - 2025</span>
                  </div>
                  <h4 className="font-semibold">B.E. in Computer Science (AI & ML)</h4>
                  <p className="text-muted-foreground text-sm">M. H. Saboo Siddik College of Engineering</p>
                  <p className="text-sm text-green-400 mt-1">CGPA: 8.44</p>
                </div>
                <div className="relative pl-6 border-l-2 border-purple-500/30">
                  <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-purple-500 -translate-x-[7px]" />
                  <div className="mb-1">
                    <span className="text-sm text-purple-400 font-medium">2019 - 2021</span>
                  </div>
                  <h4 className="font-semibold">Higher Secondary Certificate</h4>
                  <p className="text-muted-foreground text-sm">K C College</p>
                  <p className="text-sm text-green-400 mt-1">Percentage: 78.67%</p>
                </div>
                <div className="relative pl-6 border-l-2 border-orange-500/30">
                  <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-orange-500 -translate-x-[7px]" />
                  <div className="mb-1">
                    <span className="text-sm text-orange-400 font-medium">Completed</span>
                  </div>
                  <h4 className="font-semibold">Secondary School Certificate</h4>
                  <p className="text-muted-foreground text-sm">St. Xavier's High School, Fort</p>
                  <p className="text-sm text-green-400 mt-1">Percentage: 70.40%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
