
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive websites that convert visitors into customers",
      tools: ["React", "TypeScript", "Tailwind", "Next.js"],
      icon: "🌐"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform apps that users love",
      tools: ["React Native", "Flutter", "Swift", "Kotlin"],
      icon: "📱"
    },
    {
      title: "Custom Software Solutions",
      description: "Tailored systems that solve your unique business challenges",
      tools: ["Node.js", "Python", "PostgreSQL", "AWS"],
      icon: "⚙️"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users actually enjoy",
      tools: ["Figma", "Adobe XD", "Sketch", "Principle"],
      icon: "🎨"
    },
    {
      title: "Tech Consulting",
      description: "Strategic guidance to help startups make smart technology decisions",
      tools: ["Architecture", "Strategy", "Optimization", "Scaling"],
      icon: "💡"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section id="services" ref={sectionRef} className="min-h-screen py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We turn your vision into reality with cutting-edge technology and thoughtful design
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-amber-400 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 cursor-pointer transform hover:scale-105 ${isVisible ? 'animate-fade-in' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-sky-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-sm border border-sky-500/30"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className={`flex items-center text-sky-400 font-semibold transition-all duration-300 ${hoveredService === index ? 'translate-x-2' : ''}`}>
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r from-sky-500/20 to-amber-500/20 rounded-2xl transition-opacity duration-300 ${hoveredService === index ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
