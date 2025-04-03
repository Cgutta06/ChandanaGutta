import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Hospital Tower Envelope Performance Evaluation",
      description: "Conducted comprehensive water infiltration testing at the MetroHealth Apex facility to validate the exterior envelope system, focusing on a United Architectural Metals curtain wall assembly in a punched opening.",
      details: "I constructed specialized test chambers, integrating a centrifugal blower system for pressure control. The chambers were sealed to the concrete slab, metal studs, and steel beam. Following ASTM E1105 protocols, I implemented testing by first establishing baseline leakage with polyethylene sheeting and then measuring total airflow with the sheeting removed to determine net infiltration rates per square foot.",
      skills: ["Water Infiltration Testing", "ASTM E1105", "Building Envelope Validation"],
      images: ["/images/portfolio/hospital-tower-1.jpg", "/images/portfolio/hospital-tower-2.jpg", "/images/portfolio/hospital-tower-3.jpg", "/images/portfolio/hospital-tower-4.jpg"]
    },
    {
      title: "Building Envelope Air Leakage Testing",
      description: "Conducted comprehensive air leakage testing at the Ashley Courthouse Annex building with preparations handled by the contractor and their subcontractors.",
      details: "The building envelope area measured 94,830 square feet with an allowable air leakage rate of 0.40 CFM/SQFT at 75Pa pressure differential, totaling a maximum permissible leakage of 37,932 CFM for compliance. Building preparation included sealing mechanical dampers, addressing deficient door weather stripping, replacing missing glass with OSB panels, and isolating critical interfaces with the existing courthouse structure. These targeted preparatory measures ensured testing accuracy by eliminating known temporary air pathways that would be resolved during the final construction phases.",
      skills: ["Air Leakage Testing", "Building Envelope", "Compliance Testing"],
      images: ["/images/portfolio/air-leakage-1.jpg", "/images/portfolio/air-leakage-2.jpg", "/images/portfolio/air-leakage-3.jpg", "/images/portfolio/air-leakage-4.jpg", "/images/portfolio/air-leakage-5.jpg"]
    },
    {
      title: "12-story - Façade Redesign",
      description: "Comprehensive repair plan for The Condominiums at Stonebridge, a 12-story building located on the historic Superior Viaduct that has experienced air, moisture, and thermal difficulties since construction in 2003.",
      details: "The building has been plagued with air, moisture, and thermal difficulties due to the lack of an air vapor barrier system on the exterior sheathing. Our repair plan includes removing the existing façade components, installing new continuous rigid insulation on the exterior, implementing a new weather barrier system with associated flashing components, and installing new aluminum composite material panels. The project is being completed in two phases, with the first phase addressing the north and west elevations, followed by work on the south and east elevations.",
      skills: ["Façade Redesign", "Weather Barrier Systems", "Building Envelope Repair"],
      images: ["/images/portfolio/facade-redesign-1.jpg", "/images/portfolio/facade-redesign-2.jpg", "/images/portfolio/facade-redesign-3.jpg", "/images/portfolio/facade-redesign-4.jpg"]
    },
    {
      title: "Lakefront Condominium Renovation",
      description: "Completed a comprehensive renovation of a historic lakefront mansion converted into condominiums that were experiencing water infiltration issues due to inadequate moisture protection on the lake-facing façade.",
      details: "Our project scope included replacing the original cedar siding with durable vinyl siding, waterproofing the traditional tile deck, and reconstructing and reinstalling the deck. These targeted improvements successfully resolved the persistent water infiltration problems, protecting the historic structure while ensuring residents' comfort and property preservation.",
      skills: ["Waterproofing", "Siding Replacement", "Historic Building Renovation"],
      images: ["/images/portfolio/lakefront-condo-1.jpg", "/images/portfolio/lakefront-condo-2.jpg", "/images/portfolio/lakefront-condo-3.jpg", "/images/portfolio/lakefront-condo-4.jpg", "/images/portfolio/lakefront-condo-5.jpg"]
    },
    {
      title: "Timber Court - Roof Design",
      description: "Provided comprehensive roofing system design and contract administration services for the client's facility.",
      details: "Our scope included conducting collaborative design development after agreement on the membrane/insulation system options, creating preliminary and final plans with detailed technical specifications for the new roofing system, meeting with the client to discuss project plans and requirements, developing a complete design bid package with alternatives and anticipated construction cost estimates, preparing and distributing final Contract Documents, responding to technical inquiries, conducting an on-site pre-bid meeting, and providing expert recommendations for construction contract awards.",
      skills: ["Roofing System Design", "Technical Specifications", "Contract Administration"],
      images: ["/images/portfolio/timber-court-1.jpg", "/images/portfolio/timber-court-2.jpg", "/images/portfolio/timber-court-3.jpg", "/images/portfolio/timber-court-4.jpg", "/images/portfolio/timber-court-5.jpg"]
    },
    {
      title: "Structural Inspection: Cleveland Clinic Garage",
      description: "Performed a comprehensive structural inspection of the existing Walker Center Parking Garage located in Cleveland, Ohio.",
      details: "Our scope of work included visual assessment of the tops and undersides of all accessible garage floors, evaluation of the exterior facade conditions, documentation of structural and cosmetic defects across all four levels, identification of water infiltration issues, assessment of concrete condition (including spalls, cracks, and joint deterioration), evaluation of masonry walls, comprehensive photographic documentation, creation of detailed drawings showing precise locations of identified defects, and development of a written report with findings and recommendations for repairs.",
      skills: ["Structural Inspection", "Condition Assessment", "Documentation & Reporting"],
      images: ["/images/portfolio/garage-inspection-1.jpg", "/images/portfolio/garage-inspection-2.jpg", "/images/portfolio/garage-inspection-3.jpg", "/images/portfolio/garage-inspection-4.jpg", "/images/portfolio/garage-inspection-5.jpg"]
    },
    {
      title: "Quality Assurance for Condominium Renovation",
      description: "Provided specialized construction quality assurance consulting for the renovation of a 37-unit condominium complex originally developed in 1986.",
      details: "Our team was engaged to oversee the replacement of cedar siding systems and auxiliary components, including gutters, downspouts, and trim. We identified critical contract oversights, including the absence of provisions for replacement of deteriorated roof sheathing, costs for framing or structural member replacements, and other miscellaneous replacements that may be uncovered. We recommended negotiating these items with contractors and establishing tracking methods to manage unexpected discoveries effectively. As the project advanced, our team conducted progressive inspections of flashing components and rooftop penetrations to ensure comprehensive quality control throughout the renovation process.",
      skills: ["Quality Assurance", "Construction Oversight", "Contract Analysis"],
      images: ["/images/portfolio/condo-qa-1.jpg", "/images/portfolio/condo-qa-2.jpg", "/images/portfolio/condo-qa-3.jpg", "/images/portfolio/condo-qa-4.jpg", "/images/portfolio/condo-qa-5.jpg"]
    },
    {
      title: "Building Envelope Commissioning",
      description: "Led comprehensive building envelope commissioning process for commercial properties",
      details: "Managed the commissioning process to ensure building envelope systems met design intent and performance requirements. This included document review, field testing coordination, and verification of proper installation techniques.",
      skills: ["Facade Testing", "Load Testing", "Technical Documentation"],
      images: ["/placeholder-1.jpg"]
    },
    {
      title: "Construction Material Testing",
      description: "Conducted extensive testing of construction materials for quality assurance",
      details: "Performed laboratory and field testing of various construction materials to verify compliance with specifications and industry standards. Produced comprehensive reports detailing test results and recommendations.",
      skills: ["Material Testing", "Quality Control", "Technical Analysis"],
      images: ["/placeholder-2.jpg"]
    },
    {
      title: "Architectural Design Projects",
      description: "Designed and developed architectural plans for residential and commercial projects",
      details: "Created detailed architectural plans and 3D models for a variety of residential and commercial projects. Worked closely with clients to ensure designs met their functional and aesthetic requirements.",
      skills: ["AutoCAD", "Revit", "3D Modeling"],
      images: ["/placeholder-3.jpg"]
    }
  ];

  const closeModal = () => {
    setSelectedProject(null);
  };

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
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
              <img
                src={project.images[0]}
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

      {/* Modal for displaying project details */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {selectedProject.images.map((image, idx) => (
                  <div key={idx} className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${selectedProject.title} - Image ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Description
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {selectedProject.details}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Portfolio;