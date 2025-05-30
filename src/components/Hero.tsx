import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center py-20 bg-gradient-to-br from-blue-50 via-white to-green-50"
    >
      <div className="container mx-auto px-4 md:px-6 pt-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="animate-fade-in-up">
              <span className="inline-block text-blue-600 font-semibold mb-2">
                Hello, I'm
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Varalakshmi Kovela
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
                  Full Stack Developer
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Masters of computer application student. Seeking an entry-level opportunity with an esteemed organization where I can utilize my skills and enhance learning in the field of work. Capable of mastering new technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-md"
                >
                  Get In Touch
                </a>
                <a 
                  href="Varalakshmi_resume_2.pdf" 
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2 group"
                >
                  <Download size={18} className="group-hover:animate-bounce" /> 
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-green-400 opacity-10 animate-pulse"></div>
              <img 
                src="profile.jpg" 
                alt="Profile" 
                className="rounded-full w-full h-full object-cover border-8 border-white shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <div className="bg-gradient-to-r from-blue-500 to-green-400 rounded-full p-2 text-white">
                  <Download size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-16 animate-bounce">
          <a href="#about" aria-label="Scroll to About section">
            <ArrowDown size={24} className="mx-auto text-gray-400 hover:text-blue-600 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;