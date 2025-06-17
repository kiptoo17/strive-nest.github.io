
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Helping you turn ambition into innovation.";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-amber-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="text-center px-6 z-10">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-sky-400 to-amber-400 rounded-2xl flex items-center justify-center animate-float">
            <div className="w-12 h-12 bg-white rounded-xl opacity-90"></div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-amber-400 bg-clip-text text-transparent">
          StriveNest
        </h1>
        
        <div className="text-xl md:text-2xl mb-4 h-8 flex items-center justify-center">
          <span className="border-r-2 border-sky-400 pr-1 animate-pulse">
            {text}
          </span>
        </div>
        
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Where ideas take root and grow
        </p>
        
        <button
          onClick={scrollToNext}
          className="group flex items-center justify-center mx-auto px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25"
        >
          <span className="mr-2">Discover Our Story</span>
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sky-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sky-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
