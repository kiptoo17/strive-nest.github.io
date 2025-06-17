
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-amber-500 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-lg opacity-90"></div>
              </div>
              <span className="text-2xl font-bold">StriveNest</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Where ideas take root and grow. We help dreamers and entrepreneurs build their digital future through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@strivenest.com"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-300 hover:text-sky-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>Custom Software</li>
              <li>UI/UX Design</li>
              <li>Tech Consulting</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-300 text-sm mb-4 md:mb-0">
            © 2024 StriveNest Solutions. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-slate-300 hover:text-sky-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-300 hover:text-sky-400 text-sm transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-sky-400 hover:text-sky-300 transition-colors group"
            >
              <span className="text-sm">Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
