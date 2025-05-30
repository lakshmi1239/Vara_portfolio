import React from 'react';
import { education, experiences } from '../data';
import { Calendar, GraduationCap, Briefcase, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Education & Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            My academic background and professional journey that have shaped my skills and knowledge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all relative"
                >
                  <div className="absolute -left-3 top-6 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-1">{item.degree}</h4>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <span>{item.institution}</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-blue-600 mb-3">
                    <Calendar size={14} />
                    <span>{item.startDate} - {item.endDate}</span>
                  </div>
                  {item.description && (
                    <p className="text-gray-600">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-green-100 p-2 rounded-lg text-green-600">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Internship</h3>
            </div>
            
            <div className="space-y-8">
              {experiences.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all relative"
                >
                  <div className="absolute -left-3 top-6 w-6 h-6 bg-green-600 rounded-full border-4 border-white"></div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h4>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <span>{item.company}</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-green-600 mb-3">
                    <Calendar size={14} />
                    <span>{item.startDate} - {item.endDate}</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;