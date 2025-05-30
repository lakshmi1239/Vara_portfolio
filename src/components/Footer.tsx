import React from 'react';
import { socialLinks } from '../data';
import * as LucideIcons from 'lucide-react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-8">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold mb-4">Varalakshmi Kovela</h3>
            <p className="text-gray-400 mb-6">
              A passionate full stack developer focused on creating intuitive and engaging user experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                // @ts-ignore
                const Icon = LucideIcons[link.icon] || LucideIcons.Link;
                
                return (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={link.platform}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                East Godavari,Andhar Pradesh,India
              </li>
              <li>
                <a href="mailto:lakshmikovela42@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  lakshmikovela42@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+9642601137" className="text-gray-400 hover:text-white transition-colors">
                  +91 9642601137
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Varalakshmi. All rights reserved.
          </p>
          
          <a 
            href="#home" 
            className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition-all transform hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;