import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Building Envelope Commissioning",
    category: "Project Management",
    description: "Led comprehensive building envelope commissioning process for commercial properties, including facade testing and quality assurance.",
    technologies: ["Technical Documentation", "Quality Control", "Testing Protocols"],
    highlights: [
      "Developed comprehensive testing protocols",
      "Managed quality assurance procedures",
      "Created detailed technical reports",
      "Coordinated with multiple stakeholders"
    ],
    image: "/api/placeholder/800/600"
  },
  {
    id: 2,
    title: "Construction Material Testing Program",
    category: "Technical Analysis",
    description: "Implemented and managed a comprehensive construction material testing program ensuring quality and compliance.",
    technologies: ["Material Testing", "Quality Assurance", "Technical Analysis"],
    highlights: [
      "Established testing procedures",
      "Conducted material analysis",
      "Generated detailed reports",
      "Maintained testing equipment"
    ],
    image: "/api/placeholder/800/600"
  },
  {
    id: 3,
    title: "Architectural Design Projects",
    category: "Architecture",
    description: "Designed and developed architectural plans for residential and commercial projects focusing on sustainability.",
    technologies: ["AutoCAD", "Revit", "SketchUp", "3D Modeling"],
    highlights: [
      "Created sustainable design solutions",
      "Developed detailed construction documents",
      "Coordinated with contractors",
      "Managed client relationships"
    ],
    image: "/api/placeholder/800/600"
  }
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden rounded-xl bg-white/5 backdrop-blur">
        <div className="relative h-64 w-full">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-900/30 rounded-full text-blue-300 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Key Highlights</h4>
                <ul className="list-disc list-inside space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-300">{highlight}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const categories = ["All", "Project Management", "Technical Analysis", "Architecture"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Project Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing my journey through architecture, construction management, and project leadership.
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;