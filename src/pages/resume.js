import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  DocumentTextIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ChevronRightIcon,
  CheckBadgeIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function Resume() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  // Resume data from the resume PDF
  const personalInfo = {
    name: "Chandana Gutta",
    title: "Facilities Project Manager | Building Envelope Commission | Architect",
    phone: "+1 (419) 378-6671",
    email: "gutta18.chandana@gmail.com",
    linkedin: "www.linkedin.com/in/chandana-gutta",
    location: "Greater Cleveland, Ohio"
  };
  
  const summary = `Detail-oriented Facilities Project Manager with proven experience managing complex construction projects up to $6M. Skilled in building envelope systems, structural restoration, and technical assessments with a unique combination of architectural training and hands-on construction management. Demonstrated ability to coordinate cross-functional teams, drive project execution, and deliver results in ambiguous environments.`;
  
  const experiences = [
    {
      role: "Facilities Project Manager",
      company: "ECS Midwest, LLC",
      period: "August 2023 – Present",
      location: "Cleveland, Ohio",
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
      ]
    },
    {
      role: "Construction Material Testing Intern",
      company: "ECS Midwest, LLC",
      period: "May 2023 – August 2023",
      location: "Cleveland, Ohio",
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
      ]
    },
    {
      role: "Junior Architect",
      company: "AN Architect",
      period: "January 2019 – December 2021",
      location: "Bengaluru, India",
      responsibilities: [
        {
          category: "Project Management & Design",
          items: [
            "Simultaneously managed 3 two-story residential projects, delivering all within budget and timeline constraints",
            "Coordinated with cross-functional teams (MEP, structural engineering) to resolve technical conflicts during design and construction",
            "Implemented sustainable building features that reduced energy consumption by 25% compared to conventional designs",
            "Conducted regular site inspections to ensure construction quality and adherence to specifications",
            "Successfully delivered visualization and material specification for 20-story residential tower from concept to completion"
          ]
        }
      ]
    }
  ];
  
  const education = [
    {
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
      ]
    },
    {
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
      ]
    }
  ];
  
  const skills = {
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
    ]
  };
  
  const certifications = [
    "Tremco's Elastomeric Sealant Contractor Training",
    "OSHA 30-Hour Construction",
    "Willseal SWRI Training Program",
    "Procore Certified: Student"
  ];
  
  const competencies = [
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
  ];

  return (
    <>
      <Head>
        <title>Resume | Chandana Gutta</title>
        <meta name="description" content="Professional resume of Chandana Gutta - Facilities Project Manager, Building Envelope Commissioner, and Architect." />
      </Head>
      
      <div className="bg-gray-50 py-12 min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden"
          >
            {/* Resume Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-10 text-white">
              <motion.div
                variants={fadeInUp}
                className="flex flex-col md:flex-row justify-between items-start md:items-end"
              >
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{personalInfo.name}</h1>
                  <p className="text-blue-100 mt-2">{personalInfo.title}</p>
                </div>
                <div className="mt-4 md:mt-0 md:text-right">
                  <a 
                    href="/ChandanaGutta_Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <DocumentTextIcon className="h-5 w-5 mr-2" />
                    Download PDF
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
              >
                <a href={`tel:${personalInfo.phone}`} className="flex items-center">
                  <DevicePhoneMobileIcon className="h-5 w-5 mr-2 text-blue-300" />
                  <span>{personalInfo.phone}</span>
                </a>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center">
                  <EnvelopeIcon className="h-5 w-5 mr-2 text-blue-300" />
                  <span>{personalInfo.email}</span>
                </a>
                <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <GlobeAltIcon className="h-5 w-5 mr-2 text-blue-300" />
                  <span>{personalInfo.linkedin}</span>
                </a>
              </motion.div>
            </div>
            
            {/* Summary */}
            <motion.div
              variants={fadeInUp}
              className="px-8 py-6 border-b border-gray-200"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-3">Professional Summary</h2>
              <p className="text-gray-600 leading-relaxed">{summary}</p>
            </motion.div>
            
            {/* Experience */}
            <motion.div
              variants={fadeInUp}
              className="px-8 py-6 border-b border-gray-200"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <BriefcaseIcon className="h-6 w-6 mr-2 text-blue-600" />
                Professional Experience
              </h2>
              
              <div className="space-y-8">
                {experiences.map((experience, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="pl-4 border-l-2 border-blue-200"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{experience.role}</h3>
                        <p className="text-blue-600">{experience.company}</p>
                      </div>
                      <div className="text-gray-500 mt-1 md:mt-0 md:text-right">
                        <p>{experience.period}</p>
                        <p>{experience.location}</p>
                      </div>
                    </div>
                    
                    <div className="mt-3 space-y-3">
                      {experience.responsibilities.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h4 className="font-semibold text-gray-700">{section.category}</h4>
                          <ul className="mt-2 space-y-1">
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start">
                                <ChevronRightIcon className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span className="ml-2 text-gray-600 text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Education */}
            <motion.div
              variants={fadeInUp}
              className="px-8 py-6 border-b border-gray-200"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <AcademicCapIcon className="h-6 w-6 mr-2 text-blue-600" />
                Education
              </h2>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="pl-4 border-l-2 border-blue-200">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{edu.degree}</h3>
                        <p className="text-blue-600">{edu.institution}</p>
                      </div>
                      <div className="text-gray-500 mt-1 md:mt-0 md:text-right">
                        <p>{edu.period}</p>
                        <p>{edu.location}</p>
                        {edu.gpa && <p className="text-blue-600 font-medium">GPA: {edu.gpa}</p>}
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <h4 className="font-semibold text-gray-700">Key Coursework:</h4>
                      <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-1">
                        {edu.courses.map((course, courseIndex) => (
                          <li key={courseIndex} className="flex items-start">
                            <ChevronRightIcon className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span className="ml-2 text-gray-600 text-sm">{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Skills & Certifications */}
            <motion.div
              variants={fadeInUp}
              className="px-8 py-6 border-b border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Skills Section */}
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Technical Skills</h2>
                  
                  <div className="space-y-4">
                    {skills.technical.map((category, index) => (
                      <div key={index}>
                        <h3 className="font-semibold text-gray-700">{category.category}</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {category.skills.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex} 
                              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Certifications Section */}
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Certifications</h2>
                  <ul className="space-y-2">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-start">
                        <CheckBadgeIcon className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="ml-2 text-gray-600">{cert}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">Core Competencies</h2>
                  <div className="flex flex-wrap gap-2">
                    {competencies.map((competency, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {competency}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Footer */}
            <motion.div
              variants={fadeInUp}
              className="px-8 py-6 bg-gray-50 text-center"
            >
              <p className="text-gray-600">
                Thank you for reviewing my resume. For a more interactive experience, please 
                {' '}
                <Link href="/" className="text-blue-600 hover:underline">
                  visit my portfolio
                </Link>
                {' '}
                or 
                {' '}
                <Link href="/contact" className="text-blue-600 hover:underline">
                  contact me
                </Link>
                .
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}