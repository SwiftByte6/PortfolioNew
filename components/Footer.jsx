import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react'; // Optional: install lucide-react for icons

const Footer = () => {
  return (
    <footer className="bg-white/5 backdrop-blur-md border-t border-white/10 text-white py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        
        {/* Personal Branding */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Rohit Soneji</h2>
          <p className="text-white/70">
            Crafting scalable web apps, open-source tools, and digital experiences with purpose.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="text-white font-medium">Quick Links</h3>
          <ul className="space-y-1 text-white/70">
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-3 md:items-end text-white/70">
          <h3 className="text-white font-medium">Connect</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Mail size={16} /> 
              <a href="mailto:your@email.com" className="hover:text-blue-400 transition">your@email.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Github size={16} /> 
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">GitHub</a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin size={16} /> 
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/60 text-xs">
        © {new Date().getFullYear()} Rohit Soneji. Built with <span className="text-red-400">♥</span> using React & Tailwind.
      </div>
    </footer>
  );
};

export default Footer;
