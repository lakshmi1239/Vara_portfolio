import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

// Project Data
const projects = [
  {
    id: 1,
    title: 'Book Recommendation System',
    description:
      'Built a machine learning-based system using Collaborative and Content-Based Filtering techniques to recommend books based on user interests and reading history.',
    tags: ['Python', 'Machine Learning', 'Recommendation'],
    image: 'Book.jpg', // Update with your image path
    demoLink: '', // No live demo
    codeLink: '', // GitHub link not yet available
  },
  {
    id: 2,
    title: 'Natural Disaster Prediction System',
    description:
      'Developed a machine learning model to predict natural disasters like floods,land Scape and Strom using SVM,XG Boost,Random Forest Algorithms.',
    tags: ['Python', 'Machine Learning', 'Prediction'],
    image: 'natural.jpg', // Update with your image path
    demoLink: '', // No live demo
    codeLink: '', // GitHub link not yet available
  },
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const allTags = ['All', ...new Set(projects.flatMap((project) => project.tags))];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Check out some of my machine learning and web development projects that demonstrate my
            practical skills and hands-on experience in building real-world applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {allTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === tag
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.demoLink ? (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-gray-800 hover:text-blue-600 transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  ) : null}

                  {project.codeLink ? (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-gray-800 hover:text-blue-600 transition-colors"
                      aria-label="View source code"
                    >
                      <Github size={18} />
                    </a>
                  ) : (
                    <span className="text-sm text-white italic">Code not available</span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;