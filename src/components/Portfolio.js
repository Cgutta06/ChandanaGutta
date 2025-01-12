import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      title: "Building Envelope Commissioning",
      description: "Led comprehensive building envelope commissioning process for commercial properties",
      skills: ["Facade Testing", "Load Testing", "Technical Documentation"],
      image: "/placeholder-1.jpg"
    },
    {
      title: "Construction Material Testing",
      description: "Conducted extensive testing of construction materials for quality assurance",
      skills: ["Material Testing", "Quality Control", "Technical Analysis"],
      image: "/placeholder-2.jpg"
    },
    {
      title: "Architectural Design Projects",
      description: "Designed and developed architectural plans for residential and commercial projects",
      skills: ["AutoCAD", "Revit", "3D Modeling"],
      image: "/placeholder-3.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-12"
      >
        Portfolio
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
              <img
                src="/api/placeholder/400/320"
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;