import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  ChevronRightIcon,
  BuildingOffice2Icon,
  HomeModernIcon,
  BuildingLibraryIcon,
  ArrowsRightLeftIcon,
  AdjustmentsHorizontalIcon,
  BeakerIcon,
  WrenchScrewdriverIcon
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
      title: "Hospital Tower Envelope Performance Evaluation",
      description: "Comprehensive water infiltration testing at the MetroHealth Apex facility to validate the exterior envelope system, focusing on curtain wall assembly.",
      longDescription: "Our firm conducted comprehensive water infiltration testing at the MetroHealth Apex facility to validate the exterior envelope system. Testing focused on a United Architectural Metals curtain wall assembly in a punched opening. I constructed the specialized test chambers, integrating a centrifugal blower system for pressure control. The chambers were sealed to the concrete slab, metal studs, and steel beam. Following ASTM E1105 protocols, I implemented testing by first establishing baseline leakage with polyethylene sheeting and then measuring total airflow with the sheeting removed to determine net infiltration rates per square foot. This project demonstrates our commitment to building envelope integrity through precise validation testing.",
      image: "/images/portfolio/hospital-tower-1.jpg",
      additionalImages: [
        "/images/portfolio/hospital-tower-2.jpg",
        "/images/portfolio/hospital-tower-3.jpg",
        "/images/portfolio/hospital-tower-4.jpg"
      ],
      budget: "Confidential",
      date: "2022",
      location: "Cleveland, OH",
      category: "testing",
      technologies: ["ASTM E1105", "Water Infiltration Testing", "Building Envelope Validation", "Test Chamber Construction"],
      highlights: [
        "Constructed specialized test chambers with centrifugal blower system",
        "Implemented ASTM E1105 protocols for testing",
        "Measured total airflow to determine net infiltration rates per square foot",
        "Validated exterior envelope system integrity"
      ]
    },
    {
      id: 2,
      title: "Building Envelope Air Leakage Testing",
      description: "Comprehensive air leakage testing at the Ashley Courthouse Annex building with preparations handled by the contractor and their subcontractors.",
      longDescription: "We conducted comprehensive air leakage testing at the Ashley Courthouse Annex building with preparations handled by the contractor and their subcontractors. The building envelope area measured 94,830 square feet with an allowable air leakage rate of 0.40 CFM/SQFT at 75Pa pressure differential, totaling a maximum permissible leakage of 37,932 CFM for compliance. Building preparation included sealing mechanical dampers, addressing deficient door weather stripping, replacing missing glass with OSB panels, and isolating critical interfaces with the existing courthouse structure. These targeted preparatory measures ensured testing accuracy by eliminating known temporary air pathways that would be resolved during the final construction phases.",
      image: "/images/portfolio/air-leakage-1.jpg",
      additionalImages: [
        "/images/portfolio/air-leakage-2.jpg",
        "/images/portfolio/air-leakage-3.jpg",
        "/images/portfolio/air-leakage-4.jpg",
        "/images/portfolio/air-leakage-5.jpg"
      ],
      budget: "Confidential",
      date: "2023",
      location: "Cleveland, OH",
      category: "testing",
      technologies: ["Air Leakage Testing", "Building Envelope", "Compliance Testing", "75Pa Pressure Differential"],
      highlights: [
        "Tested 94,830 square feet of building envelope area",
        "Established allowable leakage rate of 0.40 CFM/SQFT at 75Pa",
        "Coordinated with contractors for building preparation",
        "Implemented strategic sealing and isolation techniques"
      ]
    },
    {
      id: 3,
      title: "12-story - Façade Redesign",
      description: "Comprehensive repair plan for The Condominiums at Stonebridge, a 12-story building experiencing air, moisture, and thermal difficulties since construction.",
      longDescription: "The Condominiums at Stonebridge are located on the historic Superior Viaduct between downtown Cleveland and Ohio City. The building operates as a 12-story condominium that was constructed in 2003 of conventional steel and cold-formed metal framing systems. The building's exterior consists of a combination of aluminum panels, corrugated metal sheet goods, and thin-brick veneer systems applied directly over exterior gypsum sheathing. Since completion, the building has been plagued with air, moisture, and thermal difficulties due to lack of an air vapor barrier system. To address these problems, our comprehensive repair plan includes removing existing façade components, installing new continuous rigid insulation, implementing a new weather barrier system with associated flashing, and installing new aluminum composite material panels. The project is being completed in two phases, beginning with the north and west elevations.",
      image: "/images/portfolio/facade-redesign-1.jpg",
      additionalImages: [
        "/images/portfolio/facade-redesign-2.jpg",
        "/images/portfolio/facade-redesign-3.jpg",
        "/images/portfolio/facade-redesign-4.jpg"
      ],
      budget: "Confidential",
      date: "2022 - 2024",
      location: "Cleveland, OH",
      category: "residential",
      technologies: ["Façade Redesign", "Weather Barrier Systems", "Building Envelope Repair", "Vapor Barrier Installation"],
      highlights: [
        "Developed comprehensive repair plan for 12-story condominium building",
        "Addressed air, moisture, and thermal difficulties through façade replacement",
        "Implemented new continuous rigid insulation and weather barrier system",
        "Executed two-phase approach starting with north and west elevations"
      ]
    },
    {
      id: 4,
      title: "Lakefront Condominium Renovation",
      description: "Comprehensive renovation of a historic lakefront mansion converted into condominiums experiencing water infiltration issues on the lake-facing façade.",
      longDescription: "We completed a comprehensive renovation of a historic lakefront mansion converted into condominiums. Units were experiencing water infiltration issues due to inadequate moisture protection on the lake-facing façade. Our project scope included replacing the original cedar siding with durable vinyl siding, waterproofing the traditional tile deck, and reconstructing and reinstalling the deck. Our targeted improvements successfully resolved the persistent water infiltration problems, protecting the historic structure while ensuring residents' comfort and property preservation.",
      image: "/images/portfolio/lakefront-condo-1.jpg",
      additionalImages: [
        "/images/portfolio/lakefront-condo-2.jpg",
        "/images/portfolio/lakefront-condo-3.jpg",
        "/images/portfolio/lakefront-condo-4.jpg",
        "/images/portfolio/lakefront-condo-5.jpg"
      ],
      budget: "$500K",
      date: "2023",
      location: "Cleveland, OH",
      category: "historic",
      technologies: ["Waterproofing", "Siding Replacement", "Historic Building Renovation", "Deck Reconstruction"],
      highlights: [
        "Replaced original cedar siding with durable vinyl siding",
        "Implemented comprehensive waterproofing for traditional tile deck",
        "Reconstructed and reinstalled deck with improved drainage",
        "Resolved persistent water infiltration issues in historic structure"
      ]
    },
    {
      id: 5,
      title: "Timber Court - Roof Design",
      description: "Comprehensive roofing system design and contract administration services for a commercial facility.",
      longDescription: "We provided comprehensive roofing system design and contract administration services for the client's facility. Our scope included conducting collaborative design development after agreement on the membrane/insulation system options, creating preliminary and final plans with detailed technical specifications for the new roofing system, meeting with the client to discuss project plans and requirements, developing a complete design bid package with alternatives and anticipated construction cost estimates, preparing and distributing final Contract Documents, responding to technical inquiries, conducting an on-site pre-bid meeting, and providing expert recommendations for construction contract awards. We ensured provision of a well-designed roofing solution with thorough documentation and professional oversight throughout the bidding process.",
      image: "/images/portfolio/timber-court-1.jpg",
      additionalImages: [
        "/images/portfolio/timber-court-2.jpg",
        "/images/portfolio/timber-court-3.jpg",
        "/images/portfolio/timber-court-4.jpg"
      ],
      budget: "Confidential",
      date: "2023",
      location: "Cleveland, OH",
      category: "commercial",
      technologies: ["Roofing System Design", "Technical Specifications", "Contract Administration", "Bid Package Development"],
      highlights: [
        "Developed detailed technical specifications for new roofing system",
        "Created comprehensive design bid package with alternatives",
        "Conducted on-site pre-bid meeting with contractors",
        "Provided expert recommendations for construction contract awards"
      ]
    },
    {
      id: 6,
      title: "Structural Inspection: Cleveland Clinic Garage",
      description: "Comprehensive structural inspection of the existing Walker Center Parking Garage with detailed assessment and documentation.",
      longDescription: "We performed a comprehensive structural inspection of the existing Walker Center Parking Garage located in Cleveland, Ohio. Our scope of work included visual assessment of the tops and undersides of all accessible garage floors, evaluation of the exterior facade conditions visible from floor level, documentation of structural and cosmetic defects across all four levels (basement, first floor, second floor, and roof), identification of water infiltration issues and potential sources, assessment of concrete condition (including spalls, cracks, and joint deterioration), evaluation of masonry walls (including crack documentation and control joint condition), comprehensive photographic documentation of all observed deficiencies, creation of detailed drawings showing precise locations of identified defects, and development of a written report with findings and recommendations for repairs. Our inspection established the overall condition of this cast-in-place reinforced concrete structure while identifying specific areas requiring maintenance or remediation.",
      image: "/images/portfolio/garage-inspection-1.jpg",
      additionalImages: [
        "/images/portfolio/garage-inspection-2.jpg",
        "/images/portfolio/garage-inspection-3.jpg",
        "/images/portfolio/garage-inspection-4.jpg",
        "/images/portfolio/garage-inspection-5.jpg"
      ],
      budget: "Confidential",
      date: "2022",
      location: "Cleveland, OH",
      category: "commercial",
      technologies: ["Structural Inspection", "Condition Assessment", "Documentation & Reporting", "Concrete Evaluation"],
      highlights: [
        "Conducted visual assessment of all accessible garage floors",
        "Documented structural and cosmetic defects across four levels",
        "Identified water infiltration issues and potential sources",
        "Developed comprehensive report with repair recommendations"
      ]
    },
    {
      id: 7,
      title: "Quality Assurance & Project Management",
      description: "Specialized construction quality assurance and comprehensive project management for condominium renovations and multiple construction projects.",
      longDescription: "We provide specialized construction quality assurance consulting for the renovation of a 37-unit condominium complex originally developed in 1986, while also offering expert project management services across a variety of construction and renovation projects. For the condominium renovation, our team oversees the replacement of cedar siding systems and auxiliary components, including gutters, downspouts, and trim. We identify critical contract oversights, including the absence of provisions for replacement of deteriorated roof sheathing, costs for framing or structural member replacements, and other miscellaneous replacements that may be uncovered. Our approach includes establishing effective tracking methods for managing unexpected discoveries, conducting progressive inspections of key building components, and ensuring comprehensive quality control throughout the construction process. We focus on proactive problem-solving, stakeholder coordination, and maintaining strict adherence to project timelines and budgets while ensuring all work meets or exceeds industry standards.",
      image: "/images/portfolio/condo-qa-1.jpg",
      additionalImages: [
        "/images/portfolio/condo-qa-2.jpg",
        "/images/portfolio/condo-qa-3.jpg",
        "/images/portfolio/condo-qa-4.jpg",
        "/images/portfolio/project-mgmt-1.jpg",
        "/images/portfolio/project-mgmt-2.jpg",
        "/images/portfolio/project-mgmt-3.jpg",
        "/images/portfolio/project-mgmt-4.jpg"
      ],
      budget: "Varied",
      date: "2023 - Present",
      location: "Cleveland, OH",
      category: "management",
      technologies: ["Quality Assurance", "Project Management", "Construction Oversight", "Contract Analysis", "Inspection Services", "Stakeholder Coordination"],
      highlights: [
        "Oversee replacement of cedar siding systems and auxiliary components",
        "Identify critical contract oversights and recommend solutions",
        "Establish tracking methods for managing unexpected discoveries",
        "Conduct progressive inspections of flashing components and rooftop penetrations",
        "Coordinate between contractors, clients, and regulatory authorities",
        "Ensure adherence to project specifications and quality standards"
      ]
    },
    /* Projects removed as requested:
       - Stonebridge Condominium
       - Cashelmara Condominium
       - Park Building
       - Two-Story Residential Projects
       - 20-Story Residential Tower
    */
  ];

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Projects', icon: AdjustmentsHorizontalIcon },
    { id: 'residential', name: 'Residential', icon: HomeModernIcon },
    { id: 'commercial', name: 'Commercial', icon: BuildingOffice2Icon },
    { id: 'historic', name: 'Historic', icon: BuildingLibraryIcon },
    { id: 'high-rise', name: 'High-Rise', icon: ArrowsRightLeftIcon },
    { id: 'testing', name: 'Testing & Validation', icon: BeakerIcon },
    { id: 'management', name: 'Project Management', icon: WrenchScrewdriverIcon }
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
      <section className="relative py-24 bg-gradient-to-r from-blue-800/20 to-gray-800/20 text-white">
        {/* Lighter gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-75"
          style={{ backgroundImage: `url(${getImagePath('/images/portfolio-bg.jpg')})` }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-6 text-shadow-lg"
            >
              My Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-100 mb-8 text-shadow"
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

                    {/* Budget tag removed as requested */}

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

                          {/* Image Gallery - only show if there are additional images */}
                          {project.additionalImages && project.additionalImages.length > 0 && (
                            <div className="mb-6">
                              <h4 className="font-semibold text-gray-900 mb-3">Project Images:</h4>
                              <div className="grid grid-cols-2 gap-2">
                                {project.additionalImages.map((img, idx) => (
                                  <div key={idx} className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                                    <div
                                      className="w-full h-full bg-blue-100"
                                      style={{
                                        backgroundImage: `url(${getImagePath(img)})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                      }}
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
                            {project.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-sm">{highlight}</li>
                            ))}
                          </ul>

                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">{project.location}</span>
                            {/* Full Case Study link removed as requested */}
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






