import React from 'react';
import { aboutMe } from '../data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{aboutMe.title}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-lg transform translate-x-4 translate-y-4"></div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                Who am I?
              </h3>
              
              <div className="text-gray-600 space-y-4">
                {aboutMe.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium text-gray-800">Varalakshmi Kovela</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-800">lakshmikovela42@gmail.com</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-gray-800">East Godavari,Andhar Pradesh,India</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Availability</p>
                  <p className="font-medium text-blue-600">Available for hire</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;