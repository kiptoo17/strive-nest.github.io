
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="min-h-screen py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Our Manifesto
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-amber-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <blockquote className="text-2xl md:text-3xl font-light text-slate-700 italic leading-relaxed">
                "We are a team born from struggle and built through code."
              </blockquote>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                StriveNest is more than software — it's a mindset. We believe that every great achievement starts with a simple idea and the courage to pursue it.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Our mission is to empower creators, dreamers, and startups through tailored digital solutions that don't just meet expectations — they exceed dreams.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Our Origin</h3>
                <p className="text-slate-600">
                  Born from the need to bridge the gap between big dreams and technical reality.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Our Promise</h3>
                <p className="text-slate-600">
                  To treat every project as if it were our own dream coming to life.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Our Vision</h3>
                <p className="text-slate-600">
                  A world where technology barriers never stop great ideas from flourishing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
