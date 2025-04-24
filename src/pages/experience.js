import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';
import { getImagePath, getDocumentPath } from '../utils/path-utils';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('professional');
  const [expandedItem, setExpandedItem] = useState(null);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Professional experience data
  const professionalExperience = [
    {
      id: 1,
      role: "Facilities Staff Project Manager",
      company: "ECS Midwest, LLC",
      period: "August 2023 – Present",
      location: "Cleveland, Ohio",
      description: "Managing complex construction projects and building envelope commissioning with focus on structural rehabilitation and water infiltration remediation.",
      responsibilities: [
        {
          category: "Program Management & Project Delivery",
          items: [
            "Manage a portfolio of concurrent capital projects ($6M Stonebridge Condominium, $3M Cashelmara Condominium, $1.5M Park Building) from kick-off to close-out, demonstrating ownership and accountability",
            "Reduced project timelines by 15% through the implementation of standardized testing protocols and efficient resource allocation",
            "Lead by influencing cross-functional teams of contractors, engineers, and stakeholders to meet critical project milestones and KPIs",
            "Implement data-driven decision making through quantitative assessment methodologies, achieving a 12% improvement in diagnostic accuracy",
            "Communicate project status, risk assessments, and performance metrics to senior leadership, ensuring alignment with program objectives"
          ]
        },
        {
          category: "Process Improvements & Standardization",
          items: [
            "Developed standardized waterproofing solutions for building envelope systems, increasing consistency and reducing rework by 20%",
            "Streamlined technical documentation processes using Bluebeam and AutoCAD, reducing preparation time by 30%",
            "Established uniform quality control measures for testing protocols (ASTM E1105, AAMA 501.2), ensuring consistent standards across all projects",
            "Created scalable templates for bid documentation and technical specifications, improving efficiency for future projects",
            "Implemented structured reporting system for performance metrics, providing transparent progress tracking for stakeholders"
          ]
        },
        {
          category: "Technical Scope & Project Portfolio",
          items: [
            "Remove barriers to project execution through proactive problem-solving and decisive action in ambiguous situations",
            "Execute comprehensive building assessments for envelope systems, structural components, and life-safety compliance",
            "Coordinate on-site with installation vendors and contractors to resolve technical challenges in real-time",
            "Lead by example in construction environments, demonstrating willingness to 'roll up sleeves' to get things done",
            "Adapt quickly to changing project requirements while maintaining focus on quality, safety, and budget constraints"
          ]
        }
      ],
      logo: getImagePath("/images/ecs-logo.png")
    },
    {
      id: 2,
      role: "Construction Material Testing Intern",
      company: "ECS Midwest, LLC",
      period: "May 2023 – August 2023",
      location: "Cleveland, Ohio",
      description: "Provided support for construction quality control and testing operations, applying technical knowledge and analytical skills.",
      responsibilities: [
        {
          category: "Technical Testing & Analysis",
          items: [
            "Executed ASTM standard testing protocols with 99% accuracy, contributing to data-driven quality control processes",
            "Analyzed testing results to identify opportunities for material optimization and cost reduction",
            "Collaborated with project teams to implement and refine field testing procedures",
            "Developed technical reports with actionable recommendations based on quantitative data analysis"
          ]
        }
      ],
      logo: getImagePath("/images/ecs-logo.png")
    },
    {
      id: 3,
      role: "Graduate Assistant",
      company: "Bowling Green State University",
      period: "January 2022 – April 2023",
      location: "Bowling Green, Ohio",
      description: "Provided academic support while completing Master's degree in Construction Management Technology.",
      responsibilities: [
        {
          category: "Academic Support",
          items: [
            "Assisted professors with research in construction management and building technologies",
            "Supported course development and material preparation",
            "Contributed to academic papers and presentations in the field of construction management",
            "Maintained academic excellence with 4.0 GPA while working as a graduate assistant"
          ]
        }
      ],
      logo: getImagePath("/images/bgsu-logo.png")
    },
    {
      id: 4,
      role: "Junior Architect",
      company: "AN Architecture",
      period: "January 2019 – December 2021",
      location: "Bengaluru, India",
      description: "Contributed to architectural design, documentation, and site supervision for residential and commercial projects.",
      responsibilities: [
        {
          category: "Design & Documentation",
          items: [
            "Simultaneously managed 3 two-story residential projects, delivering all within budget and timeline constraints",
            "Coordinated with cross-functional teams (MEP, structural engineering) to resolve technical conflicts during design and construction",
            "Implemented sustainable building features that reduced energy consumption by 25% compared to conventional designs",
            "Conducted regular site inspections to ensure construction quality and adherence to specifications",
            "Successfully delivered visualization and material specification for 20-story residential tower from concept to completion"
          ]
        }
      ],
      logo: getImagePath("/images/an-logo.png")
    }
  ];

  // Education data
  const educationData = [
    {
      id: 1,
      degree: "Master of Science in Construction Management Technology",
      institution: "Bowling Green State University",
      location: "Bowling Green, OH",
      period: "January 2022 - August 2023",
      gpa: "4.0/4.0",
      courses: [
        "Construction Contracts & Dispute Resolution",
        "Advanced Estimation, Bidding & Cost Control",
        "Construction Management Planning & Scheduling",
        "Data Analysis & Decision Making"
      ],
      logo: getImagePath("/images/bgsu-logo.png")
    },
    {
      id: 2,
      degree: "Bachelor of Architecture",
      institution: "Reva University",
      location: "Bangalore, India",
      period: "June 2016 - September 2021",
      courses: [
        "Building Construction & Materials",
        "Structural Systems & Analysis",
        "Building Envelope Design",
        "Construction Documentation",
        "Project Planning & Management"
      ],
      logo: getImagePath("/images/reva-logo.png")
    }
  ];

  // Skills data
  const skillsData = {
    technical: [
      {
        category: "Project Management Tools",
        skills: ["Procore", "Primavera P6", "Bluebeam"]
      },
      {
        category: "Design Software",
        skills: ["AutoCAD", "Revit", "Lumion", "SketchUp"]
      },
      {
        category: "Data Analysis",
        skills: ["Construction metrics tracking", "Performance analytics", "Resource optimization"]
      }
    ],
    certifications: [
      {
        name: "Tremco's Elastomeric Sealant Contractor Training",
        date: "2023",
        issuer: "Tremco"
      },
      {
        name: "OSHA 30-Hour Construction",
        date: "2023",
        issuer: "OSHA"
      },
      {
        name: "Willseal SWRI Training Program",
        date: "2023",
        issuer: "Willseal"
      },
      {
        name: "Procore Certified: Student",
        date: "2022",
        issuer: "Procore"
      }
    ],
    competencies: [
      "Ownership",
      "Think Big",
      "Team Leadership & Coordination",
      "Quality Control & Assurance",
      "Construction Documentation",
      "Property Condition Assessments",
      "ADA Compliance & Safety Standards",
      "Budget & Resource Optimization",
      "Stakeholder Communication",
      "Design-Bid-Build Process",
      "Sustainable Building Practices"
    ]
  };

  return (
    <>
      <Head>
        <title>Experience | Chandana Gutta</title>
        <meta name="description" content="Chandana Gutta's professional experience, education, and skills in facilities management, construction, and architecture." />
      </Head>

      {/* Header Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-800/40 to-gray-800/40 text-white">
        {/* Darker gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${getImagePath('/images/experience-bg.jpg')})` }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-6 text-shadow-lg"
            >
              Professional Experience
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-100 mb-8 text-shadow"
            >
              Beyond buildings: My journey through envelope integrity, project execution, and architectural vision
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-20 z-20 py-4 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'professional', label: 'Professional Experience', icon: BriefcaseIcon },
              { id: 'education', label: 'Education', icon: AcademicCapIcon },
              { id: 'skills', label: 'Skills & Certifications', icon: CheckBadgeIcon }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full transition-all flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <AnimatePresence>
            {activeTab === 'professional' && (
              <motion.div
                key="professional"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="max-w-4xl mx-auto">
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    {professionalExperience.map((experience, index) => (
                      <motion.div
                        key={experience.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="mb-16 relative"
                      >
                        {/* Timeline dot */}
                        <div className="absolute -left-[25px] top-0 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-blue-600"></div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8 ml-4">
                          <div className="sm:flex justify-between items-start">
                            <div className="mb-4 sm:mb-0">
                              <h3 className="text-2xl font-bold text-gray-900">{experience.role}</h3>
                              <div className="flex items-center mt-2">
                                {experience.logo && (
                                  <img
                                    src={experience.logo}
                                    alt={experience.company}
                                    className="w-8 h-8 mr-2 rounded-full object-contain bg-gray-100"
                                  />
                                )}
                                <p className="text-blue-600 font-medium">{experience.company}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-gray-500">{experience.period}</p>
                              <p className="text-gray-500">{experience.location}</p>
                            </div>
                          </div>

                          <p className="text-gray-700 my-4 border-l-4 border-blue-200 pl-3">
                            {experience.description}
                          </p>

                          <div className="mt-6">
                            {experience.responsibilities.map((section, sectionIndex) => (
                              <div key={sectionIndex} className="mb-6">
                                <button
                                  onClick={() => setExpandedItem(expandedItem === `${experience.id}-${sectionIndex}` ? null : `${experience.id}-${sectionIndex}`)}
                                  className="flex justify-between items-center w-full text-left font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                                >
                                  <span>{section.category}</span>
                                  <ChevronDownIcon
                                    className={`h-5 w-5 transition-transform ${expandedItem === `${experience.id}-${sectionIndex}` ? 'rotate-180' : ''}`}
                                  />
                                </button>

                                <AnimatePresence>
                                  {expandedItem === `${experience.id}-${sectionIndex}` && (
                                    <motion.ul
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="mt-3 space-y-2 pl-4 text-gray-600 overflow-hidden"
                                    >
                                      {section.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start">
                                          <ChevronRightIcon className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                          <span className="ml-2">{item}</span>
                                        </li>
                                      ))}
                                    </motion.ul>
                                  )}
                                </AnimatePresence>

                                <div className="mt-2 border-b border-gray-100"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'education' && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="max-w-4xl mx-auto">
                  <div className="grid gap-8">
                    {educationData.map((education, index) => (
                      <motion.div
                        key={education.id}
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                      >
                        <div className="p-8">
                          <div className="sm:flex justify-between items-start">
                            <div>
                              <div className="flex items-center mb-3">
                                <AcademicCapIcon className="h-8 w-8 text-blue-600 mr-3" />
                                <h3 className="text-2xl font-bold text-gray-900">{education.degree}</h3>
                              </div>
                              <div className="flex items-center">
                                {education.logo && (
                                  <img
                                    src={education.logo}
                                    alt={education.institution}
                                    className="w-8 h-8 mr-2 rounded object-contain bg-gray-100"
                                  />
                                )}
                                <p className="text-blue-600 font-medium">{education.institution}</p>
                              </div>
                            </div>
                            <div className="text-right mt-4 sm:mt-0">
                              <p className="text-gray-500">{education.period}</p>
                              <p className="text-gray-500">{education.location}</p>
                              {education.gpa && (
                                <p className="text-blue-600 font-medium mt-1">GPA: {education.gpa}</p>
                              )}
                            </div>
                          </div>

                          <div className="mt-6">
                            <h4 className="font-semibold text-gray-800 mb-3">Key Coursework:</h4>
                            <div className="grid sm:grid-cols-2 gap-2">
                              {education.courses.map((course, courseIndex) => (
                                <div key={courseIndex} className="flex items-start">
                                  <ChevronRightIcon className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                  <span className="ml-2 text-gray-600">{course}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="max-w-4xl mx-auto">
                  {/* Technical Skills */}
                  <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    className="bg-white rounded-xl shadow-lg p-8 mb-8"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Expertise</h3>

                    <div className="grid md:grid-cols-2 gap-8">
                      {skillsData.technical.map((category, index) => (
                        <div key={index}>
                          <h4 className="text-lg font-semibold text-gray-800 mb-3">{category.category}</h4>
                          <div className="space-y-3">
                            {category.skills.map((skill, skillIndex) => (
                              <div key={skillIndex} className="flex items-center">
                                <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
                                <span className="text-gray-700">{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Certifications */}
                  <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-8 mb-8"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {skillsData.certifications.map((cert, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          className="p-4 border border-gray-200 rounded-lg flex items-start hover:shadow-md transition-all"
                        >
                          <CheckBadgeIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                            <p className="text-sm text-gray-500">{cert.issuer} • {cert.date}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Core Competencies */}
                  <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-xl shadow-lg p-8"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Competencies</h3>

                    <div className="flex flex-wrap gap-3">
                      {skillsData.competencies.map((competency, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors"
                        >
                          {competency}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Resume Download CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Want to see my full resume?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Download my detailed resume for a complete overview of my qualifications,
              experience, and achievements.
            </p>
            <div className="flex justify-center">
              <a
                href={getDocumentPath("/ChandanaGutta_Resume.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-full hover:bg-blue-50 transition-all text-lg font-medium"
                >
                  <DocumentTextIcon className="h-6 w-6 mr-2" />
                  Download Resume
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}



