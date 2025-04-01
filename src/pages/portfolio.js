import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  ChevronRightIcon, 
  ArrowTopRightOnSquareIcon,
  BuildingOffice2Icon,
  HomeModernIcon,
  BuildingLibraryIcon,
  ArrowsRightLeftIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';
import { getImagePath } from '../utils/path-utils';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProject, setVisibleProject] = useState(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true);
  }, []);

  // Project data
  const projects = [
    {
      id: 1,
      title: "Stonebridge Condominium",
      description: "Comprehensive building envelope rehabilitation project addressing water infiltration and structural issues in a multi-unit residential complex.",
      longDescription: "Led the rehabilitation of Stonebridge Condominium's building envelope, a complex project involving extensive waterproofing solutions, structural repairs, and facade restoration. The project required coordination with multiple stakeholders including the condominium board, residents, and specialized contractors. Implemented standardized waterproofing solutions which increased consistency across the building and reduced rework by 20%.",
      image: "/images/stonebridge.jpg",
      budget: "$6M",
      date: "2023 - Present",
      location: "Cleveland, OH",
      category: "residential",
      technologies: ["ASTM E1105 Testing", "Waterproofing", "Structural Repairs", "Facade Restoration"],
      highlights: [
        "Reduced project timeline by 15% through implementation of standardized testing protocols",
        "Developed custom waterproofing solutions for critical problem areas",
        "Coordinated with 7 specialized contractors to ensure seamless project execution",
        "Maintained resident satisfaction through transparent communication during disruptions"
      ]
    },
    {
      id: 2,
      title: "Cashelmara Condominium",
      description: "Historic 11-story building restoration with focus on preserving architectural integrity while implementing modern waterproofing and structural reinforcement solutions.",
      longDescription: "The Cashelmara Condominium project involved the restoration of a historic 11-story building with strict preservation requirements. As project manager, I led the documentation of existing conditions, development of restoration approaches, and coordination with historical preservation authorities. The project successfully balanced historic authenticity with modern performance requirements.",
      image: "/images/cashelmara.jpg",
      budget: "$3M",
      date: "2023 - Present",
      location: "Cleveland, OH",
      category: "historic",
      technologies: ["Historic Preservation", "Structural Reinforcement", "Facade Restoration", "AAMA 501.2 Testing"],
      highlights: [
        "Ensured compliance with historical preservation requirements while upgrading building performance",
        "Implemented data-driven decision making for diagnostics with 12% improvement in accuracy",
        "Developed documentation protocols for historic elements to guide restoration process",
        "Coordinated with preservation authorities to secure necessary approvals"
      ]
    },
    {
      id: 3,
      title: "Park Building",
      description: "Commercial and residential mixed-use building renovation focusing on structural rehabilitation, ADA compliance, and energy efficiency improvements.",
      longDescription: "The Park Building project represents a comprehensive approach to mixed-use building renovation. The scope included structural rehabilitation, envelope improvements, and accessibility upgrades. The project required careful planning and phasing to minimize disruption to current tenants while implementing significant improvements throughout the structure.",
      image: "/images/parkbuilding.jpg",
      budget: "$1.5M",
      date: "2023 - Present",
      location: "Cleveland, OH",
      category: "commercial",
      technologies: ["ADA Compliance", "Energy Efficiency", "Structural Rehabilitation", "Building Envelope Assessment"],
      highlights: [
        "Coordinated phased implementation to allow continued building occupancy during renovation",
        "Identified and addressed critical structural issues in early project phases",
        "Implemented energy efficiency improvements resulting in 18% estimated energy savings",
        "Achieved full ADA compliance through strategic accessibility modifications"
      ]
    },
    {
      id: 4,
      title: "Two-Story Residential Projects",
      description: "Management of multiple residential projects from concept to completion, with focus on client satisfaction and sustainable design elements.",
      longDescription: "During my time as a Junior Architect at AN Architect, I managed three two-story residential projects simultaneously. Each project required unique design solutions, client coordination, and construction oversight. I implemented sustainable building features that reduced energy consumption by approximately 25% compared to conventional designs.",
      image: "/images/residential-projects.jpg",
      budget: "Varied",
      date: "2019 - 2021",
      location: "Bengaluru, India",
      category: "residential",
      technologies: ["Sustainable Design", "Residential Architecture", "Construction Documentation", "Site Supervision"],
      highlights: [
        "Simultaneously managed 3 residential projects while meeting all client requirements",
        "Implemented sustainable features reducing energy consumption by 25%",
        "Coordinated with MEP and structural engineers to resolve technical conflicts",
        "Conducted regular site inspections ensuring construction quality and specification adherence"
      ]
    },
    {
      id: 5,
      title: "20-Story Residential Tower",
      description: "Visualization and material specification for a high-rise residential tower, focusing on modern design elements and efficient space utilization.",
      longDescription: "Contributed to the design and documentation of a 20-story residential tower in Bengaluru, delivering visualization and material specification from concept to completion. The project focused on modern aesthetics, optimized space utilization, and integration of community amenities. My role involved creating detailed renderings, material specifications, and coordination with the design team.",
      image: "/images/high-rise.jpg",
      budget: "Confidential",
      date: "2020 - 2021",
      location: "Bengaluru, India",
      category: "high-rise",
      technologies: ["High-rise Design", "3D Visualization", "Material Specification", "Space Planning"],
      highlights: [
        "Created photorealistic renderings that secured client approval for design concept",
        "Developed comprehensive material specifications balancing aesthetics and durability",
        "Optimized unit layouts to maximize space efficiency in a dense urban environment",
        "Collaborated with senior architects to refine design concepts and technical documentation"
      ]
    }
  ];

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Projects', icon: AdjustmentsHorizontalIcon },
    { id: 'residential', name: 'Residential', icon: HomeModernIcon },
    { id: 'commercial', name: 'Commercial', icon: BuildingOffice2Icon },
    { id: 'historic', name: 'Historic', icon: BuildingLibraryIcon },
    { id: 'high-rise', name: 'High-Rise', icon: ArrowsRightLeftIcon }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Head>
        <title>Portfolio | Chandana Gutta</title>
        <meta name="description" content="Explore Chandana Gutta's portfolio of building envelope, architectural, and construction management projects." />
      </Head>

      {/* Header Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ backgroundImage: `url(${getImagePath('/images/portfolio-bg.jpg')})` }}  
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-6"
            >
              My Portfolio
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              A collection of my work in building envelope commissioning, 
              project management, and architectural design.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full transition-all flex items-center space-x-2 ${
                    activeFilter === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{category.name}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  variants={itemVariants}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-64 relative overflow-hidden">
                    <div 
                      className="w-full h-full bg-blue-100 hover:scale-110 transition-transform duration-700"
                      style={{
                        backgroundImage: `url(${getImagePath(project.image)})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    
                    {project.budget && (
                      <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm shadow-lg">
                        Budget: {project.budget}
                      </div>
                    )}
                    
                    <div className="absolute top-3 left-3">
                      <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm text-gray-500">{project.date}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <button
                      onClick={() => setVisibleProject(visibleProject === project.id ? null : project.id)}
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center group"
                    >
                      {visibleProject === project.id ? 'Show Less' : 'Project Details'}
                      <ChevronRightIcon className={`h-5 w-5 ml-1 transition-transform group-hover:translate-x-1 ${visibleProject === project.id ? 'rotate-90' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {visibleProject === project.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-gray-100 overflow-hidden"
                        >
                          <p className="text-gray-700 mb-4">{project.longDescription}</p>
                          
                          <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
                            {project.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-sm">{highlight}</li>
                            ))}
                          </ul>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">{project.location}</span>
                            <Link href={`/portfolio/${project.id}`} className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                              Full Case Study 
                              <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No projects found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Interested in Working Together?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how my expertise in building envelope systems and project management 
              can contribute to the success of your next project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-900 px-8 py-4 rounded-full hover:bg-blue-50 transition-all text-lg font-medium"
                >
                  Contact Me
                </motion.button>
              </Link>
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all text-lg font-medium"
                >
                  Back to Homepage
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}