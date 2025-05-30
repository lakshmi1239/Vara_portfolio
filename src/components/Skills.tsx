import React from 'react';
import { skills } from '../data';
import * as LucideIcons from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are my technical skills and proficiency levels in various technologies and tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            // @ts-ignore
            const Icon = LucideIcons[skill.icon] || LucideIcons.Code;
            
            return (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                  </div>
                  <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-green-400 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Other Skills & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {['Core Java','VS Code', 'GitHub', 'Responsive Design','Ms Excel','Ms Word','Power BI'].map((item, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;