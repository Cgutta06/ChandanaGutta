import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownIcon, BuildingOffice2Icon, AcademicCapIcon, BriefcaseIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scrollRef = useRef(null);
  const [activeSkillTab, setActiveSkillTab] = useState('technical');

  const experiences = [
    {
      role: "Facilities Staff Project Manager",
      company: "ECS MIDWEST Limited",
      period: "Aug 2023 – Present",
      location: "Cleveland, OH",
      highlights: [
        "Managed 15+ concurrent projects ($10M+ portfolio)",
        "40% improvement in energy efficiency",
        "Developed 50+ technical specifications",
        "Led building envelope commissioning"
      ]
    },
    {
      role: "Construction Material Testing Intern",
      company: "ECS MIDWEST Limited",
      period: "May 2023 – Aug 2023",
      location: "Cleveland, OH",
      highlights: [
        "Performed ASTM standard testing",
        "Conducted field and laboratory testing",
        "Prepared technical reports",
        "Material analysis and recommendations"
      ]
    },
    {
      role: "Architect",
      company: "An Architect",
      period: "Jan 2019 – Dec 2021",
      location: "India",
      highlights: [
        "Designed 3 Two-Story Residential Buildings",
        "20-Stories Residential Tower design",
        "3D modeling and high-quality renderings",
        "Construction documentation and coordination"
      ]
    }
  ];

  const skills = {
    technical: ["Bluebeam", "Primavera P6", "Auto-CAD", "Revit", "Lumion", "SketchUp", "Photoshop", "Illustrator", "Procore"],
    professional: [
      "Construction Management",
      "Building Envelope Restoration",
      "Budget Management",
      "Cost Control",
      "Specification Development",
      "Design-Bid-Build Process",
      "Property Condition Assessments",
      "ADA Compliance Assessments",
      "Quality Assurance (QA/QC)"
    ],
    certifications: [
      "Tremco's Elastomeric Sealant",
      "OSHA 30 Construction",
      "Willseal SWRI Training",
      "Procore Certified: Student"
    ]
  };

  const projects = [
    {
      name: "Stonebridge Condominium",
      description: "Re-roofing and re-building envelope project",
      budget: null,
      type: "Renovation"
    },
    {
      name: "Cashelmara Condominium",
      description: "Historic 11-stories building restoration",
      budget: "6M USD",
      type: "Historic Restoration"
    },
    {
      name: "Park Building",
      description: "9-story building structural renovations",
      budget: "1.5M USD",
      type: "Commercial/Residential"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section - Made Shorter */}
      <section className="h-[80vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-gray-900 opacity-90" />
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center mix-blend-overlay" />
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-4xl mx-auto text-center"
          >
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
              Chandana Gutta
            </h1>
            <h2 className="text-2xl mb-6 text-blue-200">
              Facilities Project Manager || Construction Management || Architect
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transforming architectural visions into reality with expertise in sustainable design 
              and building envelope commissioning.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all"
                >
                  View Portfolio
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white/10 transition-all"
              >
                Explore More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience and Projects Grid Section */}
      <section ref={scrollRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Experience Column */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{exp.role}</h3>
                        <p className="text-blue-600">{exp.company}</p>
                      </div>
                      <div className="text-right text-sm text-gray-600">
                        <p>{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Projects Column */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Projects</h2>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all"
                  >
                    <div className="h-40 bg-blue-100 relative overflow-hidden">
                      <img
                        src="/api/placeholder/400/300"
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {project.budget && (
                        <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                          Budget: {project.budget}
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
                      <p className="text-gray-600">{project.description}</p>
                      <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {project.type}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Skills & Expertise</h2>
          <div className="flex gap-4 mb-8">
            {['technical', 'professional', 'certifications'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSkillTab(tab)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeSkillTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <motion.div
            key={activeSkillTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {skills[activeSkillTab].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-800">{skill}</span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-1 bg-blue-600 rounded-full mt-2"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA - Shorter Version */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-4">Ready to Collaborate?</h2>
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-900 px-6 py-3 rounded-full hover:bg-blue-50 transition-all"
                >
                  Contact Me
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white/10 transition-all"
                >
                  View Portfolio
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}