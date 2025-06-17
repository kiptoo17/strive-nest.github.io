
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "EcoTech Startup",
      summary: "Sustainable energy platform connecting users with green solutions",
      stack: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web App",
      image: "bg-gradient-to-br from-green-400 to-emerald-600"
    },
    {
      title: "FitTracker Mobile",
      summary: "Personal fitness companion with AI-powered workout recommendations",
      stack: ["React Native", "TensorFlow", "Firebase"],
      category: "Mobile App",
      image: "bg-gradient-to-br from-purple-400 to-pink-600"
    },
    {
      title: "RetailSync Dashboard",
      summary: "Inventory management system for multi-location retail chains",
      stack: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      category: "Enterprise Software",
      image: "bg-gradient-to-br from-blue-400 to-cyan-600"
    },
    {
      title: "CreativeSpace Portfolio",
      summary: "Interactive portfolio platform for digital artists and designers",
      stack: ["Next.js", "Prisma", "Vercel", "Cloudinary"],
      category: "Creative Platform",
      image: "bg-gradient-to-br from-orange-400 to-red-600"
    },
    {
      title: "HealthConnect Telemedicine",
      summary: "HIPAA-compliant telehealth platform connecting patients and doctors",
      stack: ["Angular", "C#", ".NET Core", "Azure"],
      category: "Healthcare",
      image: "bg-gradient-to-br from-teal-400 to-blue-600"
    },
    {
      title: "EduLearn LMS",
      summary: "Comprehensive learning management system for online education",
      stack: ["Django", "React", "Redis", "AWS"],
      category: "Education Tech",
      image: "bg-gradient-to-br from-indigo-400 to-purple-600"
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
    <section id="portfolio" ref={sectionRef} className="min-h-screen py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Our Portfolio
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real solutions for real dreamers — see how we've helped turn visions into reality
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-amber-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${isVisible ? 'animate-fade-in' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image/Visual */}
                <div className={`h-48 relative ${project.image} flex items-center justify-center`}>
                  <div className="text-white text-center p-6">
                    <div className="text-sm font-semibold opacity-90 mb-2">
                      {project.category}
                    </div>
                    <div className="w-16 h-16 bg-white/20 rounded-xl backdrop-blur-sm mx-auto"></div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="text-white text-center">
                      <ArrowRight className="w-8 h-8 mx-auto mb-2" />
                      <span className="text-sm font-semibold">View Details</span>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.summary}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-sky-100 hover:text-sky-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent */}
                <div className={`h-1 bg-gradient-to-r from-sky-500 to-amber-500 transform origin-left transition-transform duration-300 ${hoveredProject === index ? 'scale-x-100' : 'scale-x-0'}`}></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
