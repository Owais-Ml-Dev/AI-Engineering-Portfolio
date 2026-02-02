import { useEffect, useRef, useState } from 'react';
import { Trophy, Users, Award, FileText, Mic2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const achievements = [
  {
    id: 1,
    title: 'Smart India Hackathon 2023',
    description: 'Led a team of 6 among 44,000+ teams to build an AI-powered sign language to speech system, reducing communication barriers for speech-impaired individuals using ESP32-based sensor fusion and real-time signal preprocessing.',
    icon: Trophy,
    stats: '44,000+ Teams',
    color: 'from-yellow-500 to-orange-500',
    highlight: 'National Level',
    certificate: 'https://drive.google.com/file/d/1aAw4brjEdgk7V-FAcAVVH7JtOih5kpQw/view?usp=drive_link',
  },
  {
    id: 2,
    title: 'Creative Ideas & Innovations',
    description: 'Secured 2nd Runner Up at a national-level competition by designing a legal document automation platform that generates region-specific documents through rule-driven workflows, reducing manual paperwork time by 70%.',
    icon: Award,
    stats: '2nd Runner Up',
    color: 'from-purple-500 to-pink-500',
    highlight: 'National Level',
    certificate: 'https://drive.google.com/file/d/1UBc7V9H57dBHvH4cNDfI0Xs84NKO-uLJ/view?usp=drive_link',
  },
  {
    id: 3,
    title: 'Project Deep Blue',
    description: 'Led a team of 4 to develop an end-to-end meeting transcription and summarization system that processes meeting videos, extracts audio, performs speech-to-text conversion, and generates structured summaries. Reached Semi Finals.',
    icon: Mic2,
    stats: 'Semi Finals',
    color: 'from-blue-500 to-cyan-500',
    highlight: 'Team Lead',
    certificate: null,
  },
];

export default function Achievements() {
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
      id="achievements"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-purple-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-yellow-500/10 text-yellow-400 mb-4">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Awards & <span className="text-gradient">Recognition</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Notable accomplishments from hackathons, competitions, and innovative projects that showcase my leadership and technical abilities.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`group relative glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                <achievement.icon className="w-8 h-8 text-white" />
              </div>

              {/* Badge */}
              <div className="absolute top-6 right-6">
                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${achievement.color} text-white`}>
                  {achievement.highlight}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-colors">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {achievement.description}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">{achievement.stats}</span>
                </div>
                {achievement.certificate && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-xs hover:text-white"
                    asChild
                  >
                    <a href={achievement.certificate} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Certificate
                    </a>
                  </Button>
                )}
              </div>

              {/* Glow Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
              />
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
              <Trophy className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-gradient mb-1">3+</div>
            <p className="text-sm text-muted-foreground">Hackathons</p>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-3xl font-bold text-gradient mb-1">14+</div>
            <p className="text-sm text-muted-foreground">Team Members Led</p>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mx-auto mb-3">
              <FileText className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-gradient mb-1">70%</div>
            <p className="text-sm text-muted-foreground">Efficiency Gain</p>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-orange-400" />
            </div>
            <div className="text-3xl font-bold text-gradient mb-1">44K+</div>
            <p className="text-sm text-muted-foreground">Competitors</p>
          </div>
        </div>
      </div>
    </section>
  );
}
