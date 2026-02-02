import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Data Science Intern',
    company: 'Oasis Infobyte',
    location: 'Remote',
    duration: 'October 2023',
    type: 'Internship',
    description: [
      'Completed a one-month intensive internship focused on practical data science and machine learning applications',
      'Performed data cleaning, preprocessing, and exploratory data analysis on real-world datasets',
      'Supported model development and evaluation using Python-based tools and libraries',
      'Contributed effectively in both independent and team-based environments',
    ],
    skills: ['Python', 'Data Analysis', 'Machine Learning', 'Pandas', 'NumPy'],
    color: 'from-blue-500 to-cyan-500',
  },
];

const certifications = [
  {
    name: 'Supervised Machine Learning: Regression and Classification',
    provider: 'Coursera',
    icon: '📊',
  },
  {
    name: 'Crash Course on Python',
    provider: 'Coursera',
    icon: '🐍',
  },
];

export default function Experience() {
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
      id="experience"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-green-500/10 text-green-400 mb-4">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            My professional journey and the valuable experience I have gained in the field of AI and data science.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Cards */}
          <div className="lg:col-span-2 space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`group glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <Briefcase className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                      <p className="text-lg text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-muted-foreground">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-sm bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Looking for opportunities */}
            <div
              className={`glass-effect rounded-2xl p-8 border border-dashed border-white/20 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Seeking New Opportunities</h3>
                  <p className="text-muted-foreground">
                    I am currently looking for internship or entry-level roles in AI/ML engineering. 
                    Let us connect and discuss how I can contribute to your team!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Sidebar */}
          <div className="space-y-6">
            <div
              className={`glass-effect rounded-2xl p-6 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                  🏆
                </span>
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={cert.name}
                    className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{cert.icon}</span>
                      <div>
                        <p className="font-medium text-sm leading-tight mb-1">{cert.name}</p>
                        <p className="text-xs text-muted-foreground">{cert.provider}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div
              className={`glass-effect rounded-2xl p-6 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  🌐
                </span>
                Languages
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">English</span>
                  <span className="text-xs text-muted-foreground">Professional</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Hindi</span>
                  <span className="text-xs text-muted-foreground">Native</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                </div>
              </div>
            </div>

            {/* Interests */}
            <div
              className={`glass-effect rounded-2xl p-6 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                  💡
                </span>
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Traveling', 'Cycling', 'Chess', 'Music'].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-lg text-sm bg-white/5 text-muted-foreground"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
